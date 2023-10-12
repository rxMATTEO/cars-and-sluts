<script setup lang="ts">
import {Character, GetCharactersQuery} from "~/types/graphql";

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
  <CharacterItem />
</template>