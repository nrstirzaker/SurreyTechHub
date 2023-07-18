<template>
  <Layout>

    <h1 class="text-7xl font-bold italic text-red-700">Hello, world!</h1>

    <p>
      Surrey Tech Hub
    </p>
    <p>
        Holding Page
    </p>

    <p class="home-links">
      <a href="https://coderdojo.com/en" target="_blank" rel="noopener">CoderDojo: Coding clubs for kids and teens</a>
    </p>

  </Layout>
</template>

<script>

export default {
  metaInfo: {
    title: 'Hello, world!'
  },
  mounted() {
    console.log(process.env.NODE_ENV)
  },
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
