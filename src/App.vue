<template>
  <div id="app">
    <header id="header">
      <nav class="nav top-nav bg-dark">
        <div class="container-s d-flex">
          <ul class="dropdown pt-1">
            <li>
              Currency : DKK <i class="fas fa-angle-down"></i>
              <ul>
                <li class="active"><a href="#">DKK</a></li>
                <li><a href="#">EU</a></li>
                <li><a href="#">SK</a></li>
              </ul>
            </li>
          </ul>
          <div class="ml-auto">
            <div class="cart bg-cyan"  v-bind:class="{ active: !isActive }">

              <div class="text-center" v-on:click="myFilter">
                <i class="fas fa-shopping-cart"></i> {{ (productQuantity) ? '&nbsp;' + productQuantity : 'Empty' }}
              </div>
              <div class="cart-list">
                <div v-for="(product, index) in products" :key="product.productId" class=" list-item">
                  <div class="cart-image mr-1" v-bind:style="{ backgroundImage: 'url(' + product.productImage + ')' }"></div>
                  <div class="cart-container">
                    <button class="delete-btn" v-on:click.prevent="deleteObject(index)" ><i class="fas fa-times"></i></button>
                    <p class="cart-name">{{ product.productName }}</p>
                    <div class="">
                      <p class="cart-price">{{ product.price }} DKK</p>
                      <div class="d-flex mt-1">
                        <button min="0" v-on:click="product.quantity += 1" class="quantity-btn"><i class="fas fa-plus"></i></button>
                        <p class="cart-quantity"><strong>{{ product.quantity < 0 ? 0 : product.quantity }}</strong></p>
                        <button v-on:click="distract(product.productId)" class="quantity-btn "><i class="fas fa-minus"></i></button>
                      </div>

                    </div>
                  </div>
                </div>
                <div class="total d-flex bg-white p-1-5">
                  Total <div class="ml-auto">
                    <strong class="">{{ total }} DKK</strong>
                  </div>
                </div>
                <div class="total d-flex jf-center bg-cyan">
                    <p class="py-1">GO TO PAYMENT <i class="ml-1 fas fa-arrow-right"></i></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <nav class="nav buttom-nav py-2">
        <div class="container d-flex">
          <div class="navbar-brand  mt-1">
            <router-link class="nav-link" to="/"><img src="./assets/images/logo/logo.svg" alt=""></router-link>
          </div>
          <ul class="navbar-nav my-0 ml-auto">
            <li class="nav-item">

              <router-link class="nav-link" to="/"><i class="fas fa-angle-down"></i>Men's</router-link>
              <div class="sub-container">
                <div class="sub-cat">
                  <div class="d-flex">
                    <div class="sub-cat__sub-item">
                      <p class="uppercase">Casual</p>
                      <ul>
                        <li><a href="#">Jackets</a></li>
                        <li><a href="#">Hoodies & Sweatshirts</a></li>
                        <li><a href="#">Polo Shirts</a></li>
                        <li><a href="#">Sportswear</a></li>
                        <li><a href="#">Trousers & Chinos</a></li>
                        <li><a href="#">T-Shirts</a></li>
                      </ul>
                    </div>
                    <div class="sub-cat__sub-item">
                      <p class="uppercase">Formal</p>
                      <ul>
                        <li><a href="#">Jackets</a></li>
                        <li><a href="#">Shirts</a></li>
                        <li><a href="#">Suits</a></li>
                        <li><a href="#">Trousers</a></li>
                      </ul>
                    </div>
                  </div>
                  <div class="shop-banner" v-bind:style="{ backgroundImage: 'url(' + navBanner + ')' }">
                    <a href="#"></a>
                  </div>
                </div>
              </div>
            </li>
            <li class="nav-item active">
              <router-link class="nav-link" to="/brandpage">Women's</router-link>
            </li>
            <li class="nav-item active">
              <router-link class="nav-link" to="/brandpage">The brand</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/productpage">Local Stories</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/signuppage">Lookbook</router-link>
            </li>
            <li><form action="index.html" class="search" method="post">
              <input type="text" name="search" placeholder="Search..">
              <i class="fas fa-search"></i>
            </form></li>
          </ul>
        </div>
      </nav>
    </header>

    <section class="main-view container-fluid">
        <router-view/>
    </section>
    <footer class="bg-light py-5 mt-5">
      <div class="container-s">
        <div class="grid-container">
          <div class="">
            <h2>Information</h2>
            <ul class="ml-0">
              <li><a href="#">The brand</a></li>
              <li><a href="#">Local stores</a></li>
              <li><a href="#">Customer service</a></li>
              <li><a href="#">Privacy & cookies</a></li>
              <li><a href="#">Site map</a></li>
            </ul>
          </div>
          <div class="">
            <h2>Why buy form us</h2>
            <ul class="ml-0">
              <li><a href="#">Shipping & returns</a></li>
              <li><a href="#">Secure shopping</a></li>
              <li><a href="#">Testimonials</a></li>
              <li><a href="#">Award winning</a></li>
              <li><a href="#">Ethical trading</a></li>
            </ul>
          </div>
          <div class="">
            <h2>Your account</h2>
            <ul class="ml-0">
              <li><a href="#">Sign in</a></li>
              <li><a href="#">Register</a></li>
              <li><a href="#">View cart</a></li>
              <li><a href="#">View your lookbook</a></li>
              <li><a href="#">Track an order</a></li>
              <li><a href="#">Update information</a></li>
            </ul>
          </div>
          <div class="">
            <h2>Lookbook</h2>
            <ul class="ml-0">
              <li><a href="#">Latest posts</a></li>
              <li><a href="#">Men’s lookbook</a></li>
              <li><a href="#">Women’s lookbook</a></li>
              <li><a href="#">Lookbooks RSS feed</a></li>
              <li><a href="#">View your lookbook</a></li>
              <li><a href="#">Delete your lookbook</a></li>
            </ul>
          </div>
          <div class="">
            <h2>Contact details</h2>
              <p class="mb-1">
                Head Office: Avenue Fashion,<br>
                180-182 Regent Street, London.
              </p>
              <a href="tel:0123-456-789">Telephone: 0123-456-789</a>
              <a href="mailto:support@yourwebsite.com">Email: support@yourwebsite.com</a>
          </div>
        </div>
      </div>
    </footer>
  </div>

