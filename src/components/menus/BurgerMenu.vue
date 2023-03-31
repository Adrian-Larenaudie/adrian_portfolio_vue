<template>
    <!-- menu burger -->
    <div class="burger_menu_openner_block">
        <div class="burger_menu_openner">
            <input @click="onClick" class="menu_hamburger" type="checkbox" id="burger_menu">
            <label for="burger_menu"><span :style="{backgroundColor: getCurrentTheme.text}" class="burger_span"></span></label>
        </div>
    </div>
    <!-- menu burger -->
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
    name: 'BurgerMenu',
    computed: {
        ...mapGetters('utils', ['getCurrentTheme', 'getIsMenuMobileOpen']),
    },
    methods: {
        ...mapMutations('utils', ['toggleIsMenuMobileOpen']),

        onClick(event) {
            const mobileMenuTag = document.getElementById('menu_mobile');
            const bodyTag = document.querySelector('.application');

            this.toggleIsMenuMobileOpen();

            if(this.getIsMenuMobileOpen) {
                mobileMenuTag.classList.remove('translateToTop');
                mobileMenuTag.classList.add('translateFromTop');
                mobileMenuTag.style.display = 'flex';
                bodyTag.style.overflow = 'hidden';
                bodyTag.style.width = '100%'
                bodyTag.style.position = 'fixed';
            } else {
                mobileMenuTag.classList.remove('translateFromTop');
                mobileMenuTag.classList.add('translateToTop');
                setTimeout(() => {
                    mobileMenuTag.style.display = 'none';
                    bodyTag.style.overflow = 'visible';
                    bodyTag.style.position = 'unset';  
                }, 150);
            }
        },
    }
}
</script>