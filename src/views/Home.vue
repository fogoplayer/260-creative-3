<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/sLogo.jpeg" />
    <HelloWorld msg="Welcome to Ultimate Scrabble" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>
