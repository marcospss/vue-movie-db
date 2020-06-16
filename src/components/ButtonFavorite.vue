<template>
  <div class="favorite">
    <v-btn absolute fab right top class="v-size--large" @click="triggerAction">
      <v-icon>{{ isFavorite ? "mdi-heart" : "mdi-heart-outline" }}</v-icon>
    </v-btn>
  </div>
</template>
<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapActions } = createNamespacedHelpers("favorites");
export default {
  name: "ButtonFavorite",
  props: {
    media: {
      type: Object,
      default: () => {},
      required: true
    }
  },
  data: () => ({
    isFavorite: false
  }),
  watch: {},
  async created() {
    console.log("ButtonFavorite", this.media);
  },
  methods: {
    ...mapActions(["add", "remove"]),
    triggerAction() {
      if (this.isFavorite) {
        this.remove(this.media);
        this.isFavorite = !this.isFavorite;
      }
      this.add(this.media);
      console.log("triggerAction", this.media);
      // this.isFavorite(media);
    }
  },
  computed: {
    ...mapGetters(["favorites"])
  }
};
</script>
<style lang="scss" scoped>
.favorite {
  position: relative;
  width: 100%;
  padding: 16px;
}
</style>
