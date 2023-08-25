export default {
    namespaced: true,
    state:() => ({
        works: [
            {
                name: 'Art of Clowey',
                description: 'Création d\'un site vitrine dédié à l\'artiste Clowey, avec une interface frontale permettant aux visiteurs de découvrir le travail de l\'artiste, ainsi qu\'un espace d\'administration en back-office réservé aux administrateurs pour gérer le contenu de l\'application.',
                techno: ['VUEJS', 'NODEJS', 'SQL'],
                links: {
                    github: '',
                    website: 'https://art_of_clowey.surge.sh/',
                }
            },
            {
                name: 'Jormungand snake game',
                description: 'Réalisation d\'un jeu Snake fidèle aux règles originales, sans recourir à du code existant.',
                techno: ['HTML', 'CSS', 'JS'],
                links: {
                    github: 'https://github.com/Adrian-Larenaudie/jormungand_snake_game',
                    website: 'https://jormungand-game-adrian.surge.sh/',
                }
            },
            {
                name: 'Tetris game',
                description: 'Réalisation d\'un jeu Tetris fidèle aux règles originales, sans recourir à du code existant.',
                techno: ['HTML', 'CSS', 'JS'],
                links: {
                    github: 'https://github.com/Adrian-Larenaudie/home_made_tetris',
                    website: 'https://tetris-game-adrian.surge.sh',
                }
            },
            {
                name: 'Portfolio Adrian',
                description: 'Le site sur lequel vous vous trouvez, réalisé en vuejs.',
                techno: ['VUEJS'],
                links: {
                    github: 'https://github.com/Adrian-Larenaudie/adrian_portfolio_vue',
                    website: '',
                }
            },
            {
                name: 'Pixel art canvas',
                description: '"En m\'inspirant de la Pixels War et dans le but de perfectionner mes compétences en Vue.js, j\'ai créé ma propre toile (canvas) pour offrir à ceux qui le souhaitent l\'opportunité de s\'initier au pixel art.',
                techno: ['VUEJS'],
                links: {
                    github: 'https://github.com/Adrian-Larenaudie/pixel_art_canvas',
                    website: 'https://pixelartcanvas-adrian.surge.sh',
                }
            },
/*             {
                name: 'Pixel draw API',
                description: 'API destinée à servir de gestionnaire de dessin en CRUD pour l\'application Pixel art canvas.',
                techno: ['NODEJS', 'SQL', 'EXPRESS'],
                links: {
                    github: 'https://github.com/Adrian-Larenaudie/pixel_draw_api_nodejs',
                    website: '',
                }
            }, */
            {
                name: 'Timer retro',
                description: 'Minuteur codé en JavaScript, le tout dans un style retro wave. Vous apprécierez (ou pas) la référence sonore au cri de Whilelm.',
                techno: ['HTML', 'CSS', 'JS'],
                links: {
                    github: 'https://github.com/Adrian-Larenaudie/rw_timer_ft_wilhelm',
                    website: 'https://retro-wave-timer-wilhelm-cry.surge.sh',
                }
            },
            {
                name: 'Poke memory game',
                description: 'Jeu de mémoire sur le thème Pokémon, avec plusieurs niveaux de difficulté pour mettre sa mémoire à l\'épreuve.',
                techno: ['HTML', 'CSS', 'JS'],
                links: {
                    github: 'https://github.com/Adrian-Larenaudie/poke_memory_card',
                    website: 'https://poke-memory-game-adrian.surge.sh',
                }
            },
            {
                name: 'BCode SW challenge',
                description: 'Réalisation d\'un défi d\'intégration proposé par le YouTuber Benjamin Code. Sur le thème de Star Wars',
                techno: ['HTML', 'CSS', 'JS'],
                links: {
                    github: 'https://github.com/Adrian-Larenaudie/sw_challenge_bcode',
                    website: 'https://sw-challenge-bc-adrian.surge.sh',
                }
            },
            {
                name: 'Puzzle drag & drop',
                description: 'Réalisation d\'un puzzle à partir d\'une image chargée dans le navigateur, avec utilisation du glisser-déposer pour reconstituer l\'image.',
                techno: ['HTML', 'CSS', 'JS'],
                links: {
                    github: 'https://github.com/Adrian-Larenaudie/drag_drop_puzzle',
                    website: '',
                }
            },
        ],
    }), 
    
    getters: {
        getWorks: (state) => {
            return state.works;
        },
    },

    actions: {
       
    },
    
    mutations: {

    },
};