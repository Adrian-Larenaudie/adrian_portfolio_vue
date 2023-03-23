<template>
    <!-- background word -->
    <p :style="{color: getCurrentTheme.backgroundText}" class="background_word">console.log('Hello World!')</p>
    <!-- background word -->
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'BackgroundWord',
    computed: {
        ...mapGetters('utils', ['getCurrentTheme']),
    },
}
</script>