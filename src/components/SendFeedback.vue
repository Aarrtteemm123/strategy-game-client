<template>
    <v-app>
      <v-sheet
              elevation="12"
              class="pa-12"
              style="width: 650px;margin-top: 70px;"
      >
        <h3 >Message</h3>
        <v-textarea
                v-model="text"
                auto-grow
                clearable
                counter
                placeholder="Write your feedback here..."
                hint="Writing..."
        ></v-textarea>
        <v-rating length="6" size="30" v-model="rating"></v-rating>
        <v-btn v-on:click="sendFeedback" x-large style="width: 150px;margin-top: 20px;" rounded color="primary" dark>
          Send
        </v-btn>
      </v-sheet>
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
        name: "SendFeedback",
        data()
        {
           return{
               snackbarVisible: false,
               error: '',
               text: '',
               rating: 0,
           }
        },
        methods:{
            closeSnackbar()
            {
                this.snackbarVisible = false
                this.error = ''
            },
            sendFeedback()
            {
                console.log('sending feedback...')
                let userId = this.$cookies.get('userId')
                let token = this.$cookies.get('token')
                SystemService.sendFeedback(userId,token,this.rating,this.text).then(response => {
                    if (response.status === 200)
                    {
                        console.log(response.data)
                        console.log(response.status)
                        alert('Thank you for feedback!')
                    }
                    if (response.status === 208)
                    {
                        this.snackbarVisible = true;
                        this.error = response.data
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
    }
</script>

<style scoped>

</style>
