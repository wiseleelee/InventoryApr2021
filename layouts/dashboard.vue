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
                    <!-- New Product -->
                    <side-menu-item path="/product/new" pathName="New Product">
                        <template v-slot:pathIcon>
                            <i class="fas fa-seedling"></i>
                        </template>
                    </side-menu-item>
                    <!-- Inactve Product -->
                    <side-menu-item path="/product/inactive" pathName="Inactive Product">
                        <template v-slot:pathIcon>
                            <i class="fas fa-seedling"></i>
                        </template>
                    </side-menu-item>
                    <!-- Logout -->
                    <div class="cursor-pointer flex justify-between text-md text-warmGray-700 hover:bg-coolGray-100 py-4 px-3">
                        <div class="flex">
                            <span class="pl-2 pr-4">
                                <!--  FontAwesome Icon for Side Menu Item -->
                                <i class="fas fa-unlock"></i>
                            </span>
                            <label>
                                <!--  URL Redirection -->
                                <button type="button" @click="logout">Logout</button>
                            </label>
                        </div>
                    </div>
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
import { mapActions } from 'vuex';
export default {
    middleware: "auth",
    methods:{
        ...mapActions({
            logout: "auth/firebaseLogout"
        })
    },

}
</script>

<style>

</style>