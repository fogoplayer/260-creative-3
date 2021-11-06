<template>
  <div class="about">
    <h1 v-if="this.$root.$data.username == ''">
      This is the board, please login to play
    </h1>
    <h1 v-else>{{ this.$root.$data.username }}'s Board</h1>
    <div>
      <div>
        <table>
          <tr v-for="i in 15" :key="i">
            <td v-for="j in 15" :key="j">{{ i }} {{ j }}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Board",
};
</script>
