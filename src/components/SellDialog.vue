<template>
  <v-app>
    <v-dialog
            v-model="goods.flagSell"
            max-width="290"
    >
      <v-card>
        <v-card-title class="headline">Sell goods</v-card-title>

        <v-card-text>
          <v-text-field
                  v-model="numberSelling"
                  label="Numbers"
                  type="number"
          ></v-text-field>
          <p>Profit: {{numberSelling*goods.price}}$</p>
          <p>Max sell: {{goods.have}} tonnes</p>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
                  color="blue darken-1"
                  text
                  @click="goods.flagSell = false"
          >
            Cancel
          </v-btn>

          <v-btn
                  color="blue darken-1"
                  text
                  @click="sell(goods.name,numberSelling)"
          >
            Confirm
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
    import GameService from "@/services/game-service"
    export default {
        name: "SellDialog",
        props: ['goods'],
        data()
        {
            return{
                numberSelling:0,
            }
        },
        methods:
        {
            closeSellDialog()
            {
                this.goods.flagSell = false
            },

            sell(name,number)
            {
                let userId = this.$cookies.get('userId')
                let token = this.$cookies.get('token')
                GameService.sellGoods(userId,token,name,number).then(response => {
                    if (response.status === 200)
                    {
                        console.log(response.data)
                        console.log(response.status)
                        if (this.goods.have - Number(this.numberSelling) >= 0 && Number(this.numberSelling) > 0)
                            this.goods.have -= Number(this.numberSelling)
                        this.closeSellDialog()
                    }
                }).catch(error => {
                    if (error.response) {
                        this.$emit('get-error', error.response.data)
                        this.closeSellDialog()
                        console.log(error.response.data);
                        console.log(error.response.status);
                    }
                })
            },
        }
    }
</script>

<style scoped>

</style>
