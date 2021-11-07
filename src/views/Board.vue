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
            @drop="dropItem"
            v-for="i in 15 * 15"
            :key="i"
          >
            {{ i }}
          </div>
        </div>
      </section>
      <section class="letters">
        {{ this.$root.data }}
        <div
          :class="
            'letter ' +
            (letter.vowel ? 'vowel ' : '') +
            (letter.isRare ? 'rare ' : '')
          "
          draggable="true"
          @dragstart="dragItem(letter)"
          v-for="letter in this.$root.$data.letters"
          :key="letter.letter"
        >
          <div class="main-letter">{{ letter.letter }}</div>
          <div class="point-value">{{ letter.pointValue }}</div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "Board",
  data() {
    return {
      draggedItem: {},
    };
  },
  methods: {
    dragItem(letter) {
      this.draggedItem = `<div
          class="letter ${
            (letter.vowel ? "vowel " : "") + (letter.isRare ? "rare " : "")
          }"
          >
          <div class="main-letter">${letter.letter}</div>
          <div class="point-value">${letter.pointValue}</div>
        </div>`;
    },
    dropItem(event) {
      event.target.innerHTML = this.draggedItem;
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

.letter {
  flex: 0 0 var(--letter-size);

  height: var(--letter-size);
  border: 2px solid black;
  position: relative;
  background: #ba8c63;
  padding: 0.1em;

  justify-content: center;
  align-items: center;

  font-size: var(--letter-size);
  user-select: none;
}

.letter.vowel {
  color: darkred;
}
.letter.rare {
  color: gold;
}

.main-letter {
  font-size: 0.5em;
  font-weight: 900;
  display: block;
}

.point-value {
  font-size: 0.25em;
  position: absolute;
  bottom: 0.4em;
  right: 0.4em;
}
</style>
