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
            <v-switch v-model="notifyList" @change="updateSettings" label="notify updates" value="updates"></v-switch>
            <v-switch v-model="notifyList" @change="updateSettings" label="notify work on server" value="work_on_server"></v-switch>
            <hr>
            <h2 style="margin-top: 10px">Game notifications</h2>
            <v-switch v-model="notifyList" @change="updateSettings" label="notify attacks on the country" value="country_attacks"></v-switch>
            <v-switch v-model="notifyList" @change="updateSettings" label="notify when warehouse overflow" value="warehouse_overflow"></v-switch>
            <v-switch v-model="notifyList" @change="updateSettings" label="notify on low budget" value="low_budget"></v-switch>
          </v-container>
      </v-card-text>
    </v-card>
  </v-app>
</template>

<script>
    export default {
        name: "Settings",
        data(){
            return{
                notifyList: ['updates','country_attacks'],
            }
        },
        methods:{
            updateSettings()
            {
                console.log(this.notifyList)
            }
        }
    }
</script>

<style scoped>

</style>
