<template>
  <div class="products">
      <div class="product"
      @click="() => productClicked(product.id)"
      :style="{backgroundColor: `rgb(${product.color})`}"
      :key="product.id" v-for="product in products">
        <span class="title">{{product.title}}</span>
      </div>
  </div>
</template>

<script>
import { productsQuery } from '../graphql/products'
export default {
  name: 'App',
  inject: ['apollo'],
  data(){
    return {
      products: []
    }
  },
  methods: {
    productClicked(id){
      this.$router.push(`/product/${id}`)
    }
  },
  mounted(){
    this.apollo.defaultClient.query(productsQuery)
      .then(({data}) => {
        this.products = data.products
      })
  }
}
</script>

<style scoped>
.title {
  transition: all 300ms ease-in-out;
}
.product:hover{
  flex: 4;
  border: 5px solid black;
}
.product:hover > .title {
  margin-left: 20px;
  margin-bottom: 40px;
}
.product {
  overflow: hidden;
  cursor: pointer;
  flex: 1;
  display: flex;
  transition: all 300ms ease-in-out;
}
.products {
    display: flex;
    margin-left: auto;
    margin-right: auto;
    width: 80%;
    height: 80%;
}
@media only screen and (min-width: 600px) {
  .title {
    transform: rotate(-180);
    margin-bottom: 10px;
    writing-mode: tb-rl;
    font-size: 10rem;
  }
  .products {
    flex-direction: row;
  }
  .products > div:first-of-type {
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
  }
  .products > div:last-of-type {
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
  }
  .title {
    transform: rotate(-180deg);
  }
}
@media only screen and (max-width: 600px) {
  .products {
    flex-direction: column;
  }
  .title {
    font-size: 2rem;
    margin-left: 10px;
    margin-top: 10px;
  }
  .products > div:first-of-type {
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
  }
  .products > div:last-of-type {
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
  }
}
</style>
