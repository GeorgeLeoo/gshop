<template>
  <div>
    <router-view/>
    <!-- $route表当前路由 -->
    <FooterGuide v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
    import FooterGuide from "./components/FooterGuide/FooterGuide";

    export default {
        name: 'App',
        components: {
            FooterGuide
        }
    }
</script>

<style lang="stylus">

</style>
