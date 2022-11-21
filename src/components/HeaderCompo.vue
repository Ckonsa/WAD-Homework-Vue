<template>
    <header>
        <router-link to="/">HOME</router-link>
        <!-- <router-link to="/">ADD POST</router-link> -->
        <router-link to="/signup">REGISTER</router-link>
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

<style scoped>
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
.dropdown > .icon {
    width: 100%;
    height: 100%;
}
.dropdown_list {
    position:relative;
    float: left;
    right: 154px;
    top: 10px;
    padding-right: 35px;
    min-height: 120px;
    box-shadow: 0px 8px 16px 0px rgba(12, 3, 39, 0.742);
    background-color: var(--post-top-bottom-blue);
    border-radius: 5px;
}
.dropdown_list li {
    list-style-type: none;
    padding: 5px;
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
        right: 83px;
        top: 17px;
    }
}
</style>