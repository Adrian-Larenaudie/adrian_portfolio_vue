<template>
    <div class="main_content_block_home">
        <h1 class="logo_al" :style="{color: getCurrentTheme.word}">al</h1>
        <div :style="{backgroundColor: getCurrentTheme.background}" class="loading_bar"></div>
    </div>
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
    font-weight: 900;
    font-size: 6rem;
    text-transform: uppercase;
}
.loading_bar {
    height: 10px;
    width: 100%;
}
</style>