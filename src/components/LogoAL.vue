<template>
    <div class="main_content_block_home">
        <h1 class="logo_al" :style="{color: getCurrentTheme.word}">al</h1>
        <div :style="{backgroundColor: getCurrentTheme.background}" class="loading_bar">
            <div :style="{backgroundColor: getCurrentTheme.text}" id="loadingBarBis" class="loading_bar_bis"></div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'LogoAL',
    computed: {
        ...mapGetters('utils', ['getCurrentTheme']),
    },
    mounted() {
        setTimeout(async() => {
            for (let i = 0; i < 100; i++) {
                await new Promise(resolve => setTimeout(resolve, 5));
                loadingBarBis.style.width = i + '%';
            }  
        }, 0);         
    },
}
</script>

<style>
.logo_al {
    font-weight: 900;
    font-size: 6rem;
    text-transform: uppercase;
    margin-bottom: 2rem;
}
.loading_bar {
    border-radius: .2rem;
    height: 5px;
    width: 25%;
}
.loading_bar_bis {
    border-radius: .2rem;
    height: 5px;
    width: 0;
}
</style>