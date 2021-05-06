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
        <v-list-item href="https://dev.azure.com/bredbrains/Wish%20List/_wiki/wikis/Wish-List.wiki/2/Introduction">
          <v-list-item-action>
            <v-icon>mdi-book-open-page-variant</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Wiki</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item href="https://docs.google.com/spreadsheets/d/1FdoqJq5MGMSRa6jJXHGkTvtY6ZIUb-H-uuvx00DEggU/edit?usp=sharing">
          <v-list-item-action>
            <v-icon>mdi-account-tie</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Risk Management</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item href="https://docs.google.com/spreadsheets/d/1qNi7sxMEToLuON5l0xjhY7w6i5-3VyYsH23cn8W0qts/edit?usp=sharing">
          <v-list-item-action>
            <v-icon>mdi-chart-gantt</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Gantt Chart</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
        <router-view @openDrawer="drawer = true" :links="links"/>
    </v-main>

    <v-footer absolute app class="d-flex justify-center">
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
      },
      {
        icon: 'mdi-code-braces',
        title: "Coding Interview",
        to: '/coding-interview'
      },
      {
        icon: 'mdi-google-hangouts',
        title: "Job Interview",
        to: "/job-interview"
      }
    ]
  })
};
</script>

<style>
</style>

