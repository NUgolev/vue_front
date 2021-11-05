<template>
  <div>
    <v-container>
      <p class="display-3 font-weight-light	text-center pa-4">Оформление заказа</p>
      <v-row>
        <v-col :cols="12" md="9" sm="12" >
          <v-simple-table>
            <template v-slot:default>
              <thead>
              <tr>
                <th class="text-center">Товар</th>
                <th class="text-center">Цена</th>
                <th class="text-center">Количество</th>
                <th class="text-center">Сумма</th>
                <th class="text-center"></th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>
                  <v-list-item
                    key="1"
                    @click=""
                  >
                    <v-list-item-avatar>
                      <v-img :src="require('../assets/img/shop/1.jpg')"></v-img>
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title >MOTUL 8100 ECO-nergy</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item></td>
                <td class="text-center">4500.00 ₽</td>
                <td class="text-center"> 2 шт.</td>
                <td class="text-center">9000.00 ₽</td>
              </tr>
              <tr>
                <td>
                  <v-list-item
                    key="1"
                    @click=""
                  >
                    <v-list-item-avatar>
                      <v-img :src="require('../assets/img/shop/2.jpg')"></v-img>
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title >Zepro</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item></td>
                <td class="text-center">4000.00 ₽</td>
                <td class="text-center"> 2 шт.</td>
                <td class="text-center">8000.00 ₽</td>
              </tr>
              </tbody>
            </template>
          </v-simple-table>
          <hr>
          <v-text-field
            flat
            label="Имя Фамилия"
            class="hidden-sm-and-down"
          >
          </v-text-field>
          <v-text-field
            flat
            label="Телефон"
            class="hidden-sm-and-down"
          >
          </v-text-field>
          <v-text-field
            flat
            label="Введите адрес доставки"
            class="hidden-sm-and-down "
          >
          </v-text-field>
          <v-card-title class="pb-0 font-weight-light">Способ оплаты при получении</v-card-title>
          <label>
            <input type="radio" name="group1"/>
            <span class="display-1 font-weight-light pa-4"> Наличными </span>
          </label>
          <label class="Card">
            <input type="radio" name="group1"/>
            <span class="display-1 font-weight-light pa-4"> Картой </span>
          </label>
        </v-col>
        <v-col :cols="12" md="3" sm="12" style="background-color: lightgray">
          <p class="headline">Общая сумма</p>
          <v-simple-table>
            <template v-slot:default>
              <tbody>
              <tr>
                <td>Общий подитог</td>
                <td class="text-right" style="width: 50px;"> 17000.00₽ </td>
              </tr>
              <tr>
                <td>Скидка</td>
                <td class="text-right" style="width: 50px;">0.00 ₽</td>
              </tr>
              <tr>
                <td>Итого</td>
                <td class="text-right" style="width: 50px;"><b>17000.00₽</b></td>
              </tr>
              </tbody>
            </template>
          </v-simple-table>
          <div class="text-center">
            <v-btn class="primary white--text mt-5" outlined v-on="on" href="/Order_complete">Заказать</v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  data: () => ({
    Autoparts: [
      {
        text: 'Главная',
        disabled: false,
        href: 'Home',
      },
      {
        text: 'Масла',
        disabled: false,
        href: 'Oil',
      },
      {
        text: 'Моторные',
        disabled: true,
        href: 'Motor_oil',
      },
    ],
  })
}
</script>

