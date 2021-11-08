import { createStore } from 'vuex'

export default createStore({
  state: {
    products: [
      {name: 'Красавчик', desc: 'Lorem ipsum.', reit: 4, img: '01.jpg', id: '001', price: 10, t: 'RUB'},
      {name: 'Предложение дня', desc: 'Lorem ipsum.', reit: 5, img: '08.jpg', id: '008', price: 12, t: 'RUB'},
      {name: 'Распродажа голубоглазых', desc: 'Lorem ipsum.', reit: 4, img: '03.jpg', id: '003', price: 14, t: 'RUB'},
      {name: 'Популярный кот', desc: 'Lorem ipsum.', reit: 5, img: '04.jpg', id: '004', price: 15, t: 'RUB'},
      {name: 'Мелкий опт', desc: 'Lorem ipsum.', reit: 4, img: '05.jpg', id: '005', price: 17, t: 'RUB'},
      {name: 'Мяу', desc: 'Lorem ipsum.', reit: 4, img: '07.jpg', id: '007', price: 16, t: 'RUB'},
      {name: 'Спецпредложение', desc: 'Lorem ipsum.', reit: 5, img: '09.jpg', id: '009', price: 22, t: 'RUB'},
      {name: 'Летний кот', desc: 'Lorem ipsum.', reit: 5, img: '06.jpg', id: '006', price: 11, t: 'RUB'},
    ],
    sendData: sendData ? sendData : false,
    inBasket: {},
    payResult: false,
    isBlur: false,
    showBasket: false,
    showLightbox: false,
    modalShow: false,
    prodDetail: '',
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
      let padding = state.modalShow ? '17px' : '0';
      document.querySelector('body').style['overflow-y'] = overflow;
      document.querySelector('body').style['padding-right'] = padding;
    },
    SHOW_PRODUCT_DETAIL: (state, n) => {
      state.prodDetail = n;
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
    PAY_RESULT: (state, n) => {
      state.payResult = n;
    },
    SHOW_LIGHTBOX: (state) => {
      state.showLightbox = !state.showLightbox;
    }
  },
  actions: {
    act_SHOW_BASKET: (context) => {
      context.commit('SHOW_MODAL');
      context.commit('SHOW_BASKET');
    },
    act_SHOW_LIGHTBOX: (context, n) => {
      context.commit('SHOW_MODAL');
      context.commit('SHOW_LIGHTBOX');
      context.commit('SHOW_PRODUCT_DETAIL', n);
    }
  },
})
