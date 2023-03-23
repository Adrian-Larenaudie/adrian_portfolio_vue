import { createStore } from 'vuex';

import utils from './modules/utils.js';

export default createStore({
  modules: {
    utils,
  },
});