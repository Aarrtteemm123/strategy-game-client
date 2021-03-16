<template>
  <v-app>
    <v-card
            class="mx-auto"
            elevation="10"
            width="800"
            style="margin-top: 40px;"
    >
      <v-card-text>
        <p class="display-1 text--primary">
          Settings
        </p>
        <hr>
          <v-container >
            <h2>System notifications</h2>
            <v-switch v-model="notifyList" @change="updateSettings" label="notify news" value="news"></v-switch>
            <hr>
            <h2 style="margin-top: 10px">Game notifications</h2>
            <v-switch v-model="notifyList" @change="updateSettings" label="notify attacks on the country" value="attacks"></v-switch>
            <v-switch v-model="notifyList" @change="updateSettings" label="notify when warehouse overflow or empty" value="warehouse overflow or empty"></v-switch>
            <v-switch v-model="notifyList" @change="updateSettings" label="notify on low budget" value="low budget"></v-switch>
            <v-switch v-model="notifyList" @change="updateSettings" label="notify on low population" value="low population"></v-switch>
          </v-container>
      </v-card-text>
    </v-card>
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
</template>

<script>
    import SystemService from "@/services/system-service"
    export default {
        name: "Settings",
        data(){
            return{
                snackbarVisible: false,
                error: '',
                notifyList: [],
            }
        },
        methods: {
            closeSnackbar()
            {
                this.snackbarVisible = false
                this.error = ''
            },

            updateSettingsPage()
            {
                console.log('Inside settings updatePage')
                let userId = this.$cookies.get('userId')
                let token = this.$cookies.get('token')
                SystemService.getView(userId,token,'Settings').then(response => {
                    if (response.status === 200)
                    {
                        console.log(response.data)
                        console.log(response.status)
                        Object.entries(response.data).forEach(element => {
                            if (element[1])
                                this.notifyList.push(element[0])
                        })
                    }
                }).catch(error => {
                    if (error.response) {
                        this.snackbarVisible = true;
                        this.error = error.response.data
                        console.log(error.response.data);
                        console.log(error.response.status);
                    }
                })
            },

            updateSettings()
            {
                console.log(this.notifyList)
                let userId = this.$cookies.get('userId')
                let token = this.$cookies.get('token')
                SystemService.setSetting(userId,token,this.notifyList).then(response => {
                    if (response.status === 200)
                    {
                        console.log(response.data)
                        console.log(response.status)
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
        },
        mounted()
        {
            this.updateSettingsPage()
        }
    }
</script>

<style scoped>

</style>
