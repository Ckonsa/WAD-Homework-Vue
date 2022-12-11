<template>
<<<<<<< HEAD
  <HeaderCompo></HeaderCompo>
    <div class=signup-container>  
        <form @submit.prevent="validateSignup" class="signup-form">
            <div class="form-control">
                <label for="email">Email</label>
                <input type="email" v-model="email" placeholder="e.g. martha.doe@gmail.com" required />
            </div>
            <div class="form-control">
                <label for="password">Password</label>
                <input type="password" v-model="password" placeholder="e.g. C2VE+td#wZ_m4" required/>
            </div>
            <div v-if="invalidPasswordMsg" class="invalid-password-message">{{invalidPasswordMsg}}</div>
                <input type="submit" value="Signup" class="btn btn-block" />
        </form>
    </div>
<FooterCompo></FooterCompo>
</template>

<script>
import HeaderCompo from "@/components/HeaderCompo";
import FooterCompo from "@/components/FooterCompo";
export default {
  name: "SignupView",
  components: {HeaderCompo, FooterCompo},
}
</script>

<style scoped>
  .signup-container {
      flex-grow: 2;
      display: flex;
      flex-direction: column;
      height: 70%;
      align-content: center;
      justify-self: center;
      margin: 50px 20% 50px 20%;
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
    margin: 50px;
}
.form-control {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 10px;
    margin-bottom: 2%;
}
input, label {
    padding: 10px;
}
input[type=email] {
    width:150px;
}
input[type=password] {
    margin-right: 4%;
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
.invalid-password-message {
    margin-bottom: 20px;
    width: 55%;
    line-break: strict;
    color: #6b1127;
}
@media screen and (max-width: 375px) {
.form-control {
    flex-direction: column;
}
}

  @media screen and (max-width: 550px) {
  .signup-container {
        margin: 50px;
    }
}
</style>
=======
    <HeaderCompo></HeaderCompo>
    <div class=login-container>
      <LoginCompo></LoginCompo>
    </div>
    <FooterCompo></FooterCompo>
  </template>
  
  <script>
  import HeaderCompo from "@/components/HeaderCompo";
  import FooterCompo from "@/components/FooterCompo";
  import LoginCompo from "@/components/LoginCompo";
  export default {
    name: "LoginView",
    components: {HeaderCompo, LoginCompo, FooterCompo},
  }
  </script>
  
    <style scoped>
.login-container {
        flex-grow: 2;
        display: flex;
        flex-direction: column;
        height: 70%;
        align-content: center;
        justify-self: center;
        margin: 50px 20% 50px 20%;
        background-color: var(--post-top-bottom-blue);
        border-radius: 15px;
        border: none;
    }
  
    @media screen and (max-width: 550px) {
    .login-container {
          margin: 50px;
      }
  }
  </style>
  
>>>>>>> 47dbc82a8a8c129d80078030ee326240ef52545c
