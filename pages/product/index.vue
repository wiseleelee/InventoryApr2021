<template>
  <div>This is {{products}}</div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
    layout: "dashboard",
    computed:{
      ...mapState({
        products: state => state.product.products,
        token: state => state.auth.user.idToken,
        uid: state => state.auth.user.uid,
      })
    },
    methods: {
      ...mapActions({
        getProducts : "product/getProducts"
      })
    },
    mounted(){
      this.getProducts({uid:this.uid, token:this.token});
    }
}
</script>

<style>

</style>