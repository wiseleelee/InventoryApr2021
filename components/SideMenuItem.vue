<template>
    <div class="flex justify-between text-md 
            text-warmGray-700 hover:bg-coolGray-100 py-4 px-3">
        <div class="flex">
            <span class="pl-2 pr-4">
                <!--  FontAwesome Icon for Side Menu Item -->
                <slot name="pathIcon"></slot>
            </span>
            <label>
                <!--  URL Redirection -->
                <NuxtLink :to="path" >{{pathName}}</NuxtLink>
            </label>
        </div>
        <div>
            <i class="fas fa-chevron-right"></i>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        path: String, // page URL path for destination
        pathName: String // page label name
    }
}
</script>

<style>

</style>