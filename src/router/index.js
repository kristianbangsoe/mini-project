import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/views/HomePage'
import BrandPage from '@/views/BrandPage'
import ProductPage from '@/views/ProductPage'
import SignupPage from '@/views/SignupPage'
import fontawesomefree from '@fortawesome/fontawesome-free/css/all.min.css'
import VeeValidate from 'vee-validate'


Vue.use(VeeValidate)
Vue.use(fontawesomefree)
Vue.use(Router)


export default new Router({
  routes: [
    {path: '/', name: 'HomePage', component: HomePage},
    {path: '/brandpage', name: 'brand', component: BrandPage},
    {path: '/product/:id', name: 'product', component: ProductPage},
    {path: '/signuppage', name: 'signup', component: SignupPage}
  ]
})
