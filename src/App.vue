<template>
  <v-app>
    <v-app-bar app color="primary" dark fixed clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>
        Agile
      </v-toolbar-title>
      <div class="links"></div>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list dense>
        <v-list-item router exact v-for="(link, i) in links" :key="i" :to="link.to">
          <v-list-item-action>
            <v-icon>{{link.icon}}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{link.title}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
        <router-view @openDrawer="drawer = true" :links="links"/>
    </v-main>

    <v-footer class="d-flex justify-center">
      &copy; Nikolas Laus, TARpv19
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    drawer: false,
    links: [
      {
        icon: "mdi-home",
        title: "Главная",
        to: "/"
      },
      {
        icon: "mdi-note",
        title: "Манифест",
        to: "/manifesto"
      },
      {
        icon: "mdi-charity",
        title: "Принципы",
        to: "/principles"
      },
      {
        icon: "mdi-history",
        title: "История",
        to: "/history"
      }
    ]
  })
};
</script>

<style>
</style>

