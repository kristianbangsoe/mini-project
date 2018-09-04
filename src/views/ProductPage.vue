<template name='productpage'>

  <div class="productpage header">
    <section class="banner" v-bind:style="{ backgroundImage: 'url(' + heroImage + ')' }">
      <div class="overlay py-5">
        <div class="container d-flex jf-center ai-center white-color fd-column uppercase">
          <h1 class="mb-2"><strong>Product</strong> view</h1>
          <p>mens - casuals - hoodies & sweatshirts - <span class="cyan-color">{{ productName }}</span></p>
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
          <img v-bind:src="productImage" alt="">
        </div>
        <div class="details ml-3">
          <h2>{{ productName }}</h2>
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
            <div class="oldPrice">{{ oldPrice }},00 <div>DKK</div></div>
            <div class="ml-2">{{ price }},00 <div>DKK</div></div>
          </div>
          <div class="d-flex mt-3">
            <p class="stock uppercase mr-1">Availability: </p>
            <p>{{ (quantity) ? 'In Stock' : 'Empty' }}</p>
          </div>
          <p class="uppercase mt-1">Product code: #{{ productCode }}</p>
          <div class="mt-1 d-flex tags">TAGS:
            <div class="d-flex" v-for="tags in items">
              <router-link class="nav-link" to="/">{{ tags.tag }}</router-link>
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
              <div class="form-elements__form-item">
                <label for="color" class="uppercase h1">Color</label>
                <div class="styled-select">
                  <select name="color ">
                    <option selected disabled value="0">Color</option>
                    <option value="">Red</option>
                    <option value="">Blue</option>
                    <option value="">Black</option>
                    <option value="">White</option>
                  </select>
                  <span class="fas fa-chevron-down"></span>
                </div>
              </div>
              <div class="form-elements__form-item">
                <label for="color" class="uppercase h1">Color</label>
                <div class="styled-select">
                  <select name="color">
                    <option selected disabled value="0">Color</option>
                    <option value="">Red</option>
                    <option value="">Blue</option>
                    <option value="">Black</option>
                    <option value="">White</option>
                  </select>
                  <span class="fas fa-chevron-down"></span>
                </div>
              </div>
              <div class="form-elements__form-item">
                <label for="color" class="uppercase h1">Color</label>
                <div class="styled-adder d-flex">
                  <p>{{ counter }}</p>
                  <div>
                    <button v-on:click.prevent="counter += 1" name="button">+</button>
                    <button v-on:click.prevent="counter -= 1" name="button">-</button>
                  </div>
                </div>
              </div>
            </div>
            <input hidden v-model="counter">
          </form>
        </div>

      </div>
    </section>
  </div>
</template>

<script>
export default {
  mounted() {
    var element = document.getElementById("header");
    element.classList.add("bg-white");
  },
  name: 'ProductPage',
  tab: 1,
  data () {
    return {
      heroImage: 'static/images/banner.jpg',
      productId: 6,
      counter: 0,
      productName: 'Ave Classic Sweatshirt',
      productImage: 'static/images/products/product-6.jpg',
      quantity: 6,
      description: 'Lorem Ipsum er ganske enkelt fyldtekst fra print- og typografiindustrien.',
      price: 89,
      oldPrice: 100,
      onSale: false,
      items: [
        { tag: 'classic' },
        { tag: 'casual' },
        { tag: 'hoodies' },
        { tag: 'v-neck' },
        { tag: 'loose' },
      ],
      productCode: 499577,
    }
  }
}


</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
