<template>

    <div class="main_content_block_works">
        <h1>Mes réalisations</h1>
        <div class="main_content_works_card_displayer">

            <div class="works_card">

                <header class="work_card_header">
                    <h2>Titre du projet</h2>
                    <div class="works_card_links_area">
                        <div>github</div>
                        <div>lien site</div>       
                    </div>
                </header>

                <main class="work_card_main_content">
                    <p class="work_card_description">texte descriptif court du projet</p>
                </main>

                <footer class="work_card_footer">
                    <div class="work_card_techno_list">
                        liste des techno du projet
                    </div>
                </footer>

            </div>

        </div>
    </div>

</template>

<script>

export default {
    name: 'WorksView',
}
</script>