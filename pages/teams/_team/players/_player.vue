<template>
  <b-container fluid>
    <b-row class="justify-content-md-center" align-v="center">
      <b-col cols="8" class="mt-5 animated fadeIn">
        <b-card bg-variant="dark" text-variant="white">
          <b-media no-body>
            <b-media-aside vertical-align="center">
              <b-img :src="player.image" alt="placeholder"></b-img>
            </b-media-aside>

            <b-media-body class="ml-3">
              <h1 class="mt-0"> 
                <span><b-img slot="aside" :src="team.image" width="64" height="64" alt="placeholder"></b-img></span>
                {{ player.firstName + ' ' + player.lastName + ' #' + player.number}}
              </h1>
              <b-media align-v="center">
                <p class="stat"><span class="label">Height: </span>{{ player.height }}</p>
                <p class="stat"><span class="label">Weight: </span>{{ player.weight }}</p>
                <p class="stat"><span class="label">Position: </span>{{ player.position }}</p>
              </b-media>
            </b-media-body>
          </b-media>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>

import Teams from '~/components/services/Teams'
import Players from '~/components/services/Players'
import PlayerCard from '~/components/PlayerCard'

export default {
  name: "Team",
  components: { PlayerCard },
  data() {
    return {}
  },
  async asyncData(context) {
    return {
      team: await Teams.show(context.params.team),
      player: await Players.show(context.params.player)
    }
  }
}
</script>

<style>

.stat {
  font-size: 1.5rem;
}
.label {
  font-weight: bold;
}
</style>
