<template>
  <div id="title">
    <v-app>
      <AnalogClock style="padding-left: 710px;padding-top: 120px" v-bind:tick="tick"></AnalogClock>
      <h1 style="margin-top: -580px;margin-bottom: 50px">Welcome to our game</h1>
      <v-container style="width: 500px;height: 500px;">
        <v-text-field v-model="username" style="margin-bottom: 20px"
                      label="Username" outlined rounded clearable
        ></v-text-field>
        <v-text-field v-model="password" type="password"
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
    import UserService from '@/services/user-service';
    import AnalogClock from "@/components/AnalogClock";

    export default {
        name: "Title",
        components: {AnalogClock},
        data()
        {
          return{
              username:'',
              password:'',
              tick: 0,
              time: { hours: 0, minutes: 0, seconds: 0 }
          }
        },
        methods: {
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
                // auth user
                UserService.login(this.username,this.password).then(response => {
                    if (response.status === 202)
                    {
                        console.log(response.data)
                        console.log(response.status)
                        let userId = response.data
                        router.push({ path: `/game/${userId}` })
                    }
                }).catch(error => {
                    if (error.response) {
                        console.log(error.response.data);
                        console.log(error.response.status);
                    }
                })
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
