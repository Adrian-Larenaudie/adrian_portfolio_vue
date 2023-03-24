<template>
    <div @mousemove="onMouseMove" :style="{background: getCurrentTheme.backgroundGradient, background: getCurrentTheme.linearGradient/* backgroundColor: getCurrentTheme.background */, color: getCurrentTheme.text}" class="application" id="application">

        <ThemeSelector />

        <BackgroundWord />

        <!-- contenu principale de la page -->
        <main class="main_content_block">
            <RouterView/>
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
import { mapGetters } from 'vuex';

export default {
    name: 'LayoutView',
    components: {
        ThemeSelector,
        BackgroundWord,
        BurgerMenu,
        MobileMenu,
        MainFooter,
    },
    computed: {
        ...mapGetters('utils', ['getCurrentTheme']),
    },
    data() {
        return {
            lastMove: {x: 0, y: 0},
        };
    },
    methods: {
        onMouseMove(event) {
            console.log(this.lastMove);

            const x = event.clientX + 35;
            const y = event.clientY + 35;
            console.log(this.lastMove.x - (event.clientX + 35) );
            console.log(this.lastMove.y - (event.clientY + 35) );
            this.lastMove.x = event.clientX + 35;
            this.lastMove.y = event.clientY + 35;
            // on va appeler la fonction autant de fois qu'il y a de différence entre chaque valeur
            this.createParticle(x, y);
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
            }, 200);
            setTimeout(() => {
                particle.remove();
            }, 1000);
        }
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
    z-index: -42;
    position: absolute;
    width: 5px;
    height: 5px;
    opacity: 1;
    transition: .2s;
}

</style>