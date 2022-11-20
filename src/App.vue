<template>
    <router-link to="/"></router-link>
    <router-link to="/"></router-link>
    <router-link to="/signup"></router-link>
  <router-view/>
</template>

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
.icon {
    text-decoration: none;
    width: 50px;
    height: 50px;
}
</style>
