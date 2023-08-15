import { defineStore } from "pinia";
import { ref } from "vue";

import { botAnswer } from "@/assets/service/checkMessage";

export const useMessagesStore = defineStore("messages", () => {
  const sentMessage = ref(false);

  const botWriting = ref(false);

  const treeOfMessages = ref([]);

  const currentMessage = ref("");

  function sendMesssage(newMessage) {
    currentMessage.value = newMessage;
    treeOfMessages.value.push(newMessage);
  }

  // искусственная задержка, просто для красоты
  function checkBotWriting() {
    setTimeout(() => (botWriting.value = true), 1000);
    setTimeout(() => {
      botWriting.value = false;
      sendMesssage(botAnswer(currentMessage.value.msg));
    }, 2000);
  }

  return {
    sentMessage,
    botWriting,
    treeOfMessages,
    currentMessage,
    sendMesssage,
    checkBotWriting,
  };
});
