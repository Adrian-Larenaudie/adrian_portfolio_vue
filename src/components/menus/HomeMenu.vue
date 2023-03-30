<template>
    <nav class="home_navigation">
        <router-link @click="onClick" id="home" @mouseover="onMouseOver" @mouseleave="onMouseLeave" :style="{color: $route.name === 'home' ? getCurrentTheme.word : getCurrentTheme.text}" class="link home_link" to="/">accueil</router-link>
        <router-link @click="onClick" id="works" @mouseover="onMouseOver" @mouseleave="onMouseLeave" :style="{color: $route.name === 'works' ? getCurrentTheme.word : getCurrentTheme.text}" class="link home_link" to="/works">réalisations</router-link>
        <router-link @click="onClick" id="about" @mouseover="onMouseOver" @mouseleave="onMouseLeave" :style="{color: $route.name === 'about' ? getCurrentTheme.word : getCurrentTheme.text}" class="link home_link" to="/about">à propos</router-link>
    </nav>
    <div :style="{backgroundColor: getCurrentTheme.text}" class="footer_segment navigation_segment"></div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
    name: 'HomeMenu',
    computed: {
        ...mapGetters('utils', ['getCurrentTheme']),
    },
    methods: {
        ...mapMutations('utils', ['setIsQucikLoadingToTrue', 'setIsQucikLoadingToFalse']),

        onMouseLeave(event) {
            if(event.target.id != this.$route.name)
                event.target.style.color = this.getCurrentTheme.text;
        },

        onMouseOver(event) {
            if(event.target.id != this.$route.name)
                event.target.style.color = this.getCurrentTheme.word;
        },

        onClick(event) {
            this.setIsQucikLoadingToTrue();
            setTimeout(() => {
                this.setIsQucikLoadingToFalse();
            }, 700);
        },

    },
}
</script>