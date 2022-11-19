<template>
  <form @submit.prevent="validateSignup" class="signup-form">
    <div v-if="invalidPasswordMsg" class="invalid-password-message">{{invalidPasswordMsg}}</div>
    <div class="form-control">
      <label for="email">Email</label>
      <input type="email" v-model="email" placeholder="Email" required />
    </div>
    <div class="form-control">
      <label for="password">Password</label>
      <input type="password" v-model="password" placeholder="Password" required/>
    </div>
    <input type="submit" value="Signup" class="btn btn-block" />
  </form>
</template>

<script>
    export default {
        name : 'SignupCompo',
        data (){
            return {
                email : '',
                password : '',
                invalidPasswordMsg : '',
            }
        },
        methods : {
            validateSignup() {
                console.log("Email:" + this.email)
                console.log("Password:" + this.password)
                this.invalidPasswordMsg = ''
                // The password should be of a specific length (at least 8 chars and less than 15 chars).
                if (this.password.length <8 || this.password.length> 15) {
                    this.invalidPasswordMsg += 'password must be between 8-15 chars\n'
                }
                // It should start with an uppercase alphabet.
                // Includes at least one uppercase alphabet character.
                const regex_begin = /^[A-Z]/
                if (!regex_begin.test(this.password)) {
                    this.invalidPasswordMsg += 'password must begin with an uppercase letter\n'
                }

                // Includes at least two lowercase alphabet characters.
                const regex_lower = /[a-z].*[a-z]/
                if (!regex_lower.test(this.password)) {
                    this.invalidPasswordMsg += 'password must contain 2 or more lowercase letters\n'
                }

                // Includes at least one numeric value.
                const regex_num = /\d/
                if (!regex_num.test(this.password)) {
                    this.invalidPasswordMsg += 'password must contain a number\n'
                }

                // It should include the character “_”
                const regex_line = /_/
                if (!regex_line.test(this.password)) {
                    this.invalidPasswordMsg += "password must contain a character '_'\n"
                }
            }
        }
    }

</script>

<style scoped>
  .login-container {
      flex-grow: 2;
      display: flex;
      flex-direction: column;
      height: 70%;
      /* max-width: 700px; */
      align-content: center;
      justify-self: center;
      margin-top: 50px;
      margin-left: 15%;
      margin-right: 15%;
      background-color: var(--post-top-bottom-blue);
      border-radius: 15px;
      border: none;
  }

  .signup-form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
  }

  /* .form-control {
    white-space: nowrap;
  } */

  .form-control *{
    display: inline-block;
    width: 200px;
  }

  input {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
  }

  input[type=submit] {
      background-color: var(--header-footer-blue);
      border: 1px solid black;
      color: white;
      padding: 3px;
      font-size: 22px;
      width: 50%;
      cursor: pointer;
  }

  main a {
      color: blue;
      text-decoration: none;
  }

  h1 ~ h2 {
      margin: 0;
  }

  form + h2 {
      margin: 2%;
  }
</style>