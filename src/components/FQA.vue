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
  </v-card>
</template>

<script>

    export default {
        name: "FQA",
        data()
        {
            return{
                FQAList: [
                    {question:'Question number 1',answer:'Answer on question number 1'},
                    {question:'Question number 2',answer:'Answer on question number 2'},
                    {question:'Question number 3',answer:'Answer on question number 3'},
                    {question:'Question number 4',answer:'Answer on question number 4'},
                    {question:'Question number 5',answer:'Answer on question number 5'},
                ]
            }
        },
    }
</script>

<style scoped>

</style>
