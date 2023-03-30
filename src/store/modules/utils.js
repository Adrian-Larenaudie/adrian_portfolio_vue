export default {
    namespaced: true,
    state:() => ({
        isQuickLoading: true,
        currentTheme: localStorage.getItem('theme') != undefined ? localStorage.getItem('theme') : 'retroTheme',
        retroTheme: {
            text: '#fef265',
            linkHover: '#d1c001',
            background: '#282828',
            backgroundText: '#555555ce',
            word: '#66ff66',
            backgroundGradient: 'rgb(40,40,40)',
            linearGradient: 'linear-gradient(315deg, rgba(40,40,40,1) 0%, rgba(42,42,42,1) 70%, rgba(52,52,52,1) 80%, rgba(59,59,59,1) 90%, rgba(64,64,64,1) 100%)',
        },
        oceanicTheme: {
            text: '#f8c291',
            linkHover: '#fea959',
            background: '#0a3d62',
            backgroundText: '#0e5f99cf',
            word: '#fff', 
            backgroundGradient: 'rgb(12,67,107)',
            linearGradient: 'linear-gradient(315deg, rgba(12,67,107,1) 0%, rgba(13,70,111,1) 85%, rgba(16,76,119,1) 90%, rgba(18,82,129,1) 95%, rgba(26,100,152,1) 100%)',
        },
        cityTheme: {
            text: '#2f3640',
            linkHover: '#0d0f13',
            background: '#dcdde1',
            backgroundText: '#bfc0c2',
            word: '#b71540',   
            backgroundGradient: 'rgb(220,221,225)',
            linearGradient: 'linear-gradient(315deg, rgba(220,221,225,1) 0%, rgba(232,232,236,1) 85%, rgba(226,227,231,1) 90%, rgba(235,236,241,1) 95%, rgba(243,244,246,1) 100%)',
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
        getIsQuickLoading: (state) => {
            return state.isQuickLoading;
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
        setIsQucikLoadingToFalse(state) {
            state.isQuickLoading = false;
        },
        setIsQucikLoadingToTrue(state) {
            state.isQuickLoading = true;
        },
    },
};