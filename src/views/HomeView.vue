<template>
    <div class="main_content_block_home">
        <div>
            <h1 id="homeTitle" class="main_content_home_title">
                <span> Bienvenue,&nbsp;</span>
                <span>je suis&nbsp;</span>
                <span :style="{color: getCurrentTheme.word}">Adrian</span></h1>
            <h2 id="homeSubtitle" class="main_content_home_subtitle">
                <span>Développeur web</span>
                <span id="wordSwitcher" :style="{color: getCurrentTheme.word}" class="main_content_word_scroller solo_word"></span>
            </h2>
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
            /* petit algo d'apparition/disparition des mots du tableau lettre par lettre */
            setTimeout(async() => {
                let currentIndex = 0;
                for(let i = 0; i < arrayOfWords.length; i++) {
                    if(i === arrayOfWords.length - 1) {
                       i = 0;
                    };
                    for(let j = 0; j < arrayOfWords[i].length; j++) {
                        if(i !== currentIndex) {
                            await new Promise(resolve => setTimeout(resolve, 2000));
                            for (let k = wordSwitcher.querySelectorAll('span').length -1; k >= 0; k--) {
                                wordSwitcher.querySelectorAll('span')[k].classList.add('wordDisappear');
                                await new Promise(resolve => setTimeout(resolve, 150));
                                wordSwitcher.querySelectorAll('span')[k].remove();
                            }
                            currentIndex = i;
                            await new Promise(resolve => setTimeout(resolve, 0));
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

            /* animations reveal */
            homeTitle.style.visibility = 'hidden';
            homeSubtitle.style.visibility = 'hidden';
            setTimeout(() => {
                homeTitle.style.visibility = 'visible';
                homeTitle.classList.add('revealFromLeft');
            }, 200);
            setTimeout(() => {
                homeSubtitle.style.visibility = 'visible';
                homeSubtitle.classList.add('revealFromLeft');
            }, 400);
            
        } catch (error) {
            console.log(error);
        }
    },
}
</script>

<style>
/* animations d'apparition de lettre */
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

/* animation de disparition de lettre */
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