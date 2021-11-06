<template>
  <div class="board-page">
    <h1 v-if="this.$root.$data.username == ''">
      This is the board, please login to play
    </h1>
    <h1 v-else>{{ this.$root.$data.username }}'s Board</h1>

    <!-- <dir class="LetterBank">
      <div class="letters">
        <div
          class="letter"
          v-for="letter in this.$root.data.letters"
          :key="letter.letter"
        >
          <div class="info">
            <h1>{{ letter.letter }}</h1>
            <p>description(letter.vowel)</p>
          </div>
          <div class="pointValue">
            <h2>{{ product.pointValue }}</h2>
          </div>
        </div>
      </div>
    </dir> -->
    <div>
      <section class="board">
        <table class="board-table">
          <tr v-for="i in 15" :key="i">
            <td v-for="j in 15" :key="j">{{ i }} {{ j }}</td>
          </tr>
        </table>
      </section>
      <section class="letters">
        {{ this.$root.data }}
        <div
          :class="
            'letter ' +
            (letter.vowel ? 'vowel ' : '') +
            (letter.isRare ? 'rare ' : '')
          "
          v-for="letter in this.$root.$data.letters"
          :key="letter.letter"
        >
          <span class="main-letter">{{ letter.letter }}</span>
          <span class="point-value">{{ letter.pointValue }}</span>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "Board",
};
</script>

<style scoped>
.board-page {
  --letter-size: max(1.5rem, 6.65vmin);
}

.board-table {
  border-collapse: collapse;
}

.board td {
  border: 2px solid black;
  width: var(--letter-size);
  height: var(--letter-size);
}

.letters {
  display: flex;
  flex-flow: row wrap;
}

.letter {
  flex: 0 0 var(--letter-size);
  height: var(--letter-size);
  font-size: 80%;
  border: 2px solid black;
  position: relative;
  background: #ba8c63;
}

.letter.vowel {
  color: darkred;
}
.letter.rare {
  color: gold;
}

.letter-main {
  font-weight: 900;
}

.point-value {
  font-size: 0.25em;
  position: absolute;
  bottom: 0;
  right: 0;
}
</style>
