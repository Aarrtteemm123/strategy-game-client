<template>
  <v-card
          class="mx-auto"
          elevation="10"
          width="800"
  >
    <v-card-text>
      <p class="display-1 text--primary">
        Frequently questioned answers
      </p>

      <v-expansion-panels v-for="item in this.FQAList" v-bind:key="item.id+item">
        <v-expansion-panel>
          <v-expansion-panel-header>{{item.question}}</v-expansion-panel-header>
          <v-expansion-panel-content>
            {{item.answer}}
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-card-text>
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
  </v-card>
</template>

<script>
    import SystemService from "@/services/system-service"
    export default {
        name: "FQA",
        data()
        {
            return{
                FQAList: [],
                snackbarVisible: false,
                error: '',
            }
        },
        methods:
        {
            closeSnackbar()
            {
                this.snackbarVisible = false
                this.error = ''
            },

            updateFQAPage()
            {
                console.log('Inside FQA updatePage')
                let userId = this.$cookies.get('userId')
                let token = this.$cookies.get('token')
                SystemService.getView(userId,token,'FQA').then(response => {
                    if (response.status === 200)
                    {
                        console.log(response.data)
                        console.log(response.status)
                        this.FQAList = response.data
                    }
                }).catch(error => {
                    if (error.response) {
                        this.snackbarVisible = true
                        this.error = error.response.data
                        console.log(error.response.data);
                        console.log(error.response.status);
                    }
                })
            }
        },
        mounted()
        {
            this.updateFQAPage()
        }
    }
</script>

<style scoped>

</style>
