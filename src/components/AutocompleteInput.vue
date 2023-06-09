<template>
  <div class="relative">
    <input
      v-model="searchText"
      @input="search"
      type="text"
      class="outline-none bottom-0 left-0 z-10 max-h-48 overflow-y-auto bg-white border border-gray-300 rounded-md p-2 autocomplete-input"
      placeholder="Destination Name"
    />
    <ul
      v-if="showSuggestions && suggestions.length"
      class="absolute left-0 top-full mt-2 w-full bg-white border border-gray-300 rounded-md p-2 autocomplete-list"
    >
      <li
        v-for="suggestion in suggestions"
        :key="suggestion"
        @click="selectSuggestion(suggestion)"
        class="cursor-pointer"
      >
        {{ suggestion }}
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, reactive, computed, watch } from "vue";

export default {
  setup() {
    const searchText = ref("");
    const showSuggestions = ref(false);
    const suggestions = ref([]);

    const search = async () => {
      if (searchText === "") {
        showSuggestions = false;
        suggestions.value = [];
        return;
      }

      try {
        const response = await axios.get(
          `http://localhost:3005/api/v1/geocode/${searchText.value}`
        );
        suggestions.value = response.data;
        showSuggestions = true;
      } catch (e) {
        console.log(e);
      }
    };

    const selectSuggestion = (suggestion) => {
      searchText.value = suggestion.formattedAddress;
      showSuggestions.value = false;
    };

    watch(searchText, () => {
      search();
    });

    return {
      searchText,
      showSuggestions,
      suggestions,
      search,
      selectSuggestion,
    };
  },
};
</script>

<style scoped>
.autocomplete-input {
  outline: none;
}

.autocomplete-list {
  position: absolute;
  left: 0;
  top: 100%;
  margin-top: 0.5rem;
  width: 100%;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 0.375rem;
  padding: 0.5rem;
}
</style>
