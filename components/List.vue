<script setup lang="ts">
import { newOffersGql, NewOfferType } from '~/apollo/queries/new/newOffers';
import { request } from '~/helpers/request';
import { _AsyncData } from '#app/composables/asyncData';
type WrappedOffer = { offers: { data: NewOfferType[] } };

async function requestNewOffers(
  variables,
): Promise<_AsyncData<WrappedOffer, Error>> {
  return await request(newOffersGql, variables, true, true);
}
let variables = computed(() => {
  return {
    mark_slug: null,
    folder_slug: null,
    sort: 'created_at|desc',
    page: 1,
    limit: 4,
  };
});

const { data: offers } = await requestNewOffers(variables.value);
</script>

<template>
  <PaddingBox>
    <h1>Автомобили</h1>
    <div class="cars">
      <OfferItem
        v-for="carOffer in offers.offers.data"
        :key="carOffer.id"
        class="car"
        :offer="carOffer"
      />
    </div>
  </PaddingBox>
</template>

<style lang="sass" scoped>
.cars
  display: flex
  gap: 25px
  .car
    width: 25%
</style>
