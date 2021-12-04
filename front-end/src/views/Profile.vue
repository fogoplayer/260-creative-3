<template>
  <div>
    <input class="username" :value="this.$root.$data.username" />
    High Score: {{ this.$root.data.highScore }} Games Played:
    {{ this.$root.data.gamesPlayed }}
    <img :src="this.$root.data.path" />
    <input :value="this.$root.data.path" />
    <input type="password" :value="this.$root.data.password" />
    <label>
      <textarea v-model="this.$root.data.bio"> </textarea>
    </label>
    <button>Delete Account</button>
  </div>
</template>
<script>
export default {
  name: "Profile",
};
</script>
