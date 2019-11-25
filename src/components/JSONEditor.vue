<template>
  <div>
    <component v-bind:is="selectedComponent">
      <p>Default content</p>
    </component>
    <v-layout justify-center>
      <v-btn color="primary" fab small @click="selectedComponent = 'TextContent'" >
        <v-icon>mdi-television</v-icon>
      </v-btn>
      <v-btn color="warning" fab small @click="selectedComponent = 'ImageContent'" >
        <v-icon>mdi-television</v-icon>
      </v-btn>
      <v-btn color="error" fab small @click="selectedComponent = 'CompositeContent'" >
        <v-icon>mdi-television</v-icon>
      </v-btn>
      <v-btn color="success" fab small>
        <v-icon>mdi-television</v-icon>
      </v-btn>
    </v-layout>
  </div>
</template>

<script>
import TextContent from "./TextContent";
import ImageContent from "./ImageContent";
import CompositeContent from "./CompositeContent";
import QuickAnswer from "./QuickAnswer";

export default {
  components: {
    TextContent,
    ImageContent,
    CompositeContent,
    QuickAnswer
  },
  data() {
    return {
      selectedComponent: "TextContent"
    };
  }
};
</script>

<style scoped>
</style>