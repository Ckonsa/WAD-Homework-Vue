<template>
<footer>
<a href="#">CONTACT</a>
</footer>
</template>

<script>
    export default {
        data() {
            return {

    }
}
}
</script>

<style>
footer {
    overflow: hidden;
    background-color: var(--header-footer-blue);
    text-align: center;
    height: 60px;
    padding: 30px 10px 10px 10px;
    margin-top: 10px;
    border-radius: 5px;
}

footer a {
    text-decoration: none;
    font-size: 15px;
    line-height: 20px;
    padding: 10px;
}

footer a:hover {
    background-color: var(--header-footer-hover-blue);
    color: var(--dark-blue);
    border-radius: 15px;
}
</style>