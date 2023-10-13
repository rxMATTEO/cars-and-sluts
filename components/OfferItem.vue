<script setup lang="ts">
import { NewOfferType } from '~/apollo/queries/new/newOffers';

type OfferItemProps = {
  offer: NewOfferType
}
const props = defineProps<OfferItemProps>();
console.log(props);
</script>

<template>
<div>
  <div>{{ offer.color }}</div>
</div>
</template>