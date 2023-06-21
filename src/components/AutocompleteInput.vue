<template>
  <div class="relative">
    <input
      v-model="city_name"
      @input="search"
      type="text"
      class="outline-none bottom-0 left-0 z-10 max-h-48 overflow-y-auto bg-white border border-gray-300 rounded-md p-2 autocomplete-input"
      placeholder="Search a city..."
    />
    <ul
      v-if="suggestionsShowing && suggestions.length"
      class="absolute left-0 top-full mt-2 w-full bg-white border border-gray-300 rounded-md p-2 autocomplete-list"
    >
      <li
        v-for="suggestion in suggestions"
        :key="suggestion"
        @click="selectSuggestion(suggestion)"
        class="cursor-pointer hover:bg-neutral-300"
      >
        {{ suggestion.city }}, {{ suggestion.country }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import axios from "axios";
import { ref, watch } from "vue";

const city_name = ref("");
const suggestionsShowing = ref(false);
const suggestions = ref<any[]>([]);
const suggestionTimeout: any = ref(null);
const suggestionWasUpdated = ref(false);

const emit = defineEmits(["suggestion-selected"]);

const search = async () => {
  if (suggestionWasUpdated.value) {
    suggestionWasUpdated.value = false;
    return;
  }

  if (city_name.value.trim().length < 3) {
    hideSuggestions();
    return;
  }

  if (suggestionTimeout.value) {
    clearTimeout(suggestionTimeout.value);
    suggestionTimeout.value = null;
  }

  suggestionTimeout.value = setTimeout(async () => {
    try {
      const { data } = await axios.get(`/api/v1/geocode/${city_name.value}?limit=7`);
      suggestions.value = data.filter(
        (suggestion: any) => suggestion.city && suggestion.country
      );
    } catch (error) {
      console.error(error);
    }

    suggestionsShowing.value = suggestions.value.length > 0;
  }, 400);
}

const selectSuggestion = (suggestion: any) => {
  city_name.value = `${suggestion.city}, ${suggestion.country}`;
  suggestionWasUpdated.value = true;
  hideSuggestions();
  emit("suggestion-selected", { city: suggestion.city, country: suggestion.country });
}

const hideSuggestions = () => {
  suggestionsShowing.value = false;
  suggestions.value = [];
}

const showSuggestions = () => {
  suggestionsShowing.value = true;
}

watch(city_name, search);
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
