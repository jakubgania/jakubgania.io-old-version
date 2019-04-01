<template>
    <v-layout row wrap>
        <v-flex lg6 offset-lg3>
            <div class="title-text">
                Visual Studio Code Shortcuts
            </div>
        </v-flex>
        <v-flex lg8 offset-lg2>
            <input v-model="inputSearch">
        </v-flex>
    </v-layout>
</template>

<script>
export default {
    data() {
        return {
            inputSearch: null,
            shortcuts: [
                
            ]
        }
    },
}
</script>

<style lang="scss" scoped>
.title-text
{
    font-size: 42px;
    margin-top: 140px;
    margin-bottom: 60px;
    text-align: center;
}
</style>
