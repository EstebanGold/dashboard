<template>
  <v-card class="card-width mt-6">
    <v-card-title class="d-flex justify-center mb-1">Login</v-card-title>
    <v-divider></v-divider>
    <v-card-text>
      <v-text-field
        v-model="userName"
        label="User Name"
        required
      ></v-text-field>
      <v-text-field v-model="pass" label="Password" required></v-text-field>
    </v-card-text>
    <v-card-actions>
      <div class="d-flex justify-space-around mb-4">
        <v-btn @click="submit"> submit </v-btn>
        <v-btn @click="clear"> clear </v-btn>
      </div>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "Login",
  data: () => {
    return {
      userName: "",
      pass: ""
    };
  },
  methods: {
    async submit() {
      let user = {
        user_name: this.userName,
        pass: ""
      };

      await this.$store.dispatch("users/getUser", user);
      this.$router.push("Home");
    },
    clear() {
      this.userName = "";
      this.pass = "";
    }
  }
};
</script>
<style scoped>
.card-width {
  width: 50%;
}
</style>
