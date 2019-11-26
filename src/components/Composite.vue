<template>
  <v-card outlined elevation="1">
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="headline mb-1">Composite</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-row justify="space-around">
      <v-switch class="ma-2" label="타이틀"></v-switch>
      <v-switch class="ma-2" label="설명"></v-switch>
      <v-switch class="ma-2" label="요소 리스트"></v-switch>
    </v-row>
    <v-row justify="space-around">
      <v-switch class="ma-2" label="이미지"></v-switch>
      <v-switch class="ma-2" label="버튼"></v-switch>
    </v-row>
    <v-card-text class="sub-title">
      <p class="sub-title-value">타이틀</p>
    </v-card-text>
    <v-textarea class="text-content-value" counter="200" maxlength="200"></v-textarea>
    <v-card-text class="sub-title">
      <p class="sub-title-value">설명</p>
    </v-card-text>
    <v-textarea class="text-content-value" counter="1000" maxlength="1000"></v-textarea>
    <v-card-text class="sub-title">
      <p class="sub-title-value">이미지URL</p>
    </v-card-text>
    <v-text-field
      class="text-content-value"
    ></v-text-field>
  </v-card>
</template>

<script>
export default {};
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