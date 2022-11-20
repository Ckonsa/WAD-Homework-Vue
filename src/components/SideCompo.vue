<template>
<div class="sides"></div>
</template>

<script>
export default {
    data() {
        return {}
    }
}
</script>

<style scoped>
.sides {
    align-self: stretch;
    background-color: var(--sides-blue);
    width: 10%;
    margin: 10px 0;
    padding: 20px;
    border-radius: 5px;
}
@media screen and (max-width: 480px) {
.sides {
    display: none;
}
}
</style>