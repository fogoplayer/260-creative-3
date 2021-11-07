<template>
  <div
    :class="
      'letter ' +
      (letter.vowel ? 'vowel ' : '') +
      (letter.isRare ? 'rare ' : '')
    "
    draggable="true"
    @dragstart="dragItem(letter)"
    :key="letter.letter"
  >
    <div class="main-letter">{{ letter.letter }}</div>
    <div class="point-value">{{ letter.pointValue }}</div>
    <template> </template>
  </div>
</template>

<script>
export default {
  name: "Letter",
  props: ["letter"],
};
</script>

<style scoped>
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
