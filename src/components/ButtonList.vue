<template>
    <v-card class="button-list-card" outlined elevation="1">
        <v-list-item three-line>
            <v-list-item-content>
                <v-list-item-title class="headline mb-1">ButtonList</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
        <ul class="infomation">
            <li>버튼 요소 리스트</li>
            <li>버튼을 최대 10개까지 넣을 수 있습니다.</li>
            <li>빠른 답장의 경우 TEXT, LINK, PAY 타입의 버튼이 허용된다.</li>
        </ul>
        <v-btn small color="primary" class="add-button-list-button">
            <v-icon>mdi-plus</v-icon>버튼 추가</v-btn>
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

.add-button-list-button {
    margin: 0 24px 24px 24px;
}

.button-list-card {
    width: 93%;
    margin: 20px 0 28px 0;
}

.infomation {
    font-size: 14px;
    margin: 0 18px 18px 18px;
    color: rgba(0, 0, 0, 0.5);
}
</style>