/* eslint-disable no-console */
/* eslint-disable require-await */
import Vue from 'vue'
const BASE_URL = 'wss://ws.mmcc.i3lab.group/use'

export const WebSocketEventBus = new Vue({
  data: {
    connections: {},
  },
  created() {
    /**
     * Creation of connection with or without interaction
     */
    this.$on('connect', ({ configurationId, interaction }) => {
      if (
        !Object.prototype.hasOwnProperty.call(this.connections, configurationId)
      ) {
        this._connect(configurationId, interaction)
      }
    })
    this.$on('send', async (data) => {
      const id = data.configurationId
      this._sendMessage(
        this.connections[id],
        JSON.stringify(data.message)
      ).catch((e) => console.error(e))
    })
  },
  methods: {
    _waitForOpenConnection(socket) {
      return new Promise((resolve, reject) => {
        const maxNumberOfAttempts = 10
        const intervalTime = 200 // ms

        let currentAttempt = 0
        const interval = setInterval(() => {
          if (currentAttempt > maxNumberOfAttempts - 1) {
            clearInterval(interval)
            reject(
              new Error(
                '[WebSocketEventBus] Maximum number of opening attempts exceeded'
              )
            )
          } else if (socket.readyState === socket.OPEN) {
            clearInterval(interval)
            resolve()
          }
          currentAttempt++
        }, intervalTime)
      })
    },
    async _sendMessage(socket, msg) {
      if (socket.readyState !== socket.OPEN) {
        try {
          await this._waitForOpenConnection(socket)
          socket.send(msg)
        } catch (err) {
          throw new Error(err.message)
        }
      } else {
        socket.send(msg)
      }
    },
    /**
     * Encoding of URL: "BASE_URL/use/configId?interaction=int"
     */
    _url(id, interaction) {
      return encodeURI(
        `${BASE_URL}/${id}` + (interaction ? `?interaction=${interaction}` : '')
      )
    },
    _connect(id, interaction) {
      const connections = {}
      const ws = new WebSocket(this._url(id, interaction))
      ws.onmessage = (event) => {
        console.debug('[WebSocketEventBus] New message:', event.data)
        const packet = {
          configurationId: id,
          data: JSON.parse(event.data),
        }
        this.$emit('message', packet.data)
      }

      ws.onopen = (event) => {
        console.debug('[WebSocketEventBus] Connection opened!', event)
        const packet = {
          configurationId: id,
          data: event,
        }
        this.$emit('open', packet)
      }

      ws.onerror = (event) => {
        console.error('[WebSocketEventBus] Error', event)
        const packet = {
          configurationId: id,
          data: event,
        }
        this.$emit('error', packet)
      }

      ws.onclose = (event) => {
        console.debug('[WebSocketEventBus] Connection closed!', event)
        const packet = {
          configurationId: id,
          data: event,
        }
        this.$emit('close', packet)

        /**
         * Deletion of connection
         */
        const connections = this.connections
        delete connections[id]
        Object.assign(this.connections, connections)

        // TODO: handle reconnection
        setTimeout(() => this._connect(id), 1000)
      }
      connections[id] = ws
      this.connections = Object.assign(this.connections, connections)
    },
    _checkExecute(callback, par) {
      if (typeof callback === 'function') {
        return callback(par)
      }
      return () => {}
    },
    onOpen(callback) {
      this.$on('open', (par) => this._checkExecute(callback, par))
    },
    onMessage(callback) {
      this.$on('message', (par) => this._checkExecute(callback, par))
    },
    onError(callback) {
      this.$on('error', (par) => this._checkExecute(callback, par))
    },
    onClose(callback) {
      this.$on('close', (par) => this._checkExecute(callback, par))
    },
  },
})
