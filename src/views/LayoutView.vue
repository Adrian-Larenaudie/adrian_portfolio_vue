<template>
    <div :style="{backgroundColor: getCurrentTheme.background, color: getCurrentTheme.text}" class="application" id="application">

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
}
</script>