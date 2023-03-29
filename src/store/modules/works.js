export default {
    namespaced: true,
    state:() => ({
        works: [
            {
                name: 'Jormungand snake game',
                description: 'Il s\'agit d\'un jeu Snake codé à ma façon selon les règles du jeu original.',
                techno: ['HTML', 'CSS', 'JS'],
                links: {
                    github: 'https://github.com/Adrian-Larenaudie/jormungand_snake_game',
                    website: 'https://jormungand-game-adrian.surge.sh/',
                }
            },
            {
                name: 'Tetris game',
                description: 'Il s\'agit d\'un jeu Tetris codé à ma façon inspiré des règles du jeu original.',
                techno: ['HTML', 'CSS', 'JS'],
                links: {
                    github: 'https://github.com/Adrian-Larenaudie/home_made_tetris',
                    website: 'https://tetris-game-adrian.surge.sh',
                }
            },
            {
                name: 'Portfolio Adrian',
                description: 'Le site sur lequel vous vous trouvé, déployé rapidemment sur surge réalisé en vuejs.',
                techno: ['VUEJS'],
                links: {
                    github: 'https://github.com/Adrian-Larenaudie/adrian_portfolio_vue',
                    website: '',
                }
            },
            {
                name: 'Pixel art canvas',
                description: 'Inspiré par la pixel war et dans le but de pratiquer vuejs, j\'ai réaliser mon propre canvas pour vous permettre de réaliser de magnifique création en pixel art.',
                techno: ['VUEJS'],
                links: {
                    github: 'https://github.com/Adrian-Larenaudie/pixel_art_canvas',
                    website: 'https://pixelartcanvas-adrian.surge.sh',
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