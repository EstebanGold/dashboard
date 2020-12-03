<template>
  <v-app>
    <v-app-bar app color="primary" dark dense>
      <div class="d-flex align-center">
        <span class="title">FactSet</span>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <v-icon>mdi-on</v-icon>
      </v-btn>
    </v-app-bar>
    <template v-if="active">
      <navbar />
    </template>

    <v-main>
      <div class="d-flex justify-center">
        <router-view />
      </div>
    </v-main>
    <v-footer
      color="primary lighten-1 d-flex align-center justify-center"
      dark
      padless
      fixed
    >
      <span class="title">{{ year }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import { mapState } from "vuex";

import Navbar from "@/components/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar
  },
  data() {
    return {
      year: new Date().getFullYear()
    };
  },
  computed: {
    ...mapState({
      active: state => state.users.userActive
    })
  }
};
</script>
