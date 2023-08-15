<template>
  <div id="app">
    <v-flowtext></v-flowtext>
    <vs-button
      circle
      icon
      color="#334dff"
      size="xl"
      class="open-button"
      @click="activeBot = !activeBot"
    >
      <i v-if="!activeBot" class="bx bxs-message-square-dots bx-md bx-tada"></i>
      <i v-else class="bx bx-x bx-md"></i>
    </vs-button>
    <transition name="open-window">
      <v-chat-bot v-if="activeBot" @close="activeBot = false"></v-chat-bot>
    </transition>
  </div>
</template>

<script setup>
import VChatBot from "./components/v-chat-bot.vue";
import VFlowtext from "./components/v-flowtext.vue";
import { ref } from "vue";
import { useMessagesStore } from "@/store/botActions";

const store = useMessagesStore();
store.sendMesssage({
  msg: "Привет, я с удовольствием помогу тебе. Выбери действие.",
  author: "bot",
  buts: ["Заказать пиццу", "Найти ключи", "Подсказать смысл жизни"],
});

const activeBot = ref(false);
</script>

<style lang="scss" scoped>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 90vh;
  position: relative;
}
.open-button {
  position: fixed;
  bottom: 30px;
  right: 20px;
}

@media (max-width: 420px) {
  .open-button {
    right: 10px;
    bottom: 10px;
  }
}
</style>
