<template>
  <div class="h-screen w-full flex">
    <div class="my-auto mx-auto w-full px-10">
      <div class="">
        <input-element 
          labelName="PRODUCT NAME" 
          labelId="productName" 
          inputType="text"
          :model="productName" 
          @input="setProductName($event)" 
        />
        <input-element 
          labelName="PRICE" 
          labelId="price" 
          inputType="number"
          :model="price" 
          @input="setPrice($event)" 
          class="my-2"
        />
        <input-element 
          labelName="CATEGORY" 
          labelId="category" 
          inputType="text"
          :model="category" 
          @input="setCategory($event)"
          class="my-2" 
        />
        <input-element 
          labelName="SUPPLIER NAME" 
          labelId="supplierName" 
          inputType="text"
          :model="supplierName" 
          @input="setSupplierName($event)" 
          class="my-2"
        />
        <input-element 
          labelName="QUANTITY" 
          labelId="quantity" 
          inputType="number"
          :model="quantity" 
          @input="setQuantity($event)" 
          class="my-2"
        />
        <input-element 
          labelName="IMAGE URL" 
          labelId="imgSrc" 
          inputType="text"
          :model="imgSrc" 
          @input="setImgSrc($event)" 
          class="my-2"
        />
        <button type="button" class="bg-yellow-500 text-gray500 py-2 px-4 hover:bg-yellow-400 hover:-text-gray-800 transition-all ease-in-out duration-300" @click="createProduct">Create</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';
export default {
    layout: "dashboard",
    data() {
      return {
      }
    },
    computed:{
      ...mapState({
        productName: state => state.product.productName,
        price: state => state.product.price,
        category: state => state.product.category,
        supplierName: state => state.product.supplierName,
        quantity: state => state.product.quantity,
        imgSrc: state => state.product.imgSrc,
      })
    },
    methods: {
      ...mapMutations({
        setProductName : 'product/setProductName',
        setPrice: 'product/setPrice',
        setCategory: 'product/setCategory',
        setSupplierName: 'product/setSupplierName',
        setQuantity: 'product/setQuantity',
        setImgSrc : 'product/setImgSrc'
      }),
      ...mapActions({
        createProduct : "product/createProduct"
      })
    }
}
</script>

<style>

</style>