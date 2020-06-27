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

        <v-expansion-panels v-for="item in newsList.reverse()" v-bind:key="item">
          <v-expansion-panel>
            <v-expansion-panel-header>{{item.title}} ({{item.date}})</v-expansion-panel-header>
            <v-expansion-panel-content v-for="row in item.rows" v-bind:key="row">
              <div style="font-size: medium;font-weight: bolder" class="text-sm-left">{{row}}</div>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>

    </v-card-text>
  </v-card>
</template>

<script>

    export default {
        name: "News",
        data()
        {
            return{
                newsList: [
                    {title:'June update', date: '13.06.2020', rows: [
                        '- fix errors',' - update title', '- add new cards',
                        ]},
                    {title:'April update', date: '21.04.2020', rows: [
                            '- fix errors',' - update title', '- add new cards',
                            '- fix errors',' - update title', '- add new cards',
                        ]},
                    {title:'Big spring update', date: '01.05.2020', rows: [
                            '- fix errors',' - update title', '- add new cards',
                            '- fix errors',' - update title', '- add new cards',
                            '- fix errors',' - update title', '- add new cards',
                            '- fix errors',' - update title', '- add new cards',
                            '- fix errors',' - update title', '- add new cards',
                            '- fix errors',' - update title', '- add new cards',
                        ]}
                ],
            }
        }
    }
</script>

<style scoped>

</style>
