<template>
  <v-app id="inspire">
    <v-app-bar class="px-3" color="grey" flat density="compact">
      <v-avatar color="grey-darken-1" size="32"></v-avatar>

      <v-spacer></v-spacer>

      <v-tabs centered color="grey-darken-5">
        <v-tab v-for="(link, index) in links" :key="index" :to="link.to">
          {{ link.title }}
        </v-tab>
      </v-tabs>
      <v-spacer></v-spacer>

      <v-avatar
        class="hidden-sm-and-down"
        color="grey-darken-1"
        size="32"
      ></v-avatar>
    </v-app-bar>

    <v-main class="bg-grey-lighten-3">
      
      <v-container>
        <v-row>
          <v-col cols="12" sm="2">
            <v-sheet rounded="lg" min-height="268">
              <!--  -->asdas left
            </v-sheet>
          </v-col>

          <v-col cols="12" sm="8">
            <v-sheet min-height="70vh" rounded="lg">
              <router-view></router-view>
            </v-sheet>
          </v-col>

          <v-col cols="12" sm="2">
            <v-sheet rounded="lg" min-height="268">
              <!--  -->asdas right
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  components: {
    // "all-books": require("@/views/AllBooks.vue").default,
  },
  data: () => ({
    links: [
      { title: "All books", to: "/books" },
      { title: "Subject list", to: "/subjects" },
      //{title: "Add new book", to: ''},
      { title: "My reading list", to: "/reading-list" },
    ],
  }),
};
</script>
