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
    </v-app>
</template>

<script>
    import SystemService from "@/services/system-service"
    export default {
        name: "SendFeedback",
        data()
        {
           return{
               text: '',
               rating: 0,
           }
        },
        methods:{
            sendFeedback()
            {
                console.log('sending feedback...')
                let userId = '5fb92cde490b69cce9f464df'
                SystemService.sendFeedback(userId,this.rating,this.text).then(response => {
                    if (response.status === 200)
                    {
                        console.log(response.data)
                        console.log(response.status)
                        alert('Thank you for feedback!')
                    }
                }).catch(error => {
                    if (error.response) {
                        console.log(error.response.data);
                        console.log(error.response.status);
                        alert('Error!')
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>
