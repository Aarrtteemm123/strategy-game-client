<template>
  <v-app>
    <v-card
            class="mx-auto"
            elevation="10"
            width="800"
            style="margin-top: 20px"
    >
      <v-card-text>
        <p class="display-1 text--primary">
          Account
        </p>
        <v-avatar size="100">
          <img
                  :src=srcFlagImage
                  alt="flag"
          >
        </v-avatar>
        <div style="margin-top: 20px;font-size: large">
          <p><strong>ID: {{id}}</strong></p>
          <p><strong>Name country: {{nameCountry}}</strong></p>
          <p><strong>GDP: {{gdp}}$</strong></p>
          <p><strong>Economic place: {{economicPlace}}</strong></p>
          <p><strong>Military place: {{militaryPlace}}</strong></p>
          <p><strong>Username: {{username}}</strong></p>
          <p><strong>Email: {{email}}</strong></p>
          <p><strong>Data registration: {{dataRegistration}}</strong></p>
          <p><strong>Days: {{days}}</strong></p>
        </div>
      </v-card-text>


      <v-row justify="center">
        <v-dialog v-model="isOpenEditDialog" persistent max-width="600px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn x-large  v-bind="attrs"
                   v-on="on" style="width: 150px;margin-bottom: 20px"
                   rounded color="primary" dark>
              Edit
            </v-btn>
          </template>

          <v-card>
            <v-card-title>
              <span class="headline">User Profile</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" >
                    <v-text-field label="Flag*" v-model="srcFlagImage" required></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-text-field v-model="nameCountry" label="Name country*"></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field v-model="username" label="Username*" required></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                            @click:append="showPassword = !showPassword" v-model="password"
                            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                            :type="showPassword ? 'text' : 'password'"
                            label="Password*" required></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field disabled v-model="email" label="Email*" required></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="isOpenEditDialog = false">Close</v-btn>
              <v-btn color="blue darken-1" text @click="editUserData">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>

      <v-btn @click="isOpenDialogDeleteAccount = true" x-large style="width: 150px;margin-bottom: 20px"
             rounded color="error" dark>
        Delete
      </v-btn>

    </v-card>
    <v-row justify="center">
      <v-dialog
              v-model="isOpenDialogDeleteAccount"
              max-width="290"
      >
        <v-card>
          <v-card-title style="margin-left: 42px" class="headline">Delete account</v-card-title>

          <v-card-text>
            Are you sure you want delete your account?
          </v-card-text>

          <v-text-field style="width: 200px;margin-left: 45px" label="Input your password*" v-model="bufferPassword" required></v-text-field>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn
                    color="red darken-1"
                    text
                    @click="isOpenDialogDeleteAccount = false"
            >
              No
            </v-btn>

            <v-btn
                    color="blue darken-1"
                    text
                    @click="deleteAccount()"
            >
              Yes
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </v-app>
</template>

<script>
    export default {
        name: "Account",
        data()
        {
            return{
                srcFlagImage: 'https://static.posters.cz/image/1300/%D0%A4%D0%BE%D1%82%D0%BE%D1%88%D0%BF%D0%B0%D0%BB%D0%B5%D1%80%D0%B8/flag-great-britain-uk-416x254-cm-130g/m2-vlies-non-woven-i44071.jpg',
                nameCountry: 'Great Britain',
                id: 'gdsk453kfd8d0fgdf0h',
                gdp: 200000,
                economicPlace: 1,
                militaryPlace: 3,
                username: 'Artem456',
                password: 'qwerty45',
                bufferPassword: '',
                email: 'artem_45@gmail.com',
                dataRegistration: '20.10.2020',
                days: 36,
                isOpenEditDialog: false,
                showPassword: false,
                isOpenDialogDeleteAccount: false,
            }
        },
        methods:{
            editUserData()
            {
                // edit user data
                this.isOpenEditDialog = false;
            },
            deleteAccount()
            {
                // delete account
                this.isOpenDialogDeleteAccount = false;
            }
        }
    }
</script>

<style scoped>

</style>
