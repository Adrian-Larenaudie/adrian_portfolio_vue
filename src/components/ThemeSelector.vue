<template>
    <!-- theme selector -->
    <div class="theme_selector_block">
        <p class="theme_selector_title">Theme</p>
        <p :style="{borderColor: getCurrentTheme.text, backgroundColor: getCurrentThemeName === 'retroTheme' ? getCurrentTheme.text : ''}" @click="onClick" id="retroTheme" :class="['theme_selector_box', 'retro_theme_switcher']"></p>
        <p :style="{borderColor: getCurrentTheme.text, backgroundColor: getCurrentThemeName === 'oceanicTheme' ? getCurrentTheme.text: ''}" @click="onClick" id="oceanicTheme" :class="['theme_selector_box', 'oceanic_theme_switcher']"></p>
        <p :style="{borderColor: getCurrentTheme.text, backgroundColor: getCurrentThemeName === 'cityTheme' ? getCurrentTheme.text: ''}" @click="onClick" id="cityTheme" :class="['theme_selector_box', 'city_theme_switcher']"></p>
    </div>
    <!-- theme selector -->
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';

export default {
    name: 'ThemmeSelector',
    computed: {
        ...mapGetters('utils', ['getCurrentThemeName', 'getCurrentTheme'])
    },
    methods: {
        ...mapMutations('utils', ['changeThemeMutation']),

        onClick(event) {
            this.changeThemeMutation(event.target.id);
            document.querySelectorAll('.social_network svg path').forEach(svg => {
               svg.style.fill = this.getCurrentTheme.text;
            });
            document.querySelectorAll('.work_card_links_area svg').forEach(svg => {
                svg.style.stroke = this.getCurrentTheme.text; 
            })
        }
    }
}
</script>