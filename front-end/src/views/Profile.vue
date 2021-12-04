<template>
  <div v-if="this.$root.$data.username == ''" class="board-page">
    <h1>Please login to</h1>
  </div>
  <form @submit.prevent v-else>
    <input class="username" v-model="$root.$data.username" />
    <section class="stats">
      High Score: {{ this.$root.$data.highScore }}<br />
      Games Played:
      {{ this.$root.$data.gamesPlayed }}
    </section>
    <fieldset>
      <a class="img-link" :href="this.$root.$data.path" target="_blank">
        <img class="profile-picture" :src="this.$root.$data.path"
      /></a>
      <label
        >Update your profile picture:
        <input type="file" name="photo" @change="fileChanged"
      /></label>
    </fieldset>
    <fieldset>
      <label>
        Password
        <input class="password" type="password" v-model="$root.$data.password"
      /></label>
      <label for="bio"> Bio</label>
      <textarea id="bio" class="bio" v-model="$root.$data.bio"> </textarea>
      <div class="btn-container">
        <button class="save" @click="updateUser">Save changes</button>
        <button class="delete" @click="deleteUser">Delete Account</button>
      </div>
    </fieldset>
  </form>
</template>
<script>
import axios from "axios";
export default {
  name: "Profile",
  methods: {
    fileChanged(event) {
      this.file = event.target.files[0];
      const formData = new FormData();
      formData.append("photo", this.file, this.file.name);
      axios
        .post("/api/photos", formData)
        .then((r) => (this.$root.$data.path = r.data.path));
    },
    updateUser: function name() {
      axios.put(`/api/items/${this.$root.$data.id}`, {
        title: this.$root.$data.username,
        password: this.$root.$data.password,
        path: this.$root.$data.path,
        bio: this.$root.$data.bio,
      });
    },
    deleteUser: function () {
      fetch(`/api/items/${this.$root.$data.id}`, {
        method: "DELETE",
      }).then((r) => console.log(r.status));
    },
  },
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

.img-link {
  align-self: center;
  display: block;
  width: fit-content;
}

.profile-picture {
  aspect-ratio: 1/1;
  object-fit: cover;
  width: 100%;
  max-width: 200px;
  border-radius: 50%;
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
