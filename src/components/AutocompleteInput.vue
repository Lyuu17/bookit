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
  data() {
    return {
      searchText: "",
      suggestions: [],
      provinces: [
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
      ],
      showSuggestions: false,
    };
  },
  methods: {
    search() {
      this.suggestions = this.provinces.filter((province) =>
        province.toLowerCase().includes(this.searchText.toLowerCase())
      );
      this.showSuggestions = true;
    },
    selectSuggestion(suggestion) {
      this.searchText = suggestion;
      this.showSuggestions = false;
    },
  },
};
</script>
