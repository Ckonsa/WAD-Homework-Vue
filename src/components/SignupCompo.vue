<template>
<div class=signup-container>
<form class="signup-form">
    <div class="form-control">
    <label for="email">Email</label>
    <input type="email" v-model="email" placeholder="e.g. martha.doe@gmail.com" required />
    </div>
    <div class="form-control">
    <label for="password">Password</label>
    <input type="password" v-model="password" placeholder="e.g. C2VE+td#wZ_m4" required/>
    </div>
    <div v-if="invalidPasswordMsg" class="invalid-password-message">{{invalidPasswordMsg}}</div>
    <input @click="signUp" type="submit" value="Signup" class="btn btn-block" />
</form>
<div class="toLoginSection">
    <p>Already have an account?</p>
    <button class="goToLogin"><router-link to="/login"><a>Login</a></router-link></button>
</div>
</div>
</template>

<script>
    export default {
        name : 'SignupCompo',
        data: function() {
            return {
                email : '',
                password : '',
                invalidPasswordMsg : '',
            }
        },
        watch: {
            password(value) {
                this.password = value;
                this.validateSignup(value);
            }
        },
        methods : {
            validateSignup() {
                console.log("Email:" + this.email)
                console.log("Password:" + this.password)
                this.invalidPasswordMsg = ''
                // The password should be of a specific length (at least 8 chars and less than 15 chars).
                if (this.password.length < 8 || this.password.length >= 15) {
                    this.invalidPasswordMsg += 'Password must be between 8-14 characters.\n'
                }
                // It should start with an uppercase alphabet.
                // Includes at least one uppercase alphabet character.
                const regex_begin = /^[A-Z]/
                if (!regex_begin.test(this.password)) {
                    this.invalidPasswordMsg += 'Password must begin with an uppercase letter.\n'
                }
                // Includes at least two lowercase alphabet characters.
                const regex_lower = /[a-z].*[a-z]/
                if (!regex_lower.test(this.password)) {
                    this.invalidPasswordMsg += 'Password must contain at least 2 lowercase letters.\n'
                }
                // Includes at least one numeric value.
                const regex_num = /\d/
                if (!regex_num.test(this.password)) {
                    this.invalidPasswordMsg += 'Password must contain a number.\n'
                }
                // It should include the character “_”
                const regex_line = /_/
                if (!regex_line.test(this.password)) {
                    this.invalidPasswordMsg += "Password must contain a character '_'.\n"
                }
            },
            signUp() {
                var data = {
                    email: this.email,
                    password: this.password
                };
                fetch("http://localhost:3000/auth/signup", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    credentials: "include",
                    body: JSON.stringify(data),
                })
                .then((response) => response.json())
                .then(() => {
                    this.$router.push("/");
                })
                .catch((e) => {
                    console.log("Error "+e);
                })
      }
    }
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
    margin-bottom: 0;
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
.toLoginSection {
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
.goToLogin {
        background-color: var(--header-footer-blue);
        border: 1px solid black;
        padding: 3px;
        width: 50%;
        cursor: pointer;
}

@media screen and (max-width: 550px) {
    .signup-container {
        margin: 50px;
    }
}

@media screen and (max-width: 375px) {
.form-control {
    flex-direction: column;
}
}
</style>