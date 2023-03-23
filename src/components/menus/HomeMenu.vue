<template>
    <nav class="home_navigation">
        <router-link @mouseover="onMouseOver" @mouseleave="onMouseLeave" :style="{color: getCurrentTheme.text, textDecoration: $route.name === 'home' ? 'underline':''}" class="link home_link" to="/">accueil</router-link>
        <router-link @mouseover="onMouseOver" @mouseleave="onMouseLeave" :style="{color: getCurrentTheme.text, textDecoration: $route.name === 'works' ? 'underline':''}" class="link home_link" to="/works">réalisations</router-link>
        <router-link @mouseover="onMouseOver" @mouseleave="onMouseLeave" :style="{color: getCurrentTheme.text, textDecoration: $route.name === 'about' ? 'underline':''}" class="link home_link" to="/about">à propos</router-link>
    </nav>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'HomeMenu',
    computed: {
        ...mapGetters('utils', ['getCurrentTheme']),
    },
    methods: {
        onMouseLeave(event) {
            event.target.style.color = this.getCurrentTheme.text;
        },
        onMouseOver(event) {
            event.target.style.color = this.getCurrentTheme.word;
        }
    },
}
</script>