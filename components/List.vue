<script setup lang="ts">
import {Characters} from "~/src/gql/graphql";

const query = gql`
query getCharacters {
  characters {
    results {
      name
    }
  }
}
`

const {data} = useAsyncQuery(query);
</script>

<template>
  Abiba
</template>