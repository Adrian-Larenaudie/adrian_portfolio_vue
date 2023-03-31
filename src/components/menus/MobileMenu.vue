<template>
    <!-- boite modale du menu mobile -->
    <div :style="{backgroundColor: getCurrentTheme.background}" class="menu_mobile" id="menu_mobile">
        <div :style="{color: getCurrentTheme.word}" class="menu_mobile_block_logo solo_word">
            al
        </div>
        <div :style="{backgroundColor: getCurrentTheme.text}" class="menu_mobile_segment"></div>
        <h1 class="menu_mobile_title">Menu</h1>
        <div :style="{backgroundColor: getCurrentTheme.text}" class="menu_mobile_segment"></div>
        <nav class="navigation_mobile">
            <router-link @click="onClick" :style="{color: getCurrentTheme.text}" class="navigation_mobile_link mobile_link link" to="/">accueil</router-link>
            <router-link @click="onClick" :style="{color: getCurrentTheme.text}" class="navigation_mobile_link mobile_link link" to="/works">réalisations</router-link>
            <router-link @click="onClick" :style="{color: getCurrentTheme.text}" class="navigation_mobile_link mobile_link link" to="/about">à propos</router-link>
        </nav>
    </div>
    <!-- boite modale du menu mobile -->
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
    name: 'MobileMenu',
    computed: {
        ...mapGetters('utils', ['getCurrentTheme']),
    }, 
    methods: {
        ...mapMutations('utils', ['toggleIsMenuMobileOpen', 'setIsQucikLoadingToTrue', 'setIsQucikLoadingToFalse']),

        onClick(event) {
            this.setIsQucikLoadingToTrue();
            setTimeout(() => {
               this.setIsQucikLoadingToFalse();
            }, 700);
            const menuBurgerTag = document.getElementById('burger_menu');
            const mobileMenuTag = document.getElementById('menu_mobile');
            const bodyTag = document.querySelector('.application');
            this.toggleIsMenuMobileOpen();
            
            mobileMenuTag.classList.remove('translateFromTop');
            mobileMenuTag.classList.add('translateToTop');
            menuBurgerTag.checked = false;
            setTimeout(() => {
                mobileMenuTag.style.display = 'none';
                bodyTag.style.overflow = 'visible';
                bodyTag.style.position = 'unset';  
            }, 150);
        },
    }
}
</script>