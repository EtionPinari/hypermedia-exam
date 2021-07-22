<template>
  <div class="chat">
    <div v-if="isOpen" class="chat-container">
      <div id="chat-window" class="chat-window">
        <div
          v-for="(message, messageIndex) of chatList"
          :key="`message-${messageIndex}`"
          class="message"
          :class="{ sender: message.sender }"
        >
          <div class="message-content" :class="{ sender: message.sender }">
            {{ message.content }}
          </div>
        </div>
      </div>
      <input
        v-model="messageToSend"
        type="text"
        @keypress.enter="sendMessage"
      />
    </div>
    <div class="button" @click="isOpen = !isOpen">
      <img
        src="https://img.icons8.com/ios-filled/452/chat--v1.png"
        alt="Please enable javascript"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    chatList: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      messageToSend: '',
      isOpen: true,
    }
  },
  watch: {
    '$store.state.messages'() {
      const chatEl = document.getElementById('chat-window')
      chatEl.scrollTop = chatEl.scrollHeight
    },
  },
  methods: {
    sendMessage() {
      const { WebSocketEventBus } = require('mmcc/WebSocketEventBus')
      this.$store.commit('addMessage', {
        sender: false,
        content: this.messageToSend,
      })
      const packet = {
        message: { type: 'data', payload: { data: this.messageToSend } },
        configurationId: process.env.configurationId,
      }
      WebSocketEventBus.$emit('send', packet)
      this.messageToSend = ''
    },
  },
}
</script>

<style scoped>
.button {
  height: 60px;
  width: 60px;
  border: 1px solid black;
  border-radius: 100%;
  padding: 10px;
  float: right;
}
.button img {
  width: 100%;
}
.chat {
  position: fixed;
  bottom: 3px;
  right: 0px;
}
@media only screen and (min-width: 601px), screen and (min-height: 701x) {
  .chat-container {
    border: 1px solid black;
    border-radius: 4px;
    height: 500px;
    width: 400px;
    position: absolute;
    bottom: 61px;
    right: 0px;
    background-color: rgba(240, 240, 240, 0.4);
  }
}

@media only screen and (max-height: 700px) {
  .chat-container {
    height: 50vh;
  }
}

@media only screen and (max-width: 600px) {
  .chat-container {
    border: 1px solid black;
    border-radius: 4px;
    height: 450px;
    width: 250px;
    position: absolute;
    bottom: 61px;
    right: 0px;
    background-color: rgba(240, 240, 240, 0.4);
  }
}

.chat-window {
  overflow-y: scroll;
  height: calc(100% - 34px);
  border-bottom: gray 1px solid;
}
.message {
  width: calc(100% - 10px);
  display: flex;
  justify-content: flex-end;
}
.message.sender {
  justify-content: flex-start;
}
.message-content {
  padding: 5px 10px;
  margin: 4px;
  width: auto;
  background: rgba(250, 250, 250, 0.9);
  color: black;
  border: 1px solid black;
  border-radius: 4px;
}
.message-content.sender {
  background: rgba(50, 50, 150, 0.9);
  color: white;
  border: 1px solid black;
  max-width: 70%;
}
input {
  width: 100%;
  position: absolute;
  z-index: 20;
}
</style>
