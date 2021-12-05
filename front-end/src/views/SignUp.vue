<template>
  <div class="about">
    <img alt="Scrabble logo" src="../assets/sLogo.jpeg" />
    <!-- <h1>Enter Name or Gamerag</h1>
    <input v-model="uzrName" />
    <button @click="LogIn()">
      <router-link to="/board">Login</router-link>
    </button> -->
    <div class="loginForm">
      <div class="container">
        <div class="left">
          <div class="login">Sign Up</div>
          <div class="eula">
            By signing up you agree to have a blast (and to the terms you never
            read)
          </div>
        </div>
        <div class="right">
          <svg viewBox="0 0 320 300">
            <defs>
              <linearGradient
                inkscape:collect="always"
                id="linearGradient"
                x1="13"
                y1="193.49992"
                x2="307"
                y2="193.49992"
                gradientUnits="userSpaceOnUse"
              >
                <stop style="stop-color: #ff00ff" offset="0" id="stop876" />
                <stop style="stop-color: #ff0000" offset="1" id="stop878" />
              </linearGradient>
            </defs>
            <!-- <path
              d="m 40,120.00016 239.99984,-3.2e-4 c 0,0 24.99263,0.79932 25.00016,35.00016 0.008,34.20084 -25.00016,35 -25.00016,35 h -239.99984 c 0,-0.0205 -25,4.01348 -25,38.5 0,34.48652 25,38.5 25,38.5 h 215 c 0,0 20,-0.99604 20,-25 0,-24.00396 -20,-25 -20,-25 h -190 c 0,0 -20,1.71033 -20,25 0,24.00396 20,25 20,25 h 168.57143"
            /> -->
          </svg>
          <div class="form">
            <label for="email" id="firstone">Gamertag or Email</label>
            <input type="email" id="email" v-model="title" />
            <label for="photo">Select Profile Picture</label>
            <input type="file" name="photo" @change="fileChanged" />
            <!-- <button @click="upload">Upload</button> -->
            <label for="password">Password</label>
            <input type="password" id="password" v-model="password" />
            <label for="biosh">Short Bio</label>
            <input type="text" id="biosh" v-model="bio" />
            <!-- <button id="submit" @click="SignUp()"> -->
            <button id="submit" @click="upload">
              <router-link to="/board" style="text-decoration = none;"
                >Sign Up</router-link
              >
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
h1 {
  padding: 40px;
}

@import url("https://rsms.me/inter/inter-ui.css");
::selection {
  background: #2d2f36;
}
::-webkit-selection {
  background: #2d2f36;
}
::-moz-selection {
  background: #2d2f36;
}
body {
  background: white;

  margin: 0;
  padding: 20px;
}
.loginForm {
  padding-top: 5%;
  display: flex;
  flex-direction: column;
  height: calc(100% - 40px);
  place-content: center;
  width: calc(100% - 40px);
}
@media (max-width: 767px) {
  .loginForm {
    height: auto;
    margin-bottom: 20px;
    padding-bottom: 20px;
    text-align: left !important;
  }
}
.container {
  display: flex;
  height: 320px;
  margin: 0 auto;
  width: 640px;
}
@media (max-width: 767px) {
  .container {
    flex-direction: column;
    height: 630px;
    width: 320px;
  }
}
.left {
  background: white;
  height: calc(100% - 40px);
  top: 20px;
  position: relative;
  width: 50%;
}
@media (max-width: 767px) {
  .left {
    height: 100%;
    left: 20px;
    width: calc(100% - 40px);
    max-height: 270px;
  }
}
.login {
  font-size: 50px;
  font-weight: 900;
  margin: 50px 40px 40px;
}
.eula {
  color: #999;
  font-size: 14px;
  line-height: 1.5;
  margin: 40px;
}
.right {
  background: #474a59;
  box-shadow: 0px 0px 40px 16px rgba(0, 0, 0, 0.22);
  color: #f1f1f2;
  position: relative;
  width: 50%;
}
@media (max-width: 767px) {
  .right {
    flex-shrink: 0;
    height: 100%;
    width: 100%;
    max-height: 350px;
  }
}
svg {
  position: absolute;
  width: 320px;
}
/* path {
  fill: none;
  stroke: url(#linearGradient);
  stroke-width: 4;
  stroke-dasharray: 240 1386;
  float: left;
} */
.form {
  margin: 20px;
  position: absolute;
}
label {
  color: white;
  display: block;
  font-size: 14px;
  height: 16px;
  margin-top: 10px;
  margin-bottom: 5px;
}
input {
  background: transparent;
  border: 0;
  border-bottom: 2px;
  border-bottom-color: white;
  border-bottom-style: solid;
  color: #f2f2f2;
  font-size: 20px;
  height: 30px;
  line-height: 30px;
  outline: none !important;
  width: 100%;
}
button {
  /* background: transparent; */
  border: 0;
  color: #f2f2f2;
  font-size: 20px;
  height: 30px;
  line-height: 30px;
  outline: none !important;
  width: 100%;
}
button a {
  text-decoration: none;
  color: black;
}
input::-moz-focus-inner {
  border: 0;
}
#submit {
  color: #707075;
  margin-top: 7px;
  transition: color 300ms;
}
#submit:focus {
  color: #f2f2f2;
}
#submit:active {
  color: #d0d0d2;
}
#firstone {
  margin-top: 0px;
}
</style>

<script>
import axios from "axios";
export default {
  name: "SignUp",
  data() {
    return {
      title: "",
      password: "",
      bio: "",
      file: null,
      addItem: null,
    };
  },
  methods: {
    fileChanged(event) {
      this.file = event.target.files[0];
    },
    async upload() {
      try {
        const formData = new FormData();
        formData.append("photo", this.file, this.file.name);
        let r1 = await axios.post("/api/photos", formData);
        let r2 = await axios.post("/api/items", {
          title: this.title,
          password: this.password,
          path: r1.data.path,
          bio: this.bio,
          highScore: 0,
          gamesPlayed: 0,
        });
        this.addItem = r2.data;
        this.$root.$data.loggedIn = true;
        this.$root.$data.username = this.title;
        this.$root.$data.password = this.password;
        this.$root.$data.bio = this.bio;
        this.$root.$data.path = r2.data.path;
        this.$root.$data.loggedIn = true;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>