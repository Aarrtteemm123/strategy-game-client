<template>
  <v-card elevation="12" width="380">
    <v-img
            class="white--text align-end"
            height="200px"
            :src="require(`../assets/help/${help.pathToImage}`)"
    >
    </v-img>
    <v-card-subtitle style="font-weight: bold;font-size: x-large;" class="pb-0">{{help.title}}</v-card-subtitle>
    <v-card-text class="text--primary">
      <div style="margin-top: 15px">{{help.text}}</div>
    </v-card-text>
  </v-card>
</template>

<script>
    export default {
        name: "HelpCard",
        props: ['help'],
    }
</script>

<style scoped>

</style>
