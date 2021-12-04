<template>
  <form @submit.prevent="">
    <h1><input class="username" :value="this.$root.$data.username" /></h1>
    High Score: {{ this.$root.$data.highScore }} Games Played:
    {{ this.$root.$data.gamesPlayed }}
    <img :src="this.$root.$data.path" />
    <fieldset>
      <label>
        Password <input type="password" :value="this.$root.$data.password"
      /></label>
      <label>
        Bio
        <textarea v-model="this.$root.$data.bio"> </textarea>
      </label>
      <button>Delete Account</button>
    </fieldset>
  </form>
</template>
<script>
export default {
  name: "Profile",
};
</script>

<style scoped>
form {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 500px));
  margin: auto;
}

fieldset {
  border: none;
  display: flex;
  flex-flow: column nowrap;
}

input {
  border: none;
  border-bottom: 1px solid gray;
}

img {
  width: 500px;
}
</style>
