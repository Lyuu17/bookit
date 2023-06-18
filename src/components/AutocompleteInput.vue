<template>
  <div class="relative">
    <input
      v-model="city_name"
      @input="search"
      type="text"
      class="outline-none bottom-0 left-0 z-10 max-h-48 overflow-y-auto bg-white border border-gray-300 rounded-md p-2 autocomplete-input"
      placeholder="City Name"
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
        {{ suggestion.city }}, {{ suggestion.country }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";
import axios from "axios";

const city_name = ref("");
const showSuggestions = ref(false);
const suggestions = ref([]);

const emit = defineEmits(["suggestion-selected"]);

async function search() {
  if (!city_name.value) {
    hideSuggestions();
    suggestions.value = [];
    return;
  }

  try {
    const response = await axios.get(`/api/v1/geocode/${city_name.value}?limit=7`);
    suggestions.value = response.data.filter(
      (suggestion: any) => suggestion.city && suggestion.country
    );
  } catch (error) {
    console.error(error);
  }

  showSuggestions.value = suggestions.value.length > 0;
}

function selectSuggestion(suggestion: any) {
  city_name.value = suggestion.city + ", " + suggestion.country;
  hideSuggestions();
  emit("suggestion-selected", { city: suggestion.city, country: suggestion.country });
}

function hideSuggestions() {
  showSuggestions.value = false;
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
