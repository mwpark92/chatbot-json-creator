<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <span class="mr-2">챗봇 JSON 생성기</span>
    </v-app-bar>

    <v-content>
      <v-container fill-height>
        <v-layout>
          <v-flex lg6 mr-5 ml-5 mt-5 >
            <JSONViewer></JSONViewer>
          </v-flex>
          <v-flex lg6 mr-5 ml-5 mt-5>
            <JSONEditor></JSONEditor>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import JSONEditor from "./components/JSONEditor";
import JSONViewer from "./components/JSONViewer";

export default {
  name: "App",

  components: {
    JSONEditor,
    JSONViewer
  },

  data: () => ({
    //
  })
};
</script>

<style>
 .theme--light.v-application {
   background: white !important;
 }
 .container {
   margin-left: 0px;
   margin-right: 0px;
 }
</style>
