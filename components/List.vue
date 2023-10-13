<script setup lang="ts">
import {newOffersGql, NewOfferType} from "~/apollo/queries/new/newOffers";
import {request} from "~/helpers/request";
import {_AsyncData} from "#app/composables/asyncData";
type WrappedOffer = { offers : { data: NewOfferType[] } }

async function requestNewOffers(variables): Promise<_AsyncData<WrappedOffer, Error>>{
  return await request(newOffersGql, variables, true, true)
}
let variables = computed(() => {
  return {
    mark_slug: null,
    folder_slug: null,
    sort: 'created_at|desc',
    page: 1,
    limit: 4
  }
})

const { data: offers } = await requestNewOffers(variables.value);
</script>

<template>
  <div v-for="carOffer in offers.offers.data">
    <OfferItem :offer="carOffer" />
  </div>
</template>