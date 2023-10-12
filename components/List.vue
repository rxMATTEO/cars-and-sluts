<script setup lang="ts">
import {newOffersGql} from "~/apollo/queries/new/newOffers";
import {request} from "~/helpers/request";

const offers = gql
    `query getOffers {
    offers {
      data {
        bodyType {
          name
        }
        color {
          name
        }
        description
        price
        price_old
      }
    }
}`

const requestNewOffers = async (variables) => {
  return await request(newOffersGql, variables, true, true)
};
let variables = computed(() => {
  return {
    mark_slug: null,
    folder_slug: null,
    sort: 'created_at|desc',
    page: 1,
    limit: 4
  }
})
const {pending, data} = await requestNewOffers(variables.value)
console.log(data)
</script>

<template>
  <CharacterItem />
</template>