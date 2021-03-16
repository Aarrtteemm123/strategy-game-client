<template>
  <v-row justify="center">
    <v-dialog
            v-model="dialogExit"
            max-width="290"
    >
      <v-card>
        <v-card-title style="margin-left: 85px" class="headline">Logout</v-card-title>

        <v-card-text>
          Are you sure you want logout from your account?
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
                  color="blue darken-1"
                  text
                  @click="dialogExit = false"
          >
            No
          </v-btn>

          <v-btn
                  color="blue darken-1"
                  text
                  @click="logout"
          >
            Yes
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
    import router from "@/router";
    import UserService from '@/services/user-service';

    export default {
        name: "Exit",
        data()
        {
            return{
                dialogExit: true,
            }
        },
        methods:{
            logout()
            {
                // exit
                this.dialogExit = false;
                console.log('Exit func')
                let userId = this.$cookies.get('userId')
                let token = this.$cookies.get('token')
                UserService.logout(userId,token).then(response => {
                    if (response.status === 200)
                    {
                        console.log(response.data)
                        console.log(response.status)
                        router.push({path: '/login'})
                        localStorage.clear()
                        this.$cookies.remove("userId");
                        this.$cookies.remove("token");
                    }
                }).catch(error => {
                    if (error.response) {
                        console.log(error.response.data);
                        console.log(error.response.status);
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>
