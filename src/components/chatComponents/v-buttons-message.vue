<template>
  <div class="container">
    <button
      v-for="(but, idx) in buttons"
      :key="idx"
      class="button"
      @click="retryAction(but)"
    >
      {{ but }}
    </button>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import { useMessagesStore } from "@/store/botActions";

const store = useMessagesStore();
defineProps({
  buttons: {
    type: Array,
    default() {
      return [];
    },
  },
});

function retryAction(but) {
  store.sendMesssage({ msg: but, author: "user" });
  store.checkBotWriting();
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
  padding: 10px 0;
  .button {
    color: #334dff;
    background: none;
    border: 1px solid #334dff;
    padding: 5px;
    border-radius: 10px;
    font-size: 12px;
    font-family: "Montserrat";
  }
}
</style>
