<template>
    <div :style="{background: getCurrentTheme.backgroundGradient, background: getCurrentTheme.linearGradient/* backgroundColor: getCurrentTheme.background */, color: getCurrentTheme.text}" class="application" id="application">

        <ThemeSelector />

        <BackgroundWord />

        <!-- contenu principale de la page -->
        <HomeMenu />
        <main class="main_content_block">
            <LogoAL v-if="getIsQuickLoading"/>
            <RouterView v-if="!getIsQuickLoading"/>              
            <MainFooter />
        </main>

        <BurgerMenu />

        <MobileMenu />

    </div>
    <div id="particle-container"></div>
</template>

<script>
import ThemeSelector from '@/components/ThemeSelector.vue';
import BackgroundWord from '@/components/BackgroundWord.vue';
import BurgerMenu from '@/components/menus/BurgerMenu.vue';
import MobileMenu from '@/components/menus/MobileMenu.vue';
import MainFooter from '@/components/MainFooter.vue';
import HomeMenu from '@/components/menus/HomeMenu.vue';
import LogoAL from '@/components/LogoAL.vue';

import { mapGetters, mapMutations } from 'vuex';

export default {
    name: 'LayoutView',
    components: {
        ThemeSelector,
        BackgroundWord,
        BurgerMenu,
        MobileMenu,
        MainFooter,
        HomeMenu,
        LogoAL,
    },
    data() {
        return {
            isLoading: this.getIsQuickLoading,
        };
    },
    computed: {
        ...mapGetters('utils', ['getCurrentTheme', 'getIsQuickLoading']),
    },
    data() {
        return {
            lastMove: {x: 0, y: 0},
        };
    },
    mounted() {
        setTimeout(() => {
            this.setIsQucikLoadingToFalse();
        }, 700);
    },
    methods: {
        ...mapMutations('utils', ['setIsQucikLoadingToFalse']),
       /*  onMouseMove(event) {
           // console.log(this.lastMove);
            if(this.lastMove.x === 0 && this.lastMove.y === 0) {
                this.lastMove.x = event.clientX + 35;
                this.lastMove.y = event.clientY + 35;    
            }
            console.log('x: ' + (event.clientX + 35), 'y: ' + (event.clientY + 35));
            const x =  event.clientX + 35;
            const y =  event.clientY + 35;
            this.createParticle(x, y); 
            
            // on va appeler la fonction autant de fois qu'il y a de différence entre chaque valeur

            // on veut savoir si la valeur du dernier enregistrement de client.x et client .y est positive ou négative
            const isXpositiveNb = this.lastMove.x >= 0 ? true : false;
            const isYpositiveNb = this.lastMove.y >= 0 ? true : false;

            // il faut savoir quelle valeur entre lastMove.x & lastMove.y est la plu éloignée de 0
            let wichIsAway = '';
            // -> nous avons alors 4 possibilités
            // 1.dans le cas ou les deux sont négatif
            if(!isXpositiveNb && !isYpositiveNb) {
                if(x >= y) {
                    wichIsAway = 'y';
                } else {
                    wichIsAway = 'x';
                }
            }
            // 2.dans le cas ou les deux sont positifs
            if(isXpositiveNb && isYpositiveNb) {
                if(x >= y) {
                    wichIsAway = 'x';
                } else {
                    wichIsAway = 'y';
                }
            }
            // -> dans les deux cas suivants on doit savoir si il s'agit de valeur positives ou négatives
            // 3.dans le cas ou seulement x est positif
            let tmpY = 0;
            if(isXpositiveNb && !isYpositiveNb) {
                tmpY = parseInt(String(y).slice(1, String(y).length), 10);
                if(tmpY >= x) {
                    wichIsAway = 'y';
                } else {
                    wichIsAway = 'x';
                }
            }
            // 4.dans le cas ou seulement y est positif
            let tmpX = 0;
            if(!isXpositiveNb && isYpositiveNb) {
                tmpX = parseInt(String(x).slice(1, String(x).length), 10);
                if(tmpX >= y) {
                    wichIsAway = 'x';
                } else {
                    wichIsAway = 'y';
                }
            }
            // mtn on va pouvoir boucler sur la différence qu'il y a entre l'élément le plus éloigné de 0 et la position courante de la souris
            console.log(wichIsAway);
            let dif = 0;
            if(wichIsAway === 'x') {
                // récupération de la différence
                dif = this.lastMove.x - x;
                    
            } else if(wichIsAway === 'y') {
                // récupération de la différence
                dif = this.lastMove.y - y;
            } else {
                this.createParticle(x, y);
            }
            // on veut que la différence soit positive pour itérer dessus
            dif = dif >= 0 ? dif : parseInt(String(dif).slice(1, String(dif).length), 10);
            // si pas de différence on dessinera qu'une seule particule
            console.log('différence -> ' + dif);
            if(dif == 0) {
                this.createParticle(x, y);
            // sinon on va itérer sur la différence
            } else {
                for (let i = 0; i < dif; i+=2) {
                    // pour chaque itérations on va dessiner une particule avec des valeurs adaptées
                    console.log(x + i, y + i);
                    // pour x on a plusieurs cas
                    // 1. x > lastmove.x
                    // 2. x < lastmove.x
                    // 3. x === lastmove.x
                    // pour y on a plusieurs cas
                    // 1. y > lastmove.y
                    // 2. y < lastmove.y
                    // 3. y === lastmove.y

                    // au total 2 * 2 - (2 - 1) cas à prendre en compte
                    // 1.cas x > lastmove.x && y > lastmove.y
                    // 2.cas x < lastmove.x && y < lastmove.y
                    // 3.cas x > lastmove.y && y < lastmove.y
                    // 4.cas x === lastmove.x && y === lastmove.y
                    // 5.cas x === lastmove.x && y > lastmove.y
                    // 6.cas x === lastmove.x && y < lastmove.y
                    // 7.cas x > lastmove.x && y === lastmove.y
                    // 8.cas x < lastmove.x && y === lastmove.y
                    // en fonction des cas les instuction de création de particule vont changer

                    // 1er cas on se déplace en bas à droite
                    if(x > this.lastMove.x && y > this.lastMove.y) {
                        this.createParticle( x + i , y + i);
                    // 2eme cas on se déplace en haut à gauche
                    } else if(x < this.lastMove.x && y < this.lastMove.y) {
                        this.createParticle( x - i , y - i);
                    // 3eme cas on se déplace en haut à droite
                    } else if (x > this.lastMove.y && y < this.lastMove.y) {
                        this.createParticle( x + i , y - i);
                    // 4eme cas on ne se déplace pas
                    } else if(x === this.lastMove.x && y === this.lastMove.y) {
                        this.createParticle(x, y);
                    // 5eme cas on se déplace vers le bas
                    }  else if(x === this.lastMove.x && y > this.lastMove.y) {
                        this.createParticle(x, y + i);
                    // 6eme cas on se déplace vers le haut
                    }  else if(x === this.lastMove.x && y < this.lastMove.y) {
                        this.createParticle(x, y - i);
                    // 7eme cas on se déplace vers la droite
                    }  else if(x > this.lastMove.x && y === this.lastMove.y) {
                        this.createParticle(x + i, y);
                    // 8eme cas on se déplace vers la gauche
                    }  else if(x < this.lastMove.x && y === this.lastMove.y) {
                        this.createParticle(x - i, y);
                    // 9eme cas on sedéplace en bas vers la gauche
                    } else if(x < this.lastMove.x && y > this.lastMove.y) {
                        this.createParticle( x - i , y + i);
                    // en théorie on arrive jms ici puisqu'on à pris en compte tous les cas de figure
                    } else {
                        // on ne rentrera jms ici
                        console.log('Else des cas de déplacement');     
                    }            
                }
            }   
            // à la fin on donne la valeur du last move
            this.lastMove.x = x;
            this.lastMove.y = y;
        },
        createParticle(x, y) {
            const container = document.querySelector('#particle-container');
            const particle = document.createElement('div');
            particle.classList.add('particle');
            particle.style.backgroundColor = this.getCurrentTheme.word;
            particle.style.left = x + 'px';
            particle.style.top = y + 'px';
            container.appendChild(particle);
            setTimeout(() => {
                particle.style.opacity = 0;
                particle.style.transform = 'scale(1)';
            }, 500);
            setTimeout(() => {
                particle.remove();
            }, 1000);
        } */
    },
}
</script>

<style>
#particle-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
}

.particle {
    border-radius: 50%;
    z-index: -42;
    position: absolute;
    width: 5px;
    height: 5px;
    opacity: 1;
    transition: .2s;
}

</style>