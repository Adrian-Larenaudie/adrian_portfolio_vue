<template>
    <div class="main_content_block_home">
        <div>
            <h1 class="main_content_home_title">
                Bienvenue, je suis
                <span :style="{color: getCurrentTheme.word}">Adrian</span></h1>
            <h2 class="main_content_home_subtitle">
                <span>Développeur web</span>
                <span id="wordSwitcher" :style="{color: getCurrentTheme.word}" class="main_content_word_scroller solo_word"></span>
            </h2>
        </div>
    </div>
    <!-- menu de la page home -->
    <HomeMenu />
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
    mounted() {
        try {
            const arrayOfWords = [
                'Nodejs',
                'Vuejs',
                'mySql',
                'JavaScript',
                'Laravel',
                'React/Redux',
                'NoSql',
            ];
            setTimeout(async() => {
                let currentIndex = 0;
                for(let i = 0; i < arrayOfWords.length; i++) {
                    if(i === arrayOfWords.length - 1) {
                       i = 0;
                    };
                    for(let j = 0; j < arrayOfWords[i].length; j++) {
                        if(i !== currentIndex) {
                            await new Promise(resolve => setTimeout(resolve, 1200));
                            for (let k = wordSwitcher.querySelectorAll('span').length -1; k >= 0; k--) {
                                wordSwitcher.querySelectorAll('span')[k].classList.add('wordDisappear');
                                await new Promise(resolve => setTimeout(resolve, 100));
                                wordSwitcher.querySelectorAll('span')[k].remove();
                            }
                            currentIndex = i;
                            await new Promise(resolve => setTimeout(resolve, 500));
                        }
                        await new Promise(resolve => setTimeout(resolve, 100));
                        let newSpan = document.createElement('span');
                        newSpan.textContent = arrayOfWords[i][j];
                        wordSwitcher.appendChild(newSpan);
                        newSpan.classList.add('wordReveal');
                        await new Promise(resolve => setTimeout(resolve, 0));  
                    }  
                }
            }, 1000);
        } catch (error) {
            console.log(error);
        }
    },
}
</script>

<style>
.wordReveal {
    display: inline-block;
    animation-name: wordReveal;
    animation-delay: 0;
    animation-duration: .3s;
    animation-iteration-count: 1;
}
@keyframes wordReveal {
    0% {
      transform: scale(0);
      opacity: 0;
    }
    100% {
        opacity: 1;
      transform: scale(1);   
    }
}
.wordDisappear {
    display: inline-block;
    animation-name: wordDisappear;
    animation-delay: 0;
    animation-duration: .3s;
    animation-iteration-count: 1;
}
@keyframes wordDisappear {
    0% {
        opacity: 1;
        transform: scale(1); 
      
    }
    100% {
        transform: scale(0);
        opacity: 0;  
    }
}
</style>