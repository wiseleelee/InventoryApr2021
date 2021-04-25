<template>
  <div class='w-screen h-screen bg-yellow-500 px-10 flex'>
    <div class="m-auto w-full md:w-1/2">
    <input-element 
      labelName="email" 
      labelId="email" 
      inputType="email"
      :model="email" 
      @input="email = $event"
      class="my-2" 
    />
    <input-element
      labelName="Password"
      labelID="password"
      inputType="password"
      :model="password"
      @input="password = $event"
      class="my-2"
      />
      <button type="button" @click="login"
      class="w-full py-2 px-4 bg-gray-800 text-gray-100 ease-in-out duration-300">Login</button>
      
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  computed:{
    ...mapState({
      // Check user login status (default: false)
      isLoggedIn : state => state.auth.isLoggedIn,
    })
  },
  data: function(){
    return{
      email: "",
      password: ""
    }
  },
  methods:{
    login: function(){
      //login with email and password
      this.emailLogin({ email:this.email, password:this.password})
    },
    ...mapActions({
      emailLogin:"auth/firebaseLogin", //store/auth.js - Login with email % pass
      getIdToken: "auth/getIdToken" // stire/auth.js - get auth token from firebase
    })
  },
  mounted(){
    if(this.isLoggedIn){ //if user is already login
      this.getIdToken(); //get auth token from firebase again
      this.$router.push("/product") //redirect user to login page
    }
  },
}
</script>