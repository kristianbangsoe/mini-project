<template>
  <div class="home">
    <section id="hero" v-bind:style="{ backgroundImage: 'url(' + heroImage + ')' }">
      <div class="container d-flex animate-letters">
          <p>A</p><p>V</p><p>E</p>
      </div>
      <div class="container d-flex">
        <div class="ml-auto  mr-5">
          <a class="btn btn-border  mr-5" href="#">SHOP MEN'S COLLECTION</a>
        </div>
      </div>
    </section>
    <section class="product-list pt-5">
      <div class="container">
        <div class="filter mt-5 pb-2">
          <ul class="d-flex">
            <li><a href="#">POPULAR</a></li>
            <li><a class="active" href="#">NEW ARRIVALS</a></li>
            <li><a href="#">BEST SELLERS</a></li>
            <li><a href="#">SPECIAL OFFERS</a></li>
            <li><a href="#">COMMING SOON</a></li>
          </ul>
        </div>
        <div class="product-collection columns my-3">
          <figure v-for="product in products" :key="product.id" class="item">
            <router-link :to="{ name: 'product', params: { id: product.id }}">
              <div class="info-i">
                <i class="fas fa-info-circle"></i>
              </div>
              <div class="price-tag pt-1 ml-1">{{ product.price }} DKK</div>
              <img :src="`${product.productImage}`" alt="">
              <div class="label-container">
                <div class="label">
                  <p class="pb-1">{{ product.productName}}</p>
                  <p>{{ product.description }}</p>
                  <div class="d-flex jf-center mt-1">
                    <div class="icon compare"></div>
                    <div class="icon-fa mx-1"><i class="fas fa-shopping-cart"></i></div>
                    <div class="icon-fa"><i class="far fa-heart"></i></div>
                  </div>
                </div>
              </div>
            </router-link>
          </figure>
        </div>
        <hr class="my-5">
      </div>

    </section>
    <section class="category-boxes columns">
      <div class="column col-4">
        <div class="p-4 pb-0 d-flex bg-light">
          <img v-bind:src="boxImage1" alt="">
          <div class="pl-3">
            <h1><strong>MEN'S</strong></br>LOOKBOOK</h1>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <a class="btn bg-cyan mt-2" href="#">VIEW NOW</a>
          </div>
        </div>
      </div>
      <div class="column col-4">
        <div class="p-4 pb-0 d-flex bg-light">
          <img v-bind:src="boxImage2" alt="">
          <div class="pl-3">
            <h1><strong>WOMAN'S</strong></br>LOOKBOOK</h1>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <a class="btn bg-cyan mt-2" href="#">VIEW NOW</a>
          </div>
        </div>
      </div>
      <div class="column col-4">
        <div class="p-4 pb-0 d-flex bg-light p-3">
          <img v-bind:src="boxImage3" alt="">
          <div class="pl-3">
            <h1><strong>YOUR</strong></br>LOOKBOOK</h1>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <a class="btn bg-cyan mt-2" href="#">VIEW NOW</a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
import jquery from '@jquery/dist/jquery.min.js'
export default {

  name: 'homepage',
  data () {
    return {
      msg: 'Hello',
      products: 0,
      heroImage: 'static/images/hero.jpg',
      counter: 0,
      isActive: false,
      boxImage1: 'static/images/man.jpg',
      boxImage2: 'static/images/woman.jpg',
      boxImage3: 'static/images/you.jpg',
      form: {
        name: ''
      },
    }
  },
  mounted() {


    var element = document.getElementById("header")
    element.classList.remove("bg-white")

    axios.get("static/products-data.json").then(response => (this.products = response.data))

    window.$ = jquery
    $(document).ready(function () {
      $(window).scroll(function() {
        // 100 = The point you would like to fade the nav in.

        if ($(window).scrollTop() > 100 ){
          $('header').addClass('show')
        } else {
          $('header').removeClass('show')
        }
      })
    })

  },

}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style
</style>
