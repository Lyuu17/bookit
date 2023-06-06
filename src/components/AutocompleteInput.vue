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
import { ref, reactive, computed } from "vue";

export default {
  setup() {
    const searchText = ref("");
    const provinces = reactive([
      "Álava",
      "Albacete",
      "Alicante",
      "Almería",
      "Asturias",
      "Ávila",
      "Badajoz",
      "Barcelona",
      "Burgos",
      "Cáceres",
      "Cádiz",
      "Cantabria",
      "Castellón",
      "Ciudad Real",
      "Córdoba",
      "Cuenca",
      "Gerona",
      "Granada",
      "Guadalajara",
      "Guipúzcoa",
      "Huelva",
      "Huesca",
      "Islas Baleares",
      "Jaén",
      "La Coruña",
      "La Rioja",
      "Las Palmas",
      "León",
      "Lérida",
      "Lugo",
      "Madrid",
      "Málaga",
      "Murcia",
      "Navarra",
      "Orense",
      "Palencia",
      "Pontevedra",
      "Salamanca",
      "Santa Cruz de Tenerife",
      "Segovia",
      "Sevilla",
      "Soria",
      "Tarragona",
      "Teruel",
      "Toledo",
      "Valencia",
      "Valladolid",
      "Vizcaya",
      "Zamora",
      "Zaragoza",
    ]);
    const showSuggestions = ref(false);

    const suggestions = computed(() => {
      return provinces.filter((province) =>
        province.toLowerCase().includes(searchText.value.toLowerCase())
      );
    });

    const search = () => {
      showSuggestions.value = searchText.value === "" ? false : true;
    };

    const selectSuggestion = (suggestion) => {
      searchText.value = suggestion;
      showSuggestions.value = false;
    };

    return {
      searchText,
      suggestions,
      showSuggestions,
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
