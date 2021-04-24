<template>
  <div class="w-screen h-screen bg-yellow-500 p-20"> <!-- Parent -->
    <div class="text-blue-700 text-2xl">
      PARENT <i class="fas fa-igloo"></i>
    </div>
    <div class="flex w-full bg-blue-500 md:bg-red-500 p-14"> <!-- Child 1 -->
      CHILD 1
      <testimonial></testimonial>
    </div>
    <div class="flex w-full bg-red-500 md:bg-blue-500 p-14"> <!-- Child 2 -->
      CHILD 2 {{productName}}
      <testimonial
        img_src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
        name="Edmund"
        title="FullStack"
        content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo cupiditate enim quod voluptate, excepturi aperiam. Ipsa quisquam tempore ex facilis reprehenderit deleniti molestias, similique ipsam officia totam odio libero sunt!"
      >
      </testimonial>
    </div>
  </div>
</template>

<script>
import { mapState} from 'vuex';
export default {
    computed:{
      ...mapState({
        productName: state => state.product.productName
      })
    }
}
</script>

<style>

</style>