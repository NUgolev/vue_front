<template>
  <div>
    <v-container>
      <div class="row">
        <div class="col-md-3 col-sm-7 col-xs-12">
          <v-img
            :src="'http://localhost:8000/static/' + product.image_path">
          </v-img>
        </div>
        <div class="col-md-7 col-sm-7 col-xs-12">
          <div class="pl-6">
            <p class="display-1 mb-0">{{ product.name }}</p>
            <p class="display-0 mb-0">Цена:</p>
            <p class="display-1 mb-0"> {{ product.price }} </p>
            <p class="title">Количество</p>
            <v-text-field
              outlined
              style="width:100px"
              :value="1"
              dense
            ></v-text-field>
            <v-btn class="primary white--text" outlined tile dense>
              <v-icon>mdi-cart-arrow-down</v-icon>
              В корзину
            </v-btn>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12 col-xs-12 col-md-12">
          <v-tabs>
            <v-tab>Описание</v-tab>
            <v-tab-item>
              <p class="pt-10 subtitle-1 font-weight-bold">
                {{ product.description }}
              </p>
            </v-tab-item>
          </v-tabs>
          <v-card-text
            class="pa-0 pt-4"
            tile
            outlined
          >
            <p class="subtitle-1 font-weight-light pt-3 text-center">С этим товаром смотрят</p>
            <v-divider></v-divider>
            <div class="row text-center">
              <div class="col-md-2 col-sm-4 col-xs-12 text-center"
                   v-for="(same_product,id) in same_products"
                   v-if="(product.id !== same_product.id) && (id <= same_prod_count)">
                <v-hover
                  v-slot:default="{ hover }"
                  open-delay="200"
                >
                  <v-card
                    :elevation="hover ? 16 : 2"
                  >
                    <v-img
                      class="white--text align-end"
                      height="200px"
                      :src="'http://localhost:8000/static/' + same_product.image_path"
                    >
                    </v-img>
                    <v-card-text class="text--primary text-center">
                      <div>{{ same_product.price }}₽</div>
                      <div>{{ same_product.name }}</div>
                    </v-card-text>
                    <div class="text-center">
                      <v-btn
                        class="ma-2"
                        outlined
                        color="info"
                        :href=" '/product/' + same_product.id"
                      >
                        Подробнее
                      </v-btn>
                    </div>
                  </v-card>
                </v-hover>
              </div>
            </div>
          </v-card-text>
        </div>
      </div>
    </v-container>
    <v-card class="accent">
    </v-card>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data: () => ({
    product: [],
    same_products: [],
    same_prod_count: 6
  }),
  mounted() {
  },
  created() {
    axios.get('http://127.0.0.1:8000/api/product/' + this.$route.params.id)
      .then(response => {
        // JSON responses are automatically parsed.
        this.product = response.data
        axios.get('http://127.0.0.1:8000/api/product/?category=' + this.product.category_id)
          .then(response => {
            // JSON responses are automatically parsed.
            this.same_products = response.data
          })
          .catch(e => {
            this.errors.push(e)
          })
      })
      .catch(e => {
        this.errors.push(e)
      })
  }
}
</script>
