<template>
  <div id="title">
    <v-app>
      <h1 style="margin-top: 70px;margin-bottom: 70px">Welcome to title page</h1>
      <v-container style="width: 500px;height: 500px">
        <v-text-field style="margin-bottom: 20px"
                      label="Username" outlined rounded clearable
        ></v-text-field>
        <v-text-field type="password"
                      label="Password" outlined rounded clearable
        ></v-text-field>
        <v-btn v-on:click="clkBtnRegister()" x-large style="width: 150px;margin-top: 20px;margin-right: 100px" rounded
               color="primary" dark>Register
        </v-btn>
        <v-btn v-on:click="clkBtnLogin()" x-large style="width: 150px;margin-top: 20px;" rounded color="primary" dark>
          Login
        </v-btn>
      </v-container>
      <router-view></router-view>
    </v-app>
  </div>
</template>

<script>
    import router from "@/router";

    export default {
        name: "Title",
        methods: {
            clkBtnRegister() {
                router.push({path: 'register'})
            },
            clkBtnLogin() {
                // auth user
                console.log('auth user');
                router.push({path: 'main'})
            }
        }
    }
</script>

<style scoped>
  #title {
    font-size: larger;
  }
</style>
