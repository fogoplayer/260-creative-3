<template>
  <div class="about">
    <h1 v-if="this.$root.$data.username == ''">
      This is the board, please login to play
    </h1>
    <h1 v-else>{{ this.$root.$data.username }}'s Board</h1>

    <dir class="LetterBank">
      <div class="letters">
        <div
          class="letter"
          v-for="letter in this.$root.$data.letters"
          :key="letter.letter"
        >
          <div class="info">
            <h1>{{ letter.letter }}</h1>
            <p>{{ description(letter.vowel) }}</p>
          </div>
          <div class="pointValue">
            <h2>{{ letter.pointValue }}</h2>
          </div>
        </div>
      </div>
    </dir>
    <div>
      <section>
        <table>
          <tr v-for="i in 15" :key="i">
            <td v-for="j in 15" :key="j">{{ i }} {{ j }}</td>
          </tr>
        </table>
      </section>
      <section>
        <div v-for="letter in letters" :key="letter.letter"></div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "Board",
<<<<<<< HEAD
  methods: {
=======
  props: {
    letters: this.$root.data.letters,
  },
  computed: {
>>>>>>> e74d4ce1aab398ea2d2da7455fa8b94707c3d35b
    description(boolval) {
      if (boolval) {
        return "Vowel";
      } else {
        return "Consonant";
      }
    },
  },
};
</script>
