<template>
  <div class="chat-wrapper">
    <div class="chat-header">
      Задайте вопрос боту
      <i class="bx bx-x close-chat" @click="emit('close')"></i>
    </div>
    <div class="chat-messages">
      <div class="chat-content">
        <div v-for="(mes, idx) of messages" :key="idx">
          <v-message :message="mes" :class="mes.author"></v-message>
          <v-buttons-message
            v-if="mes.author == 'bot'"
            :buttons="mes.buts"
          ></v-buttons-message>
        </div>
        <v-loading-message v-if="botWriting"></v-loading-message>
      </div>
    </div>
    <div class="message-actions">
      <vs-input
        block
        primary
        v-model="message"
        placeholder="Введите сообщение..."
        @keyup.enter="sendMessage()"
      >
      </vs-input>
      <i
        class="bx bxs-send bx-sm"
        :class="message.length > 0 ? 'send-button' : 'disable-button'"
        @click="sendMessage()"
      ></i>
    </div>
  </div>
</template>

<script setup>
import VMessage from "./chatComponents/v-message.vue";
import VLoadingMessage from "./chatComponents/v-loading-message.vue";
import VButtonsMessage from "./chatComponents/v-buttons-message.vue";

import { ref, computed, defineEmits } from "vue";
import { useMessagesStore } from "@/store/botActions";

const emit = defineEmits(["close"]);

const store = useMessagesStore();

const message = ref("");

const messages = computed(() => store.treeOfMessages);
const botWriting = computed(() => store.botWriting);

function sendMessage() {
  if (!(message.value.length > 0)) return;
  store.sendMesssage({ msg: message.value, author: "user" });
  store.checkBotWriting();
  message.value = "";
}
</script>

<style lang="scss" scoped>
.chat-wrapper {
  position: fixed;
  bottom: 100px;
  right: 50px;
  width: 300px;
  height: 420px;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0 0 128px 0 rgba(0, 0, 0, 0.1),
    0 32px 64px -48px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  transition: all 0.1s ease;
  z-index: 999;
  .chat-header {
    padding: 10px 0;
    position: relative;
    font-size: 1rem;
    font-weight: bold;
    text-align: center;
    color: #fff;
    background: #334dff;
    position: relative;
    border-bottom: 1px solid #dbd6db;

    .close-chat {
      position: absolute;
      top: 50%;
      right: 5%;
      transform: translateY(-50%);
      float: right;
      display: none;
      cursor: pointer;
    }
  }
  .chat-messages {
    height: 320px;
    display: flex;
    flex-direction: column-reverse;
    overflow-y: auto;
    position: relative;
    bottom: 0;
    padding: 10px;
  }
  .message-actions {
    display: flex;
    align-items: center;
    padding: 3px 10px;
    border-top: 1px solid #dbd6db;
    gap: 10px;
    .send-button {
      color: #334dff;
      cursor: pointer;
    }

    .disable-button {
      color: #dbd6db;
    }
  }
}

@media (max-width: 420px) {
  .chat-wrapper {
    right: 0;
    bottom: 0;
    height: 100%;
    border-radius: 0;
    width: 100%;

    .chat-header {
      .close-chat {
        display: block;
      }
    }

    .chat-messages {
      height: 80%;
      // padding: 25px 15px 100px;
    }
  }
}
</style>
