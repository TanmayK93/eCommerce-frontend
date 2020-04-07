import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);
Vue.use(axios);

export default new Vuex.Store({
  state: {
    _loginstate: "false",

    _cartItemCount: 0,

    _cartTotal: 0,
    _forSale: [],
    /* 
        _forSale: [
            { id: 1, 
                name: 'Elon Musk:Quest for a Fantastic Future', 
                description :'Mr. Vance provides the first inside look into the extraordinary life and times of Silicon Valley\'s most audacious entrepreneur.',
                image: 'https://images-na.ssl-images-amazon.com/images/I/5112YFsXIJL._SX330_BO1,204,203,200_.jpg', 
                price: 18.84 ,
                rating: 1,
                sale : "yes",
                discount : "20",
                shippingCost : 9.99,
            },  
            { id: 2, 
                name: 'The Power of Now: A Guide to Spiritual Enlightenment', 
                description : 'The Power of Now is one of the best books to come along in years. Every sentence rings with truth and power.',
                image: 'https://images-na.ssl-images-amazon.com/images/I/41WIbflfG2L.jpg', 
                price: 15.74 ,
                rating: 2,
                sale : "no",
                discount : "30",
                shippingCost : 6.99,
            },
            { id: 3, 
                name: 'The Alchemist: The Mystical Story of Santiago', 
                description : 'It’s a brilliant, magical, life-changing book that continues to blow my mind with its lessons.',
                image: 'https://images-na.ssl-images-amazon.com/images/I/516c6gUQLaL.jpg', 
                price: 13.13,
                rating: 3,
                sale : "yes",
                discount : "40",
                shippingCost : 0,
            },
            { id: 4, 
                name: 'Taking the Leap: Freeing Ourselves from Old Habits and Fears', 
                description : 'This book gives us the insights and practices we can immediately put to use in our lives to awaken these essential qualities.',
                image: 'https://images-na.ssl-images-amazon.com/images/I/91uYl0dCOoL.jpg', 
                price: 15.84 ,
                rating: 4,
                sale : "yes",
                discount : "50",
                shippingCost : 4.99,

            },
            { id: 5, 
                name: 'The Subtle Art of Not Giving a F*ck', 
                description : 'In this generation-defining self-help guide, a superstar blogger cuts through the crap to show us how to stop trying to be "positive" all the time so that we can truly become better, happier people.',
                image: 'https://images-na.ssl-images-amazon.com/images/I/81AM7ZgkeHL.jpg', 
                price: 13.19 ,
                rating: 5,
                sale : "no",
                discount : "50",
                shippingCost : 7.99,

            },
            { id: 6, 
                name: 'The 7 Habits of Highly Effective People: Powerful Lessons in Personal Change', 
                description : 'One of the most inspiring and impactful books ever written, The 7 Habits of Highly Effective People has captivated readers for 25 years. It has transformed the lives of Presidents and CEOs, educators and parents— in short, millions of people of all ages and occupations.',
                image: 'https://images-na.ssl-images-amazon.com/images/I/81jRm4KF2fL.jpg', 
                price: 15.20 ,
                rating: 5,
                sale : "yes",
                discount : "70",
                shippingCost : 0,

            },

        ], */

    _userDetail: [],
    /*    username: 'User1',
                email: 'hp@gmail.com',
                phone: '5127763343',
                password: 'admin',
                shippingAddresses:[
                    {
                        id : 1,
                        personName : "User1",
                        address1 : "420 Linden Drive",
                        address2 : "Unit 16",
                        city: "Cambridge",  
                        region: "Ontario",
                        country: "Canada",
                        postalCode: "N3H 0C6",
                        phone: "226 989 4412",
                        default: true,  
                    },

                    {
                        id : 2,
                        personName : "Bhavin Pethani",
                        address1 : "420 Linden Drive",
                        address2 : "Unit 16",
                        city: "Cambridge",  
                        region: "Ontario",
                        country: "Canada",
                        postalCode: "N3H 0C6",
                        phone: "226 989 4412",
                        default: true,  
                    },


                ] */
    Orders: [],
    /* 
         Orders:[
                {
                    orderId : 2019011001,
                    username: 'User1',
                    date: "February 10, 2019",
                    products:[
                        {
                            productId : 1,
                            name: "Elon Musk:Quest for a Fantastic Future",
                            image: 'https://images-na.ssl-images-amazon.com/images/I/5112YFsXIJL._SX330_BO1,204,203,200_.jpg', 
                            price: 18.84,
                            quantity : 45,
                        },
                        {
                            productId : 3,
                            name: "The Alchemist: The Mystical Story of Santiago",
                            image: 'https://images-na.ssl-images-amazon.com/images/I/516c6gUQLaL.jpg', 
                            price: 13.13,
                            quantity : 23,
                        }
                    ],
                    total: 50.81,
                    tax: 6.61,
                    finalAmount: 57.42,
                },

                {
                    orderId : 2019011002,
                    username: 'User2',
                    date: "February 10, 2019",
                    products:[
                        {
                            productId : 1,
                            name: "Elon Musk:Quest for a Fantastic Future",
                            image: 'https://images-na.ssl-images-amazon.com/images/I/5112YFsXIJL._SX330_BO1,204,203,200_.jpg', 
                            price: 18.84,
                            quantity : 87,
                        },
                        {
                            productId : 3,
                            name: "The Alchemist: The Mystical Story of Santiago",
                            image: 'https://images-na.ssl-images-amazon.com/images/I/516c6gUQLaL.jpg', 
                            price: 13.13,
                            quantity : 110,
                        }
                    ],
                    total: 50.81,
                    tax: 6.61,
                    finalAmount: 57.42,
                },

         ], */

    _inCart: [],

    user: {
      isLoggedIn: false,
      isSignedUp: false,
    },

    get orders() {
      return this.Orders;
    },

    get shippingAddresses() {
      return this._userDetail.shippingAddresses;
    },

    get userDetail() {
      return this._userDetail;
    },

    set userDetail(value) {
      this._userDetail = value;
    },

    get inCart() {
      return this._inCart;
    },
    set inCart(value) {
      this._inCart = value;
    },

    get cartTotal() {
      return this._cartTotal;
    },
    set cartTotal(value) {
      this._cartTotal = value;
    },

    get cartItemCount() {
      return this._cartItemCount;
    },
    set cartItemCount(value) {
      this._cartItemCount = value;
    },

    get forSale() {
      return this._forSale;
    },
    set forSale(value) {
      this._forSale = value;
    },

    get loginstate() {
      return this._loginstate;
    },

    set loginstate(value) {
      this._loginstate = value;
    },
  },

  getters: {
    // ...
    getforSaleById: (state) => (id) => {
      return state.forSale.find((forSale) => forSale.id === id);
    },
    //
    isUserLoggedIn: (state) => state.user.isLoggedIn,

    //
    getcartTotal: (state) => {
      let total = 0;
      state._inCart.map((item) => {
        total += item.price * item.quantity;
      });
      return total;
    },
    //

    //
    getOrderTotal: (state) => {
      let total = 0;
      state.Orders.map((item) => {
        total += item.price * item.quantity;
      });
      return total;
    },
    //
  },

  actions: {
    addToCart(context, cartProduct) {
      context.commit("ADD_TO_CART", cartProduct);
    },
    changeCartQnt(context, cartProduct) {
      context.commit("CHANGE_CART_QNT", cartProduct);
    },
    deleteCartItem(context, itemData) {
      context.commit("DELETE_CART_ITEM", itemData);
    },
    login(context) {
      context.commit("LOGIN");
    },
    logout(context) {
      context.commit("LOGOUT");
    },
  },

  mutations: {
    ADD_TO_CART(state, cartProduct) {
      let found = state.inCart.find((product) => product.id == cartProduct.id);

      if (found) {
        found.quantity += cartProduct.quantity;
      } else {
        state.inCart.push(cartProduct);
      }

      state.cartItemCount += cartProduct.quantity;
      state._cartTotal += cartProduct.quantity * cartProduct.price;
    },

    CHANGE_CART_QNT(state, cartProduct) {
      let found = state.inCart.find((product) => product.id == cartProduct.id);

      if (found) {
        state.cartItemCount -= found.quantity;
        state._cartTotal -= found.quantity * found.price;

        state.cartItemCount += cartProduct.quantity;
        state._cartTotal += cartProduct.quantity * cartProduct.price;

        found.quantity = cartProduct.quantity;
      }
    },

    DELETE_CART_ITEM(state, itemData) {
      let found = state.inCart.find((product) => product.id == itemData.id);

      if (found) {
        state.cartItemCount -= found.quantity;
        state._cartTotal -= found.quantity * found.price;

        state.inCart.splice(itemData.index, 1);
      }
    },

    LOGIN(state) {
      state._loginstate = "true";
    },

    LOGOUT(state) {
      state._loginstate = "false";
    },

    isUserLoggedIn: (state, isUserLoggedIn) => {
      state.user.isLoggedIn = isUserLoggedIn;
    },
  },
});
