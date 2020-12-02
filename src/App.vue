<template>
  <v-app>
    <v-app-bar app color="primary" dark dense>
      <div class="d-flex align-center">
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

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

    <v-main>
      <div class="d-flex justify-center">
        <!-- <navbar /> -->
        <router-view />
      </div>
    </v-main>
  </v-app>
</template>

<script>
// import Navbar from "@/components/Navbar";

export default {
  name: "App",

  // components: {
  //   Navbar
  // }
};
</script>
