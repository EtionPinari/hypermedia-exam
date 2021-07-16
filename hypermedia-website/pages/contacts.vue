<template>
  <div>
    <h2>Contact us</h2>
    Here you find our contacts:<br />
    Our contact number is : 800-800-8000<br />
    <form id="contact-form" type="reset" value="reset">
      <label
        class="lbl lg:text-xl lg:my-8 md:text-lg md:my-4 sm:text-base sm:my-2"
        for="fname"
        >First name:</label
      ><br />
      <input id="fname" type="text" name="fname" /><br />
      <label
        class="lbl lg:text-xl lg:my-8 md:text-lg md:my-4 sm:text-base sm:my-2"
        for="lname"
        >Last name:</label
      ><br />
      <input id="lname" type="text" name="lname" /><br />
      <label
        class="lbl lg:text-xl lg:my-8 md:text-lg md:my-4 sm:text-base sm:my-2"
        for="email"
        >Email:</label
      ><br />
      <input id="email" type="text" name="email" /><br />
      <label
        class="lbl lg:text-xl lg:my-8 md:text-lg md:my-4 sm:text-base sm:my-2"
        for="Reason"
        >Title:</label
      ><br />
      <input id="Reason" type="text" name="Reason" /><br />
      <label
        class="lbl lg:text-xl lg:my-8 md:text-lg md:my-4 sm:text-base sm:my-2"
        for="Message"
        >Message:</label
      ><br />
      <textarea id="Message" form="contact-form"> </textarea>
      <br />
      <br />
      <input
        id="submit"
        class="nav-button"
        type="submit"
        value="Submit"
        @click="sendFeedback()"
      />
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    sendFeedback() {
      alert('Thank you for your time!')
    },
  },
}
</script>

<style scoped lang="scss">
form {
  width: 80%;
  margin: auto;
  background-color: rgba(0, 250, 250, 0.025);
}
#fname,
#lname,
#email,
#Reason,
#Message {
  width: 50%;
  padding: 5px;
}
#Message {
  height: 33vh;
  vertical-align: top;
}
.lbl {
  width: 50%;
  margin: 0.4vh;
}
#submit {
  padding: 1vh;
  margin-bottom: 3vh;
}
</style>
