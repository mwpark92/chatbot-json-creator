<template>
    <v-card class="element-list-card" outlined elevation="1">
        <v-list-item three-line>
            <v-list-item-content>
                <v-list-item-title class="headline mb-1">ElementList</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
        <ul class="infomation">
            <li> ElementData를 최대 3개까지 넣을 수 있습니다.</li>
            <li>ElementData는 Composite에서 이미지와 타이틀 사이에 위치하는 작은 영역입니다.</li>
            <li>이 영역은 복잡한 내용보다는 Composite를 뒷받침하는 간략한 내용으로 구성하는 것을 권장합니다.</li>
        </ul>
        <v-btn small color="primary" class="add-element-button">
            <v-icon>mdi-plus</v-icon>요소 추가</v-btn>
    </v-card>
</template>

<script>
export default {

}
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

.add-element-button {
    margin: 0 24px 24px 24px;
}

.element-list-card {
    width: 93%;
    margin: 10px 0 0 0;
}

.infomation {
    font-size: 14px;
    margin: 0 18px 18px 18px;
    color: rgba(0, 0, 0, 0.5);
}
</style>