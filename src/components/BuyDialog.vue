<template>
  <v-app>
    <v-dialog
            v-model="goods.flagBuy"
            max-width="290"
    >
      <v-card>
        <v-card-title class="headline">Purchase goods</v-card-title>

        <v-card-text>
          <v-text-field
                  v-model="numberBuying"
                  label="Numbers"
                  type="number"
          ></v-text-field>
          <p>Price: {{numberBuying*goods.buyPrice}}$</p>
          <p>Max buy: {{maxHave - goods.have}} tonnes</p>
          <p>Delta price: +{{numberBuying*0.001}}%</p>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
                  color="blue darken-1"
                  text
                  @click="goods.flagBuy = false"
          >
            Cancel
          </v-btn>

          <v-btn
                  color="blue darken-1"
                  text
                  @click="goods.flagBuy = false"
          >
            Confirm
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
    export default {
        name: "BuyDialog",
        props: ['goods'],
        data()
        {
            return{
                numberBuying:0,
                maxHave: 10000,
            }
        }
    }
</script>

<style scoped>

</style>
