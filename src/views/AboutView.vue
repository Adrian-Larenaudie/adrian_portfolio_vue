<template>

    <div class="main_content_block_about">
        <h1 class="main_content_about_title">Quelques <span :style="{color: getCurrentTheme.word}">mots</span></h1>
        <div class="main_content_about_block_text">
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
    <!-- menu de la page home -->
    <HomeMenu />

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
}
</script>
