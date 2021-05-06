<template>
  <v-container>
    <v-card elevation="2">
      <v-card-title>Job Interview Questions</v-card-title>
      <v-card-text>
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header>1. What programming languages are you familiar with?</v-expansion-panel-header>
            <v-expansion-panel-content>
              I am familiar with
              <v-icon small>mdi-language-javascript</v-icon>
              JavaScript on front-end as well as back-end language using Node.js. <br>
              On back-end I prefer to use
              <v-icon>mdi-language-go</v-icon>
              Golang,
              <v-icon small>mdi-language-csharp</v-icon>
              .NET or
              <v-icon small>mdi-language-python</v-icon>
              Python with most fastest frameworks, that support building
              REST API. <br>
              I have some experience of building desktop or mobile applications with above mentioned programming
              languages, but currently web applications development is my main scope.
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header>2. What tech resources do you read as a junior software developer? What do you
              find interesting in current tech trends?
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              I find most interesting in current tech trends, that JavaScript can be used at nowadays anywhere. <br>
              As a junior software developer I prefer to read social blogs in tech industry, for example Habr,
              Medium or TechCrunch. <br>
              In developers community I prefer to participate on GitHub with my contributions, answers to issues and
              bug reports. <br>
              From books I prefer Robert C. Martin, "Programming without fools" and most popular tech books.
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header></v-expansion-panel-header>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "JobInterview.vue"
}
</script>

<style scoped>

</style>
