<template>

    <div class="main_content_block_about">
        <h1 id="aboutTitle" class="main_content_about_title">
            <span id="wordingAnimation"></span> 
            <span>&nbsp;</span> 
            <span :style="{color: getCurrentTheme.word}">mots</span></h1>
        <div id="paragraphContainer" class="main_content_about_block_text">
            <p class="main_content_about_paragraph">
                Courant 2021 après une période de quelques mois à me former aux téchnologies du web en autodidacte, je décide d'intégrer une école pour me professionnaliser.
            </p>
            <p class="main_content_about_paragraph">
                J'effectue deux formations chez <span :style="{color: getCurrentTheme.word}">O'clock</span>, DWWM puis CDA en alternance. Pour le seconde formation j'ai la chance d'intégrer l'entreprise <span :style="{color: getCurrentTheme.word}">ZAION</span> en tant que développeur backend nodejs.
            </p>
            <p class="main_content_about_paragraph">
                Depuis les débuts de mon parcours le développement est un univers qui me passionne.
                J'accorde de l'importance à rendre mon code évolutif et à créer des interfaces attractives pour rendre l'expérience utilisateur aussi agréable qu'inoubliable.
            </p>
            <p class="main_content_about_paragraph">
                Mes expériences m'ont amenées à comprendre et appliquer les concepts inhérents au développement applicatif ce qui me rend flexible sur la stack technique utilisée tout en ayant un <span :style="{color: getCurrentTheme.word}">profile</span> orienté fullstack javascript.
            </p>

        </div>

    </div>

</template>

<script>
import HomeMenu from '@/components/menus/HomeMenu.vue';
import { mapGetters } from 'vuex';

export default {
    name: 'AboutView',
    components: {
            HomeMenu,
        },
    computed: {
        ...mapGetters('utils', ['getCurrentTheme']),
    }, 
    mounted() {
        /* petit algo d'animation des lettres du mot "word" */
        const word = 'Quelques';
        for (let i = 0; i < word.length; i++) {
            const newSpan = document.createElement('span');
            newSpan.textContent = word[i];
            wordingAnimation.appendChild(newSpan);
        }
        const letterTags = wordingAnimation.querySelectorAll('span')
        setTimeout(async() => {
            for (let i = 0; i < letterTags.length; i++) {
                await new Promise(resolve => setTimeout(resolve, 50));
                letterTags[i].classList.add('letterBigger');   
                if(i === letterTags.length - 1) {
                    i = -1;
                    await new Promise(resolve => setTimeout(resolve, 6000));
                    letterTags.forEach(letterTag => {
                        letterTag.classList.remove('letterBigger'); 
                    });
                }       
            }
        }, 1000);  
        
        /* animations reveal */
        aboutTitle.style.visibility = 'hidden';
        const paragraphsTags = paragraphContainer.querySelectorAll('p');
        for (let i = 0; i < paragraphsTags.length; i++) {
                paragraphsTags[i].style.visibility = 'hidden';       
        }

        setTimeout(() => {
            aboutTitle.style.visibility = 'visible';
            aboutTitle.classList.add('fade');
        }, 800);
        
        setTimeout(async() => {
            for (let i = 0; i < paragraphsTags.length; i++) {
                await new Promise(resolve => setTimeout(resolve, 100));
                paragraphsTags[i].style.visibility = 'visible'; 
                paragraphsTags[i].classList.add('revealFromLeft');             
            }  
        }, 100);
        
    }
}
</script>

<style>
/* animation de disparition de lettre */
.letterBigger {
    display: inline-block;
    animation-name: letterBigger;
    animation-delay: 0;
    animation-duration: .5s;
    animation-iteration-count: 1;
}
@keyframes letterBigger {
    0% {
        transform: scale(1);       
    }
    25% {
        transform: scale(1.3);
    }
    50% {
        transform: scale(1); 
    }
    75% {
        transform: scale(.8); 
    }
    100% {
        transform: scale(1); 
    }
}
</style>
