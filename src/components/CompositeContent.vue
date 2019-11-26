<template>
  <v-card class="mx-auto" outlined elevation="1">
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="headline mb-1">Composite Content</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <ul class="infomation">
      <li>compositeContent에 composite을 두 개 이상 넣어서 캐로셀(Carousel)을 구성할 수 있습니다.</li>
      <li>최대 10개의 Composite를 추가할 수 있습니다.</li>
      <li>하나의 composite에 "타이틀", "설명", "요소 리스트" 중 적어도 한 개의 속성은 존재해야 합니다.</li>
      <li>하나의 composite에 "타이틀", "설명", "요소 리스트", "이미지", "버튼" 중 적어도 두 개의 속성이 존재해야 합니다.</li>
    </ul>
    <v-btn v-show="compositeList.length < 10" small color="primary" class="add-composite-button" @click="onClickAddCompositeButton">
      <v-icon>mdi-plus</v-icon>카드 추가</v-btn>
    <Composite :index="index" v-for="(composite, index) in compositeList" v-bind:key="index" class="composite"></Composite>
  </v-card>
</template>

<script>
import Composite from "./Composite";

export default {
  components: {
    Composite,
  },
  data() {
    return {
    }
  },
  computed: {
    compositeList() {
      return this.$store.state.chatbotJSON.compositeContent.compositeList;
    }
  },
  created() {
    this.$store.commit("resetChatbotJSON", "COMPOSITE_CONTENT");
  },
  methods: {
    onClickAddCompositeButton() {
      this.$store.commit('addComposite');
    }
  },
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

.add-composite-button {
  margin: 0 24px 24px 24px;
}

.composite {
  margin: 0 24px 24px 24px;
}
</style>