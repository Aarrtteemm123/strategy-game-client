<template>
  <v-card
          class="mx-auto"
          elevation="10"
          width="800"
  >
    <v-card-text>
      <p class="display-1 text--primary">
        News
      </p>

        <v-expansion-panels v-for="item in newsList" v-bind:key="item.id+item">
          <v-expansion-panel>
            <v-expansion-panel-header>{{item.title}} ({{item.date}})</v-expansion-panel-header>
            <v-expansion-panel-content v-for="row in item.rows" v-bind:key="row.id+row">
              <div style="font-size: medium;font-weight: bolder" class="text-sm-left">- {{row}}</div>
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
        name: "News",
        data()
        {
            return{
                snackbarVisible: false,
                error: '',
                newsList: []
            }
        },
        methods:
        {
            closeSnackbar()
            {
                this.snackbarVisible = false
                this.error = ''
            },
            updateNewsPage()
            {
                console.log('Inside news updatePage')
                let userId = '5fb92cde490b69cce9f464df'
                SystemService.getView(userId,'News').then(response => {
                    if (response.status === 200)
                    {
                        console.log(response.data)
                        console.log(response.status)
                        this.newsList = response.data.reverse()
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
            this.updateNewsPage()
        }
    }
</script>

<style scoped>

</style>
