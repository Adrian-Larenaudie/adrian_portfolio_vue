<template>
    <nav class="home_navigation">
        <router-link id="home" @mouseover="onMouseOver" @mouseleave="onMouseLeave" :style="{color: $route.name === 'home' ? getCurrentTheme.word : getCurrentTheme.text}" class="link home_link" to="/">accueil</router-link>
        <router-link id="works" @mouseover="onMouseOver" @mouseleave="onMouseLeave" :style="{color: $route.name === 'works' ? getCurrentTheme.word : getCurrentTheme.text}" class="link home_link" to="/works">réalisations</router-link>
        <router-link id="about" @mouseover="onMouseOver" @mouseleave="onMouseLeave" :style="{color: $route.name === 'about' ? getCurrentTheme.word : getCurrentTheme.text}" class="link home_link" to="/about">à propos</router-link>
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
            if(event.target.id != this.$route.name)
                event.target.style.color = this.getCurrentTheme.text;
        },
        onMouseOver(event) {
            if(event.target.id != this.$route.name)
                event.target.style.color = this.getCurrentTheme.word;
        }
    },
}
</script>