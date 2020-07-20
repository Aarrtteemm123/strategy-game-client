<template>
  <div id="register">
    <v-app>
      <h1 style="margin-top: 70px;margin-bottom: 50px">Welcome to register page</h1>
      <v-container style="width: 500px;height: 500px">
        <v-text-field
                label="Username" outlined rounded clearable
        ></v-text-field>
        <v-text-field type="password"
                      label="Password" outlined rounded clearable
        ></v-text-field>
        <v-text-field
                label="Email" outlined rounded clearable
        ></v-text-field>
        <v-text-field
                label="Country" outlined rounded clearable
        ></v-text-field>
        <v-text-field @focus="snackbar = true"
                label="Flag" outlined rounded clearable
        ></v-text-field>
        <v-btn v-on:click="clkBtnBack()" x-large
               style="width: 150px;margin-top: 20px;margin-right: 100px"
               rounded color="primary" dark>Back
        </v-btn>
        <v-btn v-on:click="clkBtnRegister()" x-large
               style="width: 150px;margin-top: 20px;" rounded color="primary"
               dark>Register
        </v-btn>
        <div class="text-center ma-2">
          <v-snackbar v-if="closeSnackbar"
                  v-model="snackbar"
                  timeout="3000"
          >
            You can add only link on image
            <v-btn
                    color="blue"
                    text
                    @click="checkSnackbar"
            >
              Close
            </v-btn>
          </v-snackbar>
        </div>
      </v-container>
    </v-app>
    <router-view></router-view>
  </div>
</template>

<script>
    import router from "@/router";

    export default {
        name: "Register",
        data()
        {
            return{
                snackbar: false,
                closeSnackbar: true,
                step: 1
            }
        },
        methods: {
            clkBtnRegister() {
                // register user
                console.log('registering new user')
                router.push({path: 'login'})
            },
            clkBtnBack() {
                router.push({path: 'login'})
            },
            checkSnackbar()
            {
                this.snackbar = false;
                this.closeSnackbar = false;
            }
        }
    }
</script>

<style scoped>

</style>
