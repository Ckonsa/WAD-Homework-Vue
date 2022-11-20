<template>
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
            }
        }
    }

</script>

<style scoped>
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
</style>