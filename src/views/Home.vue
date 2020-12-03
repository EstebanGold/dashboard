<template>
  <div class="home ma-3">
    <v-row>
      <v-col md="2" v-for="category in categories" :key="category.id">
        {{ category.name }}
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Home",
  data() {
    return {
      searchTerm: "action"
    };
  },
  computed: {
    ...mapState({
      categories: state => state.movies.categories
    })
  },
  methods: {
    loadCategories() {
      this.$store.dispatch("movies/loadCategories");
    }
  },
  mounted() {
    this.loadCategories();
  }
};
</script>

<style scoped>
.home {
  width: 100%;
  min-height: 81%;
}
</style>
