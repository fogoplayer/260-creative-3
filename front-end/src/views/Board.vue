<template>
  <div v-if="this.$root.$data.username == ''" class="board-page">
    <h1>This is the board, please login to play</h1>
  </div>
  <div class="board-page" v-else>
    <h1>{{ this.$root.$data.username }}'s Board Score: {{ getScore() }}</h1>
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
            <letter-vue
              v-if="'' + i in placedPieces"
              :letter="placedPieces['' + i]"
            />
          </div>
        </div>
      </section>
      <section class="letters">
        {{ this.$root.data }}
        <letter-vue
          v-for="letter in this.$root.$data.letters"
          :letter="letter"
          :key="letter.letter"
          :dragItem="dragItem.bind(this)"
        >
        </letter-vue>
      </section>
    </div>
  </div>
</template>

<script>
import LetterVue from "../components/Letter.vue";
import axios from "axios";
export default {
  name: "Board",
  components: { LetterVue },
  data() {
    return {
      isplaced: false,
      draggedItem: {},
      placedPieces: {},
    };
  },
  created() {
    axios.put(`/api/items/${this.$root.$data.id}`, {
      gamesPlayed: ++this.$root.$data.gamesPlayed,
    });
  },
  methods: {
    getScore() {
      let sum = 0;
      for (let i = 0; i < this.$root.$data.letters.length; i++) {
        sum +=
          this.$root.$data.letters[i].timesUsed *
          this.$root.$data.letters[i].pointValue;
      }
      if (this.$root.$data.highScore < sum) {
        this.$root.$data.highScore = sum;
        axios.put(`/api/items/${this.$root.$data.id}`, {
          highScore: this.$root.$data.highScore,
        });
      }
      return sum;
    },
    dragItem(letter) {
      console.log(letter);
      this.draggedItem = letter;
      this.draggedItem.index = letter.letter.charCodeAt() - 65;
      this.$root.$data.letters[this.draggedItem.index].isLifted = true;
    },
    dropItem(i) {
      console.log("dropping");
      this.placedPieces["" + i] = this.draggedItem;
      this.$root.$data.letters[this.draggedItem.index].isLifted = false;
      this.$root.$data.letters[this.draggedItem.index].timesUsed++;
      this.$forceUpdate();
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
  /* background: lightskyblue; */
  background: black;
}

.board div:nth-child(2n) .space:nth-child(2n),
.board div:nth-child(2n + 1) .space:nth-child(2n + 1) {
  /* background: lightcoral; */
  background: white;
}

.letters {
  flex: 1 1 calc(2 * var(--letter-size));

  display: flex;
  flex-flow: row wrap;
}
</style>
