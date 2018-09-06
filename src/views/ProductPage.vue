<template name='productpage'>

  <div v-if="product" class="productpage header">
    <section class="banner" v-bind:style="{ backgroundImage: 'url(' + heroImage + ')' }">
      <div class="overlay py-5">
        <div class="container d-flex jf-center ai-center white-color fd-column uppercase">
          <h1 class="mb-2"><strong>Product</strong> view</h1>
          <p>mens - casuals - hoodies & sweatshirts - <span class="cyan-color"> </span></p>
        </div>
      </div>
    </section>
    <section class="product-details mt-4">
      <div class="container-s d-flex">
        <div class="image">
          <div class="arrows">
            <div class="icon arrow arrow-left"><i class="fa fa-angle-left"></i></div>
            <div class="icon arrow arrow-right"><i class="fa fa-angle-right"></i></div>
          </div>
          <img v-if="product" v-bind:src="product.productImage" alt="">
        </div>
        <div class="details ml-3">
          <h2>{{product.productName}}</h2>
          <div class="d-flex mt-1">
            <div class="stars mr-1">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="far fa-star"></i>
            </div>
            <p><strong>3</strong> Review(s) |</p>
            <a class="px-1" href="#">Add a review</a>
            <p>| Share: </p>
            <ul class="d-flex">
              <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
              <li><a href="#"><i class="fab fa-twitter"></i></a></li>
              <li><a href="#"><i class="fab fa-google-plus-g"></i></a></li>
              <li><a href="#"><i class="fab fa-pinterest-p"></i></a></li>
              <li><a href="#"><i class="fab fa-instagram"></i></a></li>
              <li><a href="#"><i class="far fa-envelope"></i></a></li>
            </ul>
          </div>
          <div class="price mt-2 d-flex h5 gray-color">
            <div class="oldPrice">{{ product.oldPrice }},00 <div>DKK</div></div>
            <div class="ml-2">{{ product.price }},00 <div>DKK</div></div>
          </div>
          <div class="d-flex mt-3">
            <p class="stock uppercase mr-1">Availability: </p>
            <p>{{ (product.quantity) ? 'In Stock' : 'Empty' }}</p>
          </div>
          <p class="uppercase mt-1">Product code: #{{ product.productCode }}</p>
          <div class="mt-1 d-flex tags">TAGS:
            <div class="d-flex" v-for="tag in product.items">
              <router-link class="nav-link" to="/">{{ tag }}</router-link>
            </div>
          </div>
          <div class="detailed__content gray-color mt-2">
            <p>Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est</p>
            <p> congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar</p>
            <p>tempor lorem a pretium justo interdum.</p>
            <ul class="mt-2">
              <li>Elasticated cuffs</li>
              <li>Casual fit</li>
              <li>100% Cotton</li>
              <li>Free shipping with 4 days delivery</li>
            </ul>
          </div>
          <form class="mt-2">
            <div class="form-elements d-flex">
              <div class="form-elements__form-item mr-1">
                <label for="color" class="uppercase h1">Color</label>
                <div class="styled-select">
                  <select name="color">
                    <option selected disabled value="0">Select Colour</option>
                    <option value="">Red</option>
                    <option value="">Blue</option>
                    <option value="">Black</option>
                    <option value="">White</option>
                  </select>
                  <span class="fas fa-chevron-down"></span>
                </div>
              </div>
              <div class="form-elements__form-item mr-1">
                <label for="size" class="uppercase h1">Size</label>
                <div class="styled-select">
                  <select name="size">
                    <option selected disabled value="0">Select Size</option>
                    <option value="">XS (27)</option>
                    <option value="">S (30)</option>
                    <option value="">M (32)</option>
                    <option value="">XL (35)</option>
                    <option value="">XXL (40)</option>
                  </select>
                  <span class="fas fa-chevron-down"></span>
                </div>
              </div>
              <div class="form-elements__form-item">
                <label for="qty" class="uppercase h1">Qty</label>
                <div class="styled-adder d-flex">
                  <p>{{ counter < 0 ? 0 : counter }}</p>
                  <div>
                    <button v-on:click.prevent="counter += 1" name="button"><i class="fas fa-chevron-up"></i></button>
                    <button v-on:click.prevent="distract(counter)" name="button"><i class="fas fa-chevron-down"></i></button>
                  </div>
                </div>
              </div>
            </div>
            <input name="qty" hidden v-model="counter">
            <div class="form-elements__form-item mt-2">
              <button class="btn bg-cyan"><i class="fas fa-shopping-cart"></i> ADD TO CART</button>
              <button class="btn btn-border ml-2"><i class="far fa-heart"></i> ADD TO COLLECTION</button>
            </div>
            <div class="compare-el">
              <button type="button" name="button"><div class="icon compare"></div> ADD TO COMPARE</button>
            </div>
          </form>
        </div>

      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  methods: {
    distract: function (counter) {
      alert(counter-1)
    },
  },
  mounted() {
    var element = document.getElementById("header");
    element.classList.add("bg-white");
    var routeName = this.$route.params.id;
    axios.get('static/products-data.json')
    .then(response => (this.product = response.data
    .find(r => r.id === routeName)))
  },
  data () {
    return {
      product: null,
      heroImage: 'static/images/banner.jpg',
      counter: 1,
      quantity: 6,
      name: 'product',
      tab: 1,
    }
  }
}


</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
