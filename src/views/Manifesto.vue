<template>
  <v-container>
    <v-card elevation="2">
      <v-card-title>
        Манифест Agile
      </v-card-title>
      <v-card-text>
          <v-list>
            <v-subheader
              >Мы постоянно открываем для себя более совершенные методы
              разработки программного обеспечения, занимаясь разработкой
              непосредственно и помогая в этом другим. Благодаря проделанной
              работе мы смогли осознать следующее.</v-subheader
            >
            <v-list-item>
              <v-list-item-title>
                1. <strong>Люди и взаимодействие</strong> важнее процессов и
                инструментов.
              </v-list-item-title>
            </v-list-item>
            <v-divider/>
            <v-list-item>
              <v-list-item-title>
                2. <strong>Работающий продукт</strong> важнее исчерпывающей
                документации.
              </v-list-item-title>
            </v-list-item>
            <v-divider/>
            <v-list-item>
              <v-list-item-title>
                3. <strong>Сотрудничество с заказчиком</strong> важнее согласования
                условий контракта.
              </v-list-item-title>
            </v-list-item>
            <v-divider/>
            <v-list-item>
              <v-list-item-title>
                4. <strong>Готовность к изменениям</strong> важнее следования
                плану.
              </v-list-item-title>
            </v-list-item>
            <v-subheader>
              То есть, не отрицая важности того, что справа, мы все-таки больше
              ценим то, что слева.
            </v-subheader>
          </v-list>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Manifesto"
};
</script>

<style></style>
