import { createStore } from 'vuex';

import utils from './modules/utils.js';
import works from './modules/works.js';

export default createStore({
  modules: {
    utils,
    works,
  },
});