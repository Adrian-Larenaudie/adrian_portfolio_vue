<template>
    <h1 class="logo_al" :style="{color: getCurrentTheme.word}">al</h1>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'LogoAL',
    computed: {
        ...mapGetters('utils', ['getCurrentTheme']),
    },
}
</script>

<style>
.logo_al {
    position: absolute;
}
</style>