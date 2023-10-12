<script setup>
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
console.log(data.value, 'kex')
</script>

<template>
  Abiba
</template>