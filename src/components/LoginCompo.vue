<template>
    <form class="login-form">
        <div class="form-control">
        <label for="email">Email</label>
        <input type="email" v-model="email" placeholder="e.g. martha.doe@gmail.com" required />
        </div>
        <div class="form-control">
        <label for="password">Password</label>
        <input type="password" v-model="password" placeholder="e.g. C2VE+td#wZ_m4" required/>
        </div>
        <input type="submit" value="Login" class="btn btn-block"/>
    </form>
    <div class="toSignupSection">
        <p>OR</p>
        <button class="goToSignup"><router-link to="/signup"><a>Signup</a></router-link></button>
    </div>
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
            }
        }
    
    </script>
    
    <style scoped>
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

    @media screen and (max-width: 375px) {
    .form-control {
        flex-direction: column;
    }
    }
    </style>