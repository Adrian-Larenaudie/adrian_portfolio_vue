export default {
    namespaced: true,
    state:() => ({
        works: [
            {
                name: 'Art of Clowey',
                description: 'Site personnel pour l\'artiste Clowey. Un front office pour les visiteurs afin de découvrir le travail de l\'artiste et un backoffice réservé aux admins afin de piloter le contenu que propose l\'application.',
                techno: ['VUEJS', 'NODEJS', 'SQL'],
                links: {
                    github: 'https://github.com/Adrian-Larenaudie/drag_drop_puzzle',
                    website: '',
                }
            },
            {
                name: 'Jormungand snake game',
                description: 'Il s\'agit d\'un jeu Snake codé à ma façon en me basant sur les règles du jeu original.',
                techno: ['HTML', 'CSS', 'JS'],
                links: {
                    github: 'https://github.com/Adrian-Larenaudie/jormungand_snake_game',
                    website: 'https://jormungand-game-adrian.surge.sh/',
                }
            },
            {
                name: 'Tetris game',
                description: 'Il s\'agit d\'un jeu Tetris codé à ma façon en m\'inspirant des règles du jeu original.',
                techno: ['HTML', 'CSS', 'JS'],
                links: {
                    github: 'https://github.com/Adrian-Larenaudie/home_made_tetris',
                    website: 'https://tetris-game-adrian.surge.sh',
                }
            },
            {
                name: 'Portfolio Adrian',
                description: 'Le site sur lequel vous vous trouvez, déployé sur surge et réalisé en vuejs.',
                techno: ['VUEJS'],
                links: {
                    github: 'https://github.com/Adrian-Larenaudie/adrian_portfolio_vue',
                    website: '',
                }
            },
            {
                name: 'Pixel art canvas',
                description: 'Inspiré par la pixel war et dans le but de pratiquer vuejs, j\'ai réalisé mon propre canvas pour permettre à qui le souhaite de réaliser de magnifique dessin en pixel art.',
                techno: ['VUEJS'],
                links: {
                    github: 'https://github.com/Adrian-Larenaudie/pixel_art_canvas',
                    website: 'https://pixelartcanvas-adrian.surge.sh',
                }
            },
            {
                name: 'Pixel draw API',
                description: 'API destinée à servir de gestionnaire de dessin en CRUD pour l\'application Pixel art canvas.',
                techno: ['NODEJS', 'SQL', 'EXPRESS'],
                links: {
                    github: 'https://github.com/Adrian-Larenaudie/pixel_draw_api_nodejs',
                    website: '',
                }
            },
            {
                name: 'Retro wave timer',
                description: 'Minuteur codé en JavaScript le tout dans un style retro wave avec une référence au cri de Whilelm.',
                techno: ['HTML', 'CSS', 'JS'],
                links: {
                    github: 'https://github.com/Adrian-Larenaudie/rw_timer_ft_wilhelm',
                    website: 'https://retro-wave-timer-wilhelm-cry.surge.sh',
                }
            },
            {
                name: 'Poke memory game',
                description: 'Jeu memory game sur le thème pokémon, plusieurs niveaux de difficulté pour tester ça mémoire.',
                techno: ['HTML', 'CSS', 'JS'],
                links: {
                    github: 'https://github.com/Adrian-Larenaudie/poke_memory_card',
                    website: 'https://poke-memory-game-adrian.surge.sh',
                }
            },
            {
                name: 'BCode SW challenge',
                description: 'Réalisation d\'un challenge d\'intégration proposé par le youtuber Benjamin Code.',
                techno: ['HTML', 'CSS', 'JS'],
                links: {
                    github: 'https://github.com/Adrian-Larenaudie/sw_challenge_bcode',
                    website: 'https://sw-challenge-bc-adrian.surge.sh',
                }
            },
            {
                name: 'Puzzle drag & drop',
                description: 'Réalisation d\'un puzzle à partir d\'une image chargée dans le navigateur. Utilisation du drag & drop pour reconstituer l\'image.',
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