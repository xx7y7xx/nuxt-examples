<template>
  <section class="container">
    <!--<img src="../assets/img/logo.png" alt="Nuxt.js Logo" class="logo" />-->
    <h2 class="title">
      This page is loaded from the {{ name }}
    </h2>
    <h2 class="info" v-if="name === 'client'">
      Please refresh the page
    </h2>

    <h2>variable defined in nuxt.config.js</h2>
    <p>FOO = {{ nuxtCfgVarFoo }}</p>
    <p>FOO2 = {{ nuxtCfgVarFoo2 }}</p>

    <h2>variable defined when nuxt building</h2>
    <p>FOO = {{ nuxtBuildVarFoo }}</p>

    <h2>variable defined when run node.js</h2>
    <p>FOO = {{ nodeRunVarFoo }}</p>
    <p>NODE_ENV = {{ nodeRunVarNodeEnv }}</p>

    <nuxt-link class="button" to="/">
      Home page
    </nuxt-link>
  </section>
</template>
<script>
export default {
  asyncData ({ req }) {
    return {
      name: req ? 'server' : 'client',

      nuxtCfgVarFoo: process.env.NUXT_CFG_VAR_FOO,
      nuxtCfgVarFoo2: process.env.NUXT_CFG_VAR_FOO2,

      nuxtBuildVarFoo: process.env.NUXT_BUILD_VAR_FOO || 'UNDEFINED',

      nodeRunVarFoo: process.env.NODE_RUN_VAR_FOO || 'UNDEFINED',
      nodeRunVarNodeEnv: process.env.NODE_ENV || 'UNDEFINED',
    }
  },
  head () {
    return {
      title: `About Page (${this.name}-side)`
    }
  }
}
</script>

<style scoped>
.title
{
  margin-top: 50px;
}
.info
{
  font-weight: 300;
  color: #9aabb1;
  margin: 0;
  margin-top: 10px;
}
.button
{
  margin-top: 50px;
}
</style>
