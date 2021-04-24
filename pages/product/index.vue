<template>
  <div>This is {{products}}</div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
    layout: "layout_a",
    computed:{
      ...mapState({
        products: state => state.product.products
      })
    },
    methods: {
      ...mapActions({
        getProducts : "product/getProducts"
      })
    },
    mounted(){
      this.getProducts();
    }
}
</script>

<style>

</style>