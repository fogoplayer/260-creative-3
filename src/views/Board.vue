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
    </dir> -->
    <div class="game-wrapper">
      <section class="board">
        <div class="board-table">
          <div
            class="space"
            v-on:dragover.prevent
            @drop="dropItem(i)"
            v-for="i in 15 * 15"
            :key="i"
          >
            {{ i }}
            <letter-vue
              v-if="this.placedPieces && this.placedPieces[i]"
              :letter="this.placedPieces && this.placedPieces[i]"
            />
          </div>
        </div>
      </section>
      <section class="letters">
        {{ this.$root.data }}
        <letter-vue
          v-for="letter in this.$root.$data.letters"
          :letter="letter"
          draggable="true"
          @dragstart="dragItem(letter)"
          :key="letter.letter"
        >
        </letter-vue>
      </section>
    </div>
  </div>
</template>

<script>
import LetterVue from "../components/Letter.vue";
export default {
  name: "Board",
  components: { LetterVue },
  data() {
    return {
      draggedItem: {},
      placedPieces: {},
    };
  },
  methods: {
    dragItem(letter) {
      this.draggedItem = letter;
    },
    dropItem(i) {
      this.placedPieces[i] = this.draggedItem;
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.game-wrapper {
  --letter-size: min(6.5vmin, max(1.5rem, 6vmax));
  display: flex;
  flex-flow: row wrap;
  gap: 1em;
  align-items: flex-start;
}

.board-table {
  display: grid;
  grid-template-rows: repeat(15, var(--letter-size));
  grid-template-columns: repeat(15, var(--letter-size));
}

.board .space {
  border: 2px solid black;
  min-width: var(--letter-size);
  height: var(--letter-size);
  min-height: var(--letter-size);
  background: lightskyblue;
}

.board div:nth-child(2n) .space:nth-child(2n),
.board div:nth-child(2n + 1) .space:nth-child(2n + 1) {
  background: lightcoral;
}

.letters {
  flex: 1 1 calc(2 * var(--letter-size));

  display: flex;
  flex-flow: row wrap;
}
</style>
