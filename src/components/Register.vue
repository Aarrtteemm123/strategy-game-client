<template>
  <div id="register">
    <v-app>
      <h1 style="margin-top: 70px;margin-bottom: 50px">Welcome to register page</h1>
      <v-form ref="form" lazy-validation style="margin-left: 505px;width: 500px;height: 500px">
        <v-text-field :rules="usernameRules" v-model="username"
                label="Username" outlined rounded clearable required
        ></v-text-field>
        <v-text-field :rules="passwordRules" type="password" v-model="password"
                      label="Password" outlined rounded clearable required
        ></v-text-field>
        <v-text-field :rules="emailRules" v-model="email"
                label="Email" outlined rounded clearable required
        ></v-text-field>
        <v-text-field :rules="countryRules" v-model="countryName"
                label="Country" outlined rounded clearable required
        ></v-text-field>
        <v-text-field :rules="flagImgRules" @focus="snackbar = true" v-model="flagImg"
                label="Flag" outlined rounded clearable required
        ></v-text-field>
        <v-btn v-on:click="clkBtnBack()" x-large
               style="width: 150px;margin-top: 20px;margin-right: 100px"
               rounded color="primary" dark>Back
        </v-btn>
        <v-btn v-on:click="[validate(), clkBtnRegister()]" x-large
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
      </v-form>
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
                usernameRules: [
                    v => !!v || 'Username is required',
                ],
                passwordRules: [
                    v => !!v || 'Password is required',
                    v => (v && v.length > 8) || 'Password must be contains more than 8 characters',
                ],
                emailRules: [
                    v => !!v || 'E-mail is required',
                    v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
                ],
                countryRules: [
                    v => !!v || 'Country name is required',
                ],
                flagImgRules: [
                    v => !!v || 'Flag link is required',
                ],
                snackbar: false,
                closeSnackbar: true,
            }
        },
        methods: {
            validate () {
                return this.$refs.form.validate()
            },

            closeErrorSnackbar()
            {
                this.snackbarErrorVisible = false
                this.error = ''
            },
            clkBtnRegister() {
                if (this.validate())
                {
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
                }
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
