<script setup lang="ts">
import { NewOfferType } from '~/apollo/queries/new/newOffers';

type OfferItemProps = {
  offer: NewOfferType
}
const props = defineProps<OfferItemProps>();
console.log(props);
</script>

<template>
<div class="car">
  <div>
    <div class="image">
      <NuxtImg class="car__image" :src="offer.images[0].medium_webp" format="webp" densities="x1 x1" />
    </div>
    <div class="car__content">
      <div>
        <p>{{ offer.name }}</p>
      </div>
      <div>
        <p>{{ offer.price }}</p>
      </div>
    </div>
  </div>
</div>
</template>

<style lang="sass" scoped>
.car
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)
  border-radius: 5px
  display: flex
  flex-direction: column
  .image
    height: 184px
    .car__image
      width: 100%
      height: 100%
      display: block
      object-fit: cover
  .car__content
    padding: 0 10px 10px 10px
</style>