</template>

<script>

import Homepage from './views/HomePage'
import BrandPage from './views/BrandPage'
import SignupPage from './views/SignupPage'
import ProductPage from './views/ProductPage'

export default {
  name: 'App',
  components: {
    Homepage, BrandPage, SignupPage, ProductPage
  },
  data () {
    return {
      msg: 'Hello',
      heroImage: 'static/images/hero.jpg',
      navBanner: 'static/images/sale-banner.png',
      counter: 0,
      isActive: false,
      form: {
        name: ''
      },
      products: [
        {
          productId: 1,
          productName: 'Pants',
          productImage: 'static/images/products/product-1.jpg',
          productGallery: null,
          quantity: 1,
          description: 'Lorem Ipsum er ganske enkelt fyldtekst fra print- og typografiindustrien.',
          price: 200,
          oldPrice: null,
          onSale: false
        },
        {
          productId: 2,
          productName: 'Shirts',
          productImage: 'static/images/products/product-2.jpg',
          productGallery: ['static/images/products/product-2.jpg', 'static/images/products/product-2.jpg'],
          quantity: 1,
          description: 'Lorem Ipsum er ganske enkelt fyldtekst fra print- og typografiindustrien.',
          price: 900,
          oldPrice: 1200,
          onSale: true
        },
        {
          productId: 3,
          productName: 'Shoes',
          productImage: 'static/images/products/product-3.jpg',
          quantity: 2,
          description: 'Lorem Ipsum er ganske enkelt fyldtekst fra print- og typografiindustrien.',
          price: 100,
          oldPrice: null,
          onSale: false
        },
        {
          productId: 4,
          productName: 'Hats',
          productImage: 'static/images/products/product-4.jpg',
          quantity: 6,
          description: 'Lorem Ipsum er ganske enkelt fyldtekst fra print- og typografiindustrien.',
          price: 100,
          oldPrice: null,
          onSale: false
        },
        {
          productId: 5,
          productName: 'Hats',
          productImage: 'static/images/products/product-5.jpg',
          quantity: 6,
          description: 'Lorem Ipsum er ganske enkelt fyldtekst fra print- og typografiindustrien.',
          price: 100,
          oldPrice: null,
          onSale: false
        },
        {
          productId: 6,
          productName: 'Hats',
          productImage: 'static/images/products/product-6.jpg',
          quantity: 6,
          description: 'Lorem Ipsum er ganske enkelt fyldtekst fra print- og typografiindustrien.',
          price: 100,
          oldPrice: null,
          onSale: false
        }
      ]
    }
  },
  computed: {
    /* reversedMessage: function () {
      return this.msg.split('').reverse().join('')
    }, */
    total: function () {
      return this.products.reduce(function (previousValue, currentValue) {
        return previousValue + currentValue.price * currentValue.quantity
      }, 0)
    },
    productQuantity: function () {
      return this.products.reduce(function (previousValue, currentValue) {
        var sum = previousValue + currentValue.quantity
        return Math.max(0, sum)
      }, 0)
    }

  },
  methods: {
    distract: function (valId) {
      return this.products.reduce(function (previousValue, currentValue) {
        if (currentValue.productId === valId && currentValue.quantity > 0) {
          var dist = currentValue.quantity -= 1
          return dist
        }
      }, 0)
    },
    deleteObject: function (index) {
      this.$delete(this.products, index)
    },
    myFilter: function () {
      this.isActive = !this.isActive
      // some code to filter users
    }
  }

}
</script>
<style>
@import url('./assets/css/master.css');
</style>
