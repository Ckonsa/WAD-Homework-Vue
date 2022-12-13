<template>
  <div class="login-container">
    <form class="login-form">
      <div class="form-control">
        <label for="email">Email</label>
        <input
          type="email"
          v-model="email"
          placeholder="e.g. martha.doe@gmail.com"
          required
        />
      </div>
      <div class="form-control">
        <label for="password">Password</label>
        <input
          type="password"
          v-model="password"
          placeholder="e.g. C2VE+td#wZ_m4"
          required
        />
      </div>
      <input @click="LogIn" type="submit" value="Login" class="btn btn-block" />
    </form>
    <div class="toSignupSection">
      <p>OR</p>
      <button class="goToSignup">
        <router-link to="/signup"><a>Signup</a></router-link>
      </button>
    </div>
  </div>
</template>
    
<script>
export default {
  name: "LoginCompo",
  data: function () {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    LogIn() {
      var data = {
        email: this.email,
        password: this.password,
      };
      fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          //this.$router.push("/");
        location.assign("/");
        })
        .catch((e) => {
          console.log(e);
          console.log("error");
        });
    },
  },
};
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
.login-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 50px;
  margin-bottom: 0px;
}
.form-control {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 10px;
  margin-bottom: 2%;
}
input,
label {
  padding: 10px;
}
input[type="email"] {
  width: 150px;
}
input[type="password"] {
  margin-right: 4%;
}
input[type="submit"] {
  background-color: var(--header-footer-blue);
  border: 1px solid black;
  color: white;
  padding: 3px;
  font-size: 22px;
  width: 50%;
  cursor: pointer;
}
.toSignupSection {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-left: 50px;
  margin-right: 50px;
  margin-bottom: 20px;
}
a {
  text-decoration: none;
  color: white;
  font-size: 22px;
}
.goToSignup {
  background-color: var(--header-footer-blue);
  border: 1px solid black;
  padding: 3px;
  width: 50%;
  cursor: pointer;
}

@media screen and (max-width: 550px) {
  .login-container {
    margin: 50px;
  }
}

@media screen and (max-width: 375px) {
  .form-control {
    flex-direction: column;
  }
}
</style>