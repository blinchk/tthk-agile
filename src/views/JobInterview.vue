<template>
  <v-container>
    <v-card elevation="2">
      <v-card-title>Job Interview Questions</v-card-title>
      <v-card-text>
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header>
              <strong>1. What programming languages are you familiar with?</strong>
            </v-expansion-panel-header>
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
            <v-expansion-panel-header>
              <strong>2. What tech resources do you read as a junior software developer?
              What do you find interesting in current tech trends?</strong>
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
            <v-expansion-panel-header>
              <strong>3. What are some steps that junior software developers should take to troubleshoot their code?</strong>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              At first, developer should find actions or mutations, that breaks executing of the code.
              After this you should debug this code, to find any anomalous inputs, outputs or errors in algorithms.
              The most important condition of troubleshooting, you should check that unexpected behaviour case is fixed
              after your changes.
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header><strong>4. Tell me about a time you received negative feedback. How did you go about dealing with it?</strong></v-expansion-panel-header>
            <v-expansion-panel-content>
              I received negative feedback never, due to good team members.
              I think, developer should hear feedback about him work, but shouldn't take everything too close.
              Any criticism is allowed, but must be constructive.
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header>
              <strong>5. As a junior software developer, have you worked on any projects in the past? If so, what?</strong>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              So, currently I am engaged in Front-End Development of AI-based CRM system console and main product.
              I am part of small and close Scrum Team. I am familiar with the most popular CI/CD systems
              in nowadays, like Azure DevOps Pipelines, GitHub Actions. They are very similar and learn something
              doesn't look like big problem. As a big part of developers as VCS I use Git, for today realities this
              is best solution for version control. I participated in projects, what powered on Agile methodologies
              (for example Scrum).
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header>
              <strong>6. If I were to task you with building a product, how would you go about doing it?</strong>
            </v-expansion-panel-header>
            <v-expansion-panel-content>

            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header>
              <strong>7. What are some fundamental principles you think all developers should follow?</strong>
            </v-expansion-panel-header>
            <v-expansion-panel-content>

            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header>
              <strong>8. What are some personal goals you hope to achieve as a junior software developer?</strong>
            </v-expansion-panel-header>
            <v-expansion-panel-content>

            </v-expansion-panel-content>
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
