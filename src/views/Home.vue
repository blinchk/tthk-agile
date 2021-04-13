<template>
  <v-container>
    <v-card elevation="2">
      <v-card-title>
        Главная страница
      </v-card-title>
      <v-card-text>
        <p>Упс, кажется я не придумал, что сюда засунуть. А давайте просто откроем меню? <a @click.stop="openDrawer">Откроем!</a></p>
      </v-card-text>
      <v-card-title>Содержание</v-card-title>
      <v-card-text>
        <ol>
          <li v-for="(link, i) in links.slice(1)" :key="i">
            <router-link :to="link.to" tag="a">{{link.title}}</router-link>
          </li>
        </ol>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>

export default {
  name: 'Home',
  props: ['links'],
  methods: {
    openDrawer() {
      this.$emit('openDrawer');
    }
  }
}
</script>
