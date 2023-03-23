<template>
    <div class="main_content_block_home">
        <div>
            <h1 class="main_content_home_title">
                Bienvenue, je suis
                <span :style="{color: getCurrentTheme.word}" class="solo_word">Adrian</span></h1>
            <h2 class="main_content_home_subtitle">
                <span>Développeur web</span>
                <span id="wordSwitcher" :style="{color: getCurrentTheme.word}" class="main_content_word_scroller solo_word">{{ this.currentWord }}</span>
            </h2>
            <!-- menu de la page home -->
            <HomeMenu />
        </div>
    </div>
</template>

<script>
import HomeMenu from '@/components/menus/HomeMenu.vue';
import { mapGetters } from 'vuex';

export default {
    name: 'HomeView',
    components: {
        HomeMenu,
    },
    computed: {
        ...mapGetters('utils', ['getCurrentTheme']),
    },
    data() {
        return {
            currentWord: ' ',
        }
    },  
    mounted() {
        const arrayOfWords = [
                'nodejs',
                'vuejs',
                'javascript',
                'laravel',
                'react',
            ];
            setTimeout(async() => {
                let currentIndex = 0;
                for(let i = 0; i < arrayOfWords.length; i++) {
                    if(i === arrayOfWords.length - 1) {
                        i = 0;
                    };
                    for(let j = 0; j < arrayOfWords[i].length; j++) {
                        if(i !== currentIndex) {
                            await new Promise(resolve => setTimeout(resolve, 1500));
                            this.currentWord = ' ';
                            currentIndex = i;
                        }
                        await new Promise(resolve => setTimeout(resolve, 200));
                        this.currentWord += arrayOfWords[i][j];    
                    }  
                }
            }, 1000);
    },
}
</script>