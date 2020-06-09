<template>
  <v-col cols="12" xs="12" sm="6" md="4" lg="4">
    <v-card>
      <v-img
        class="white--text align-end"
        height="200px"
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      >
        <v-card-title>Top 10 Australian beaches</v-card-title>
      </v-img>

      <v-card-subtitle class="pb-0">Number 10</v-card-subtitle>

      <v-card-text class="text--primary">
        <div>Whitehaven Beach</div>

        <div>Whitsunday Island, Whitsunday Islands</div>
      </v-card-text>

      <v-card-actions>
        <v-btn
          text
          color="accent-4"
          :to="{ name: 'Details', params: { id: 1000 } }"
        >
          Read More
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>
