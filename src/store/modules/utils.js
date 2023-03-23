export default {
    namespaced: true,
    state:() => ({
        currentTheme: localStorage.getItem('theme') != undefined ? localStorage.getItem('theme') : 'retroTheme',
        retroTheme: {
            text: '#fef265',
            linkHover: '#d1c001',
            background: '#282828',
            backgroundText: '#555555ce',
            word: '#66ff66',
        },
        oceanicTheme: {
            text: '#f8c291',
            linkHover: '#fea959',
            background: '#0a3d62',
            backgroundText: '#0e5f99cf',
            word: '#fff',
        },
        cityTheme: {
            text: '#2f3640',
            linkHover: '#0d0f13',
            background: '#dcdde1',
            backgroundText: '#eef0f5d5',
            word: '#b71540',   
        },
        isMenuMobileOpen: false,
    }), 
    
    getters: {
        getIsMenuMobileOpen: (state) => {
            return state.isMenuMobileOpen;
        },
        getCurrentThemeName: (state) => {
            return state.currentTheme;
        },
        getCurrentTheme: (state) => {
            return state[state.currentTheme];
        },
        getRetroTheme: (state) => {
            return state.retroTheme;
        },
        getOceanicTheme: (state) => {
            return state.oceanicTheme;
        },
        getCityTheme: (state) => {
            return state.cityTheme;
        },
    },

    actions: {
       
    },
    
    mutations: {
        toggleIsMenuMobileOpen(state) {
            state.isMenuMobileOpen = ! state.isMenuMobileOpen;
        },
        changeThemeMutation(state, themeName) {
            localStorage.setItem('theme', themeName);
            state.currentTheme = themeName;
        },
    },
};