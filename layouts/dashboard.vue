<template>
  <div class="w-screen h-screen">
      <div class="w-full h-full flex">
          <div class="flex w-1/6  bg-red-500">
            <side-menu>
                <template v-slot:sideMenuItems>
                    <!-- Home -->
                    <side-menu-item path="/" pathName="Home">
                        <template v-slot:pathIcon>
                            <i class="fas fa-home"></i>
                        </template>
                    </side-menu-item>
                    <!-- Product -->
                    <side-menu-item path="/product" pathName="Product">
                        <template v-slot:pathIcon>
                            <i class="fas fa-seedling"></i>
                        </template>
                    </side-menu-item>
                </template>
            </side-menu>
          </div>
          <div class="flex w-full bg-blue-500">
              <Nuxt />
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>