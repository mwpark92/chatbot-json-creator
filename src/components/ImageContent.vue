<template>
  <v-card class="mx-auto" outlined elevation="1">
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="headline mb-1">Image Content</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-card-text class="sub-title">
      <p class="sub-title-value">이미지URL</p>
    </v-card-text>
    <v-text-field
      class="text-content-value"
      v-model="imageContentValue"
      @input="onUpdateImageContentValue"
    ></v-text-field>
    <ul class="infomation">
      <li>이미지는 최대 20MB 용량까지 사용할 수 있습니다.</li>
      <li>사용 가능한 이미지 포맷은 JPG, JPEG, PNG, GIF입니다.</li>
      <li>바탕투명 또는 움직이는이미지 모두 채팅창에서 표현할 수 있습니다.</li>
    </ul>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      imageContentValue: ""
    };
  },
  created() {
    this.$store.commit("resetChatbotJSON", "IMAGE_CONTENT");
    this.imageContentValue = this.$store.state.chatbotJSON.imageContent.imageURL;
  },
  methods: {
    onUpdateImageContentValue() {
      this.$store.commit("updateImageContent", this.imageContentValue);
    }
  }
};
</script>

<style scoped>
.sub-title {
  padding: 0 18px 0 18px;
  margin: 0 0 0 0;
  font-size: 13px;
}

.sub-title-value {
  margin: 0;
}

.text-content-value {
  padding: 0 18px 0 18px;
  margin: 0;
}

.infomation {
  font-size: 14px;
  margin: 0 18px 18px 18px;
  color: rgba(0, 0, 0, 0.5);
}
</style>