<template>
  <v-card class="mx-auto" outlined elevation="1">
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="headline mb-1">Text Content</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-card-text class="sub-title">
      <p class="sub-title-value">텍스트</p>
    </v-card-text>
    <v-textarea
      class="text-content-value"
      v-model="textContentValue"
      @input="onUpdateTextContentValue"
      :placeholder="this.placeHolder"
      counter="10000"
      maxlength="10000"
    ></v-textarea>
    <ul class="infomation">
      <li>줄 바꿈이 필요할 때 \n을 삽입합니다.</li>
      <li>텍스트의 최대 길이는 영문/한글 구분 없이 1만자 이내로 전송해야 합니다.</li>
    </ul>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      placeHolder: "텍스트를 입력해 주세요.",
      textContentValue: ""
    };
  },
  created() {
    this.$store.commit("resetChatbotJSON", "TEXT_CONTENT");
  },
  methods: {
    onUpdateTextContentValue() {
      this.$store.commit("updateTextContent", this.textContentValue);
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