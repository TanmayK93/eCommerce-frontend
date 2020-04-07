import Vue from 'vue';
import Router from 'vue-router';


import Home from '@/components/Home';
import ProductDetail from '@/components/ProductDetail';
import Login from '@/components/Login';
import Cart from '@/components/Cart';
import CartItem from '@/components/CartItem';
import Profile from '@/components/Profile';
import MyOrders from '@/components/MyOrders';
import Register from '@/components/Register';
import Checkout from '@/components/Checkout';
import CheckoutItem from '@/components/CheckoutItem';
import CommentItem from '@/components/CommentItem';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', component: Home, name: 'Home' },
    { path: '/productdetail/:id', component: ProductDetail, name: 'ProductDetail' },
    { path: '/login', component: Login, name: 'Login' },
    { path: '/cart', component: Cart, name: 'Cart' },
    { path: '/cartitem', component: CartItem, name: 'CartItem' },
    { path: '/profile', component: Profile, name: 'Profile' },
    { path: '/myorders', component: MyOrders, name: 'MyOrders' },
    { path: '/register', component: Register, name: 'Register' },
    { path: '/checkout', component: Checkout, name: 'Checkout' },
    { path: '/checkoutitem', component: CheckoutItem, name: 'CheckoutItem' },
    { path: '/commentitem', component: CommentItem, name: 'CommentItem' },

  ],
});
