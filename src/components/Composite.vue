<template>
  <v-card outlined elevation="1">
    <v-list-item three-line>
      <v-list-item-content>
        <v-layout>
          <v-list-item-title class="headline mb-1">Composite</v-list-item-title>
          <div class="close-icon">
            <v-btn @click="onClickDeleteIcon">mdi-close</v-btn>
          </div>
          <!-- <div class="close-icon">
            <v-icon @click="onClickDeleteIcon">mdi-close</v-icon>
          </div>-->
        </v-layout>
      </v-list-item-content>
    </v-list-item>
    <v-row justify="space-around">
      <v-switch class="ma-2" label="타이틀" v-model="isTitleOn"></v-switch>
      <v-switch class="ma-2" label="설명" v-model="isDescriptionOn"></v-switch>
      <v-switch class="ma-2" label="요소 리스트" v-model="isElementListOn"></v-switch>
    </v-row>
    <v-row justify="space-around">
      <v-switch class="ma-2" label="이미지" v-model="isImageOn"></v-switch>
      <v-switch class="ma-2" label="버튼" v-model="isButtonListOn"></v-switch>
    </v-row>
    <div v-if="isTitleOn">
      <v-card-text class="sub-title">
        <p class="sub-title-value">타이틀</p>
      </v-card-text>
      <v-textarea
        class="text-content-value"
        counter="200"
        maxlength="200"
        v-model="compositeData.title"
      ></v-textarea>
    </div>
    <div v-if="isDescriptionOn">
      <v-card-text class="sub-title">
        <p class="sub-title-value">설명</p>
      </v-card-text>
      <v-textarea
        class="text-content-value"
        counter="1000"
        maxlength="1000"
        v-model="compositeData.description"
      ></v-textarea>
    </div>
    <div v-if="isImageOn">
      <v-card-text class="sub-title">
        <p class="sub-title-value">이미지URL</p>
      </v-card-text>
      <v-text-field class="text-content-value" v-model="compositeData.image.imageUrl"></v-text-field>
    </div>
    <div v-if="isElementListOn">
      <v-row justify="space-around">
        <ElementList></ElementList>
      </v-row>
    </div>
    <div v-if="isButtonListOn">
      <v-row justify="space-around">
        <ButtonList></ButtonList>
      </v-row>
    </div>
  </v-card>
</template>

<script>
import ElementList from "./ElementList";
import ButtonList from "./ButtonList";

export default {
  components: {
    ElementList,
    ButtonList
  },
  props: {
    index: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      isTitleOn: true,
      isDescriptionOn: true,
      isElementListOn: false,
      isImageOn: false,
      isButtonListOn: false,
      compositeData: {
        title: "",
        description: "",
        elementList: [],
        image: {
          imageUrl: ""
        },
        buttonLIst: []
      }
    };
  },
  watch: {
    compositeData: {
      deep: true,
      immediate: true,
      handler: function(newValue) {
        const trimmedComposite = this.trimComposite(newValue);
        this.$emit("change-composite", {
          composite: trimmedComposite,
          index: this.index
        });
      }
    }
  },
  methods: {
    onClickDeleteIcon() {
      this.$store.commit("deleteComposite", this.index);
    },
    trimComposite(compositeData) {
      let results = {};

      if (this.isTitleOn) {
        results.title = compositeData.title;
      }
      if (this.isDescriptionOn) {
        results.description = compositeData.description;
      }
      if (this.isElementListOn) {
        results.elementList = compositeData.elementList;
      }
      if (this.isImageOn) {
        results.image = {};
        results.image.imageUrl = compositeData.image.imageUrl;
      }
      if (this.isButtonListOn) {
        results.buttonLIst = compositeData.buttonLIst;
      }

      return results;
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

.add-composite-button {
  margin: 0 24px 24px 24px;
}

.composite {
  margin: 0 24px 24px 24px;
}

.close-icon :hover {
  cursor: pointer;
}
</style>