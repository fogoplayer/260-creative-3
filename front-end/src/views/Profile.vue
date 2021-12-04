<template>
  <form @submit.prevent="">
    <input class="username" v-model="$root.$data.username" />
    <section class="stats">
      High Score: {{ this.$root.$data.highScore }}<br />
      Games Played:
      {{ this.$root.$data.gamesPlayed }}
    </section>
    <img class="profile-picture" :src="this.$root.$data.path" />
    <fieldset>
      <label>
        Password
        <input class="password" type="password" v-model="$root.$data.password"
      /></label>
      <label for="bio"> Bio</label>
      <textarea id="bio" class="bio" v-model="this.$root.$data.bio"> </textarea>
      <div class="btn-container">
        <button class="save">Save changes</button>
        <button class="delete">Delete Account</button>
      </div>
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
  gap: 1rem;
  justify-content: space-evenly;
  margin: auto;
}

input {
  border: none;
  border-bottom: 1px solid gray;
}

.username {
  font-size: 2em;
  margin: none;
  align-self: end;
}

.stats {
  align-self: end;
}

.profile-picture {
  aspect-ratio: 1/1;
  object-fit: cover;
  width: 100%;
  max-width: 200px;
  border-radius: 50%;
  justify-self: center;
}

fieldset {
  border: none;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  gap: 0.5rem;
}

.bio {
  display: block;
  width: 100%;
}

.btn-container {
  display: flex;
  width: 100%;
  justify-content: space-evenly;
}

button {
  border-radius: 0;
  padding: 0.5em 1em;
}

.save {
  background: lightgreen;
}

.delete {
  background: #ffaaaa;
}
</style>
