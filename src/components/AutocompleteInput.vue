<template>
  <div>
    <input
      v-model="searchText"
      @input="search"
      type="text"
      placeholder="Buscar provincia"
    />
    <ul v-if="showSuggestions">
      <li
        v-for="suggestion in suggestions"
        :key="suggestion"
        @click="selectSuggestion(suggestion)"
      >
        {{ suggestion }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
</script>
