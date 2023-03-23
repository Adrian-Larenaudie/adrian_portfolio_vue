<template>
    <nav class="home_navigation">
        <router-link @mouseover="onMouseOver" @mouseleave="onMouseLeave" :style="{color: getCurrentTheme.text}" class="link home_link" to="/">accueil</router-link>
        <router-link @mouseover="onMouseOver" @mouseleave="onMouseLeave" :style="{color: getCurrentTheme.text}" class="link home_link" to="/works">réalisations</router-link>
        <router-link @mouseover="onMouseOver" @mouseleave="onMouseLeave" :style="{color: getCurrentTheme.text}" class="link home_link" to="/about">à propos</router-link>
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
            event.target.style.color = this.getCurrentTheme.linkHover;
        }
    },
}
</script>