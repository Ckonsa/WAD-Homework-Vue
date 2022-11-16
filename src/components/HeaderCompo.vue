<template>
    <header>
        <router-link to="/">HOME</router-link>
        <router-link to="/">ADD POST</router-link>
        <router-link to="/signup">LOGIN</router-link>
        <div class="dropdown">
            <img class="icon" src="@/assets/images/student.png" alt="Icon" @click="toggle">
            <div class="dropdown_list" v-if="showList">
              <ul>
                <li>Martha Doe</li>
                <li>martha.doe@gmail.com</li>
                <li>Logout</li>
              </ul>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        data() {
            return {
              showList: false
            }
        },
        methods: {
          toggle() {
            this.showList = !this.showList
          }
        }
}
</script>

<style>
:root {
    --background-blue: #91c5d79b;
    --post-top-bottom-blue: #60abcc;
    --header-footer-blue: #01497cdf;
    --sides-blue: #1e5f8ed2;
    --header-footer-hover-blue: #89C2D9;
    --dark-blue: #012A4A;
    --almost-black: #000c15;
    --almost-white: #cfedfa;
}

* {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    color: var(--almost-black);
}

html {
    background-color: var(--background-blue);
}

header {
    overflow: visible;
    position: relative;
    background-color: var(--header-footer-blue);
    height: 70px;
    padding: 15px;
    border-radius: 5px;
}

header a {
    float: left;
    text-decoration: none;
    font-size: 20px;
    line-height: 30px;
    padding: 20px;
}

header a:hover {
    background-color: var(--header-footer-hover-blue);
    color: var(--dark-blue);
    border-radius: 15px;
}

header>.icon {
    float: right;
    width: 65px;
    height: 65px;
    padding: 3px;
    border-radius: 50%;
    border-style: dotted;
    border-color: var(--almost-white);
    cursor: pointer;
}
.icon {
    text-decoration: none;
    width: 50px;
    height: 50px;
}

.dropdown {
    float: right;
    width: 65px;
    height: 65px;
    padding: 3px;
    border-radius: 50%;
    border-style: dotted;
    border-color: var(--almost-white);
    cursor: pointer;
}

.dropdown>.icon {
    width: 100%;
    height: 100%;
}

.dropdown_list {
    /*display: none;*/
    position: relative;
    float: left;
    right: 88px;
    top: 10px;
    background-color: #f1f1f1;
    min-width: 160px;
    min-height: 120px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    background-color: var(--post-top-bottom-blue);
    border-radius: 5px;
}

.dropdown_list>li {
    list-style-type: none;
    padding: 10px;
}

.show {
    display: block;
}

@media screen and (max-width: 480px) {
    header {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: fit-content;
    }

    header a {
        font-size: 15px;
        line-height: 15px;
        padding: 10px;
    }

    .dropdown_list {
        right: 54px;
        top: 17px;
    }
}

</style>