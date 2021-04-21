<template>
  <div id="title">
    <v-app>
      <AnalogClock style="padding-left: 710px;padding-top: 120px" v-bind:tick="tick"></AnalogClock>
      <h1 style="margin-top: -580px;margin-bottom: 50px">Welcome to our game</h1>
      <v-form ref="form" lazy-validation style="margin-left: 505px;width: 500px;height: 500px;">
        <v-text-field :rules="usernameRules" v-model="username" style="margin-bottom: 20px"
                      label="Username" outlined rounded clearable required
        ></v-text-field>
        <v-text-field :rules="passwordRules" v-model="password" type="password"
                      label="Password" outlined rounded clearable required
        ></v-text-field>
        <v-btn v-on:click="clkBtnRegister()" x-large style="width: 150px;margin-top: 20px;margin-right: 100px" rounded
               color="primary" dark>Register
        </v-btn>
        <v-btn v-on:click="[validate(), clkBtnLogin()]" x-large style="width: 150px;margin-top: 20px;" rounded color="primary" dark>
          Login
        </v-btn>
      </v-form>
      <router-view></router-view>
      <v-snackbar v-if="snackbarVisible"
                  v-model="snackbarVisible"
                  timeout="5000"
      >
        {{error}}
        <v-btn
                color="blue"
                text
                @click="closeSnackbar"
        >
          Close
        </v-btn>
      </v-snackbar>
    </v-app>
  </div>
</template>

<script>
    import router from "@/router";
    import UserService from '@/services/user-service';
    import AnalogClock from "@/components/AnalogClock";

    export default {
        name: "Title",
        components: {AnalogClock},
        data()
        {
          return{
              snackbarVisible: false,
              error: '',
              usernameRules: [
                  v => !!v || 'Username is required',
              ],
              passwordRules: [
                  v => !!v || 'Password is required',
                  v => (v && v.length > 8) || 'Password must be contains more than 8 characters',
              ],
              username:'',
              password:'',
              tick: 0,
              time: { hours: 0, minutes: 0, seconds: 0 }
          }
        },
        methods: {
            validate () {
                return this.$refs.form.validate()
            },

            closeSnackbar()
            {
                this.snackbarVisible = false
                this.error = ''
            },
            updateTime(time) {
                this.tick++
                this.time = {
                    hours: time.getHours(),
                    minutes: time.getMinutes(),
                    seconds: time.getSeconds()
                }

                setTimeout(() => this.updateTime(new Date()), 1000 - new Date().getMilliseconds())
            },
            clkBtnRegister() {
                router.push({path: 'register'})
            },
            clkBtnLogin() {
                if (this.validate())
                {
                    UserService.login(this.username,this.password).then(response => {
                        if (response.status === 202)
                        {
                            console.log(response.data)
                            console.log(response.status)
                            this.$cookies.set("userId",response.data['user_id'],"1d");
                            this.$cookies.set("token",response.data['token'],"1d");
                            router.push({ path: `/game/${response.data['user_id']}` })
                        }
                    }).catch(error => {
                        if (error.response) {
                            this.snackbarVisible = true;
                            this.error = error.response.data
                            console.log(error.response.data);
                            console.log(error.response.status);
                        }
                    })
                }
            }
        },
        mounted() {
            this.updateTime(new Date())
        }
    }
</script>

<style scoped>
  #title {
    font-size: larger;
  }
</style>
