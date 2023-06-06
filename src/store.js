import { reactive } from "vue";

export const store = reactive({
    apiURL: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0",
    apiArchURL: "https://db.ygoprodeck.com/api/v7/archetypes.php",
    archList: [],
    cardsList: [],
    loading: true //flag for loader before content is ready
});