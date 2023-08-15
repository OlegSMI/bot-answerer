<template>
  <div class="container">
    <vs-avatar v-if="isBot" circle color="#334dff" size="30">
      <i class="bx bxs-bot"></i>
    </vs-avatar>
    <div class="message-wrapper" :class="isBot ? 'bot-mes' : 'user-mes'">
      {{ message.msg }}
    </div>
  </div>
</template>

<script setup>
import { defineProps, computed } from "vue";
const props = defineProps({
  message: {
    type: Object,
    default() {
      return {};
    },
  },
});
const isBot = computed(() => props.message.author == "bot");
const backColor = computed(() => (isBot.value ? "#dbd6db" : "#334dff"));
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  display: flex;
  align-items: end;
  gap: 5px;

  .bot-mes {
    border-radius: 10px 10px 10px 0;
  }

  .user-mes {
    color: white;
    margin-left: auto;
    border-radius: 10px 10px 0 10px;
  }
}
.message-wrapper {
  color: black;
  background-color: v-bind("backColor");
  padding: 10px;
  max-width: 70%;
  margin-bottom: 5px;
  overflow-wrap: break-word;
}
</style>
