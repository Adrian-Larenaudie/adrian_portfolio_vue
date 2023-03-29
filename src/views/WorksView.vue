<template>

    <div class="main_content_block_works">
        <h1 id="worksTitle" class="main_content_block_works_title"> 
            <span>Mes&nbsp;</span>
            <span class="wordingAnimation_realisations" id="wordAnimation" :style="{color: getCurrentTheme.word}"></span>
        </h1>
        <div id="cardContainer" class="main_content_works_card_displayer">

            <div v-for="work in getWorks" class="work_card" :id="work.name" :key="work.name" :style="{borderColor: getCurrentTheme.text}">
                <div>
                    <header class="work_card_header">
                        <h2 class="work_card_header_title" :style="{color: getCurrentTheme.word}">{{ work.name }}</h2>
                        <div class="work_card_links_area">

                            <a @mouseover="onMouseOver" @mouseleave="onMouseLeave" v-if="work.links.github !== ''" :href="work.links.github" :style="{color: getCurrentTheme.text}">
                                <svg xmlns="http://www.w3.org/2000/svg" height="20px" width="20px" role="img" viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github works_link_svg">
                                    <title>GitHub</title>
                                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
                                    </path>
                                </svg>
                            </a>
                            <a @mouseover="onMouseOver" @mouseleave="onMouseLeave" v-if="work.links.website !== ''" :href="work.links.website" :style="{color: getCurrentTheme.text}">
                                <svg xmlns="http://www.w3.org/2000/svg" height="20px" width="20px" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link works_link_svg">
                                    <title>External Link</title>
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                    <polyline points="15 3 21 3 21 9"></polyline>
                                    <line x1="10" y1="14" x2="21" y2="3"></line>
                                </svg>  
                            </a>
                            
                            
                        </div>
                    </header>

                    <main class="work_card_main_content">
                        <p class="work_card_description">{{ work.description }}</p>
                    </main>
                </div>

                <footer class="work_card_footer">
                    <ul class="work_card_techno_list">
                       <li v-for="techno in work.techno">{{ techno }}</li>
                    </ul>
                </footer>

            </div>

        </div>
    </div>

</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'WorksView',
    computed: {
        ...mapGetters('utils', ['getCurrentTheme']),
        ...mapGetters('works', ['getWorks']),
    },
    methods: {
        onMouseLeave(event) {
            try {
                event.target.querySelector('svg').style.stroke = this.getCurrentTheme.text;    
            } catch (error) {
                //console.log(error);
            }
            
        },
        onMouseOver(event) {
            try {
                event.target.querySelector('svg').style.stroke = this.getCurrentTheme.word;
            } catch (error) {
                //console.log(error);
            }
        
        },
    },
    mounted() {
        /* petit algo d'animation des lettres du mot "word" */
        const word = 'réalisations';
        for (let i = 0; i < word.length; i++) {
            const newSpan = document.createElement('span');
            newSpan.textContent = word[i];
            wordAnimation.appendChild(newSpan);
        }
        const letterTags = wordAnimation.querySelectorAll('span')
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
        }, 1200);  
        
        /* animations reveal */
        worksTitle.style.visibility = 'hidden';
        cardContainer.style.visibility = 'hidden';
        setTimeout(() => {
            const cardsTags = cardContainer.querySelectorAll('.work_card');
            for (let i = 0; i < cardsTags.length; i++) {
                cardsTags[i].style.visibility = 'hidden';
            }   
            setTimeout(async() => {
                cardContainer.style.visibility = 'visible';
                for (let i = 0; i < cardsTags.length; i++) {
                    await new Promise(resolve => setTimeout(resolve, 100));
                    cardsTags[i].style.visibility = 'visible';
                    cardsTags[i].classList.add('revealFromTop');    
                }
            }, 100);
            setTimeout(() => {
                worksTitle.style.visibility = 'visible';
                worksTitle.classList.add('revealFromLeft');
            }, 800);
        }, 0);

       

    }
}
</script>

<style>
/* animation des lettres */
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