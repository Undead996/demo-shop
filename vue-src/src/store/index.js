import { createStore } from 'vuex'

export default createStore({
  state: {
    products: [
      {name: 'cat1', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam velit molestias delectus. Temporibus odio dolore nulla at perferendis! Voluptates, laborum.', img: 'cat1.jpeg', id: '001', price: 10, t: 'RUB'},
      {name: 'cat4', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam velit molestias delectus. Temporibus odio dolore nulla at perferendis! Voluptates, laborum.', img: 'cat4.gif', id: '002', price: 12, t: 'RUB'},
      {name: 'cat5', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam velit molestias delectus. Temporibus odio dolore nulla at perferendis! Voluptates, laborum.', img: 'cat5.jpg', id: '003', price: 14, t: 'RUB'},
      {name: 'cat6', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam velit molestias delectus. Temporibus odio dolore nulla at perferendis! Voluptates, laborum.', img: 'cat6.png', id: '004', price: 15, t: 'RUB'},
      {name: 'lis', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam velit molestias delectus. Temporibus odio dolore nulla at perferendis! Voluptates, laborum.', img: 'lis.jpg', id: '005', price: 17, t: 'RUB'},
    ],
    inBasket: {},
    isBlur: false,
    showBasket: false,
    modalShow: false,
  },
  getters: {
    get_TOTAL_SUMM: state => {
      let summ = 0;
      for ( let key in state.inBasket ) {
        summ += state.inBasket[key][0].price;
      }
      return summ;
    }
  },
  mutations: {
    SHOW_MODAL: (state) => {
      state.modalShow = !state.modalShow;
      state.isBlur = !state.isBlur;
      let overflow = state.modalShow ? 'hidden' : 'auto';
      document.querySelector('body').style['overflow-y'] = overflow;
    },
    ADD_TO_BASKET: (state, n) => {
      state.inBasket[n.id] = [n];
    },
    REMOVE_FROM_BASKET: (state, n) => {
      delete state.inBasket[n];
    },
    CLEAR_BASKET: (state) => {
      state.inBasket = {};
    },
    SHOW_BASKET: (state) => {
      state.showBasket = !state.showBasket;
    },
  },
  actions: {
    act_SHOW_BASKET: (context) => {
      context.commit('SHOW_MODAL');
      context.commit('SHOW_BASKET');
    }
  },
  modules: {
  }
})
