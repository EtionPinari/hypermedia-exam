// Counter is the value of scrolling left of right. If counter is 0 then the previous button does not show
// If counter is >0 then the previous button shows
// If counter is > number_employees/6 (or 9) then it stops showing next button
// If you go away from a page it gets reset to 0 (by clicking the buttons on the navbar)
import Vue from 'vue'
export const state = () => {
  return {
    counter: 0,
    numberOfEmployees: -1,
    messages: [],
  }
}

export const mutations = {
  increment(state) {
    state.counter++
  },
  decrement(state) {
    state.counter--
  },
  reset(state) {
    state.counter = 0
  },
  setNumberOfEmployees(state, number) {
    state.numberOfEmployees = number
  },
  addMessage(state, message) {
    const messages = state.messages
    messages.push(message)
    Vue.set(state, 'messages', messages)
  },
}
