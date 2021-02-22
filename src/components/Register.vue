<template>
  <div id="register">
    <v-app>
      <h1 style="margin-top: 70px;margin-bottom: 50px">Welcome to register page</h1>
      <v-container style="width: 500px;height: 500px">
        <v-text-field v-model="username"
                label="Username" outlined rounded clearable
        ></v-text-field>
        <v-text-field type="password" v-model="password"
                      label="Password" outlined rounded clearable
        ></v-text-field>
        <v-text-field v-model="email"
                label="Email" outlined rounded clearable
        ></v-text-field>
        <v-text-field v-model="countryName"
                label="Country" outlined rounded clearable
        ></v-text-field>
        <v-text-field @focus="snackbar = true" v-model="flagImg"
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
          <v-snackbar v-if="snackbarErrorVisible"
                      v-model="snackbarErrorVisible"
                      timeout="5000"
          >
            {{error}}
            <v-btn
                    color="blue"
                    text
                    @click="closeErrorSnackbar"
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
    import UserService from '@/services/user-service'

    export default {
        name: "Register",
        data()
        {
            return{
                snackbarErrorVisible: false,
                error: '',
                username:'',
                password:'',
                email:'',
                countryName:'',
                flagImg:'',
                snackbar: false,
                closeSnackbar: true,
            }
        },
        methods: {
            closeErrorSnackbar()
            {
                this.snackbarErrorVisible = false
                this.error = ''
            },
            clkBtnRegister() {
                UserService.register(this.username,this.password,this.email,
                this.countryName,this.flagImg).then(response => {
                    if (response.status === 201)
                    {
                        console.log(response.data)
                        console.log(response.status)
                        router.push({ path: `login` })
                    }
                }).catch(error => {
                    if (error.response) {
                        this.snackbarErrorVisible = true;
                        this.error = error.response.data
                        console.log(error.response.data);
                        console.log(error.response.status);
                    }
                })
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
