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
                    @click="cancelDeleteAccount()"
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
  </v-app>
</template>

<script>
    import SystemService from "@/services/system-service"
    import UserService from "@/services/user-service"
    import router from "@/router";
    export default {
        name: "Account",
        data()
        {
            return{
                snackbarVisible: false,
                error: '',

                srcFlagImage: '',
                nameCountry: '',
                id: '',
                gdp: 0,
                economicPlace: 0,
                militaryPlace: 0,
                username: '',
                password: '',
                bufferPassword: '',
                email: '',
                dataRegistration: '',
                days: 0,
                isOpenEditDialog: false,
                showPassword: false,
                isOpenDialogDeleteAccount: false,
            }
        },
        methods:{
            closeSnackbar()
            {
                this.snackbarVisible = false
                this.error = ''
            },
            updateAccountPage()
            {
                console.log('Inside account updatePage')
                let userId = this.$cookies.get('userId')
                let token = this.$cookies.get('token')
                SystemService.getView(userId,token,'Account').then(response => {
                    if (response.status === 200)
                    {
                        console.log(response.data)
                        console.log(response.status)
                        this.srcFlagImage = response.data['link_img']
                        this.nameCountry = response.data['name_country']
                        this.id = response.data['user_id']
                        this.gdp = response.data['total_profit_country']
                        this.economicPlace = response.data['economic_place']
                        this.militaryPlace = response.data['military_place']
                        this.username = response.data['username']
                        this.password = response.data['password']
                        this.email = response.data['email']
                        this.dataRegistration = response.data['date_registration']
                        this.days = response.data['days_in_game']
                    }
                }).catch(error => {
                    if (error.response) {
                        this.snackbarVisible = true;
                        this.error = error.response.data
                        console.log(error.response.data);
                        console.log(error.response.status);
                    }
                })
            },
            editUserData()
            {
                // edit user data
                let userId = this.$cookies.get('userId')
                let token = this.$cookies.get('token')
                UserService.changeUserData(userId,token,this.username,this.password,
                    this.email,this.nameCountry,this.srcFlagImage).then(response => {
                    if (response.status === 200)
                    {
                        console.log(response.data)
                        console.log(response.status)
                        this.isOpenEditDialog = false;
                    }
                }).catch(error => {
                    if (error.response) {
                        this.snackbarVisible = true;
                        this.error = error.response.data
                        console.log(error.response.data);
                        console.log(error.response.status);
                        this.isOpenEditDialog = false;
                    }
                })
            },
            cancelDeleteAccount()
            {
                this.bufferPassword = ''
                this.isOpenDialogDeleteAccount = false
            },
            deleteAccount()
            {
                // delete account
                let userId = this.$cookies.get('userId')
                let token = this.$cookies.get('token')
                UserService.delete(userId,token,this.bufferPassword).then(response => {
                    if (response.status === 200)
                    {
                        console.log(response.data)
                        console.log(response.status)
                        this.isOpenDialogDeleteAccount = false;
                        this.bufferPassword = ''
                        router.push({ path: `/login` })
                    }
                }).catch(error => {
                    if (error.response) {
                        this.snackbarVisible = true;
                        this.error = error.response.data
                        console.log(error.response.data);
                        console.log(error.response.status);
                        this.isOpenDialogDeleteAccount = false;
                        this.bufferPassword = ''
                    }
                })
            }
        },
        mounted()
        {
            this.updateAccountPage()
        }
    }
</script>

<style scoped>

</style>
