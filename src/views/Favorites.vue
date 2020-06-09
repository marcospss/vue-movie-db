<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="4">
        <v-card>
          <v-img
            height="250"
            src="https://image.tmdb.org/t/p/w300/vw3zNfzvnVNF7nIjpiEgcdznfeC.jpg"
          ></v-img>
          <v-card-title>Mortal Kombat Legends: Scorpion's Revenge</v-card-title>
          <v-card-text>
            <v-row align="center" class="mx-0">
              <v-rating
                :value="4.5"
                color="amber"
                dense
                half-increments
                readonly
                size="14"
              ></v-rating>

              <div class="grey--text ml-4">4.5 (413)</div>
            </v-row>
            <div>
              After the vicious slaughter of his family by stone-cold mercenary Sub-Zero, Hanzo Hasashi is exiled to the torturous Netherrealm. There, in exchange for his servitude to the sinister Quan Chi, he’s given a chance to avenge his family – and is resurrected as Scorpion, a lost soul bent on revenge. Back on Earthrealm, Lord Raiden gathers a team of elite warriors – Shaolin monk Liu Kang, Special Forces officer Sonya Blade and action star Johnny Cage – an unlikely band of heroes with one chance to save humanity. To do this, they must defeat Shang Tsung’s horde of Outworld gladiators and reign over the Mortal Kombat tournament.
            </div>
          </v-card-text>
          <v-divider class="mx-4"></v-divider>
          <v-card-actions>
            <v-btn color="lighten-2" text>
              Read More
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Favorites",
  data: () => ({})
};
</script>
