<template>
  <section>
    <b-container fluid>
      <b-row class="header-row" align-v="start" align-h="center">
        <b-col align-self="center" class="mx-3 animated zoomIn">
          <b-img center class="team-logo" :src="team.image" fluid :alt="team.name"></b-img>
        </b-col>
      </b-row>

      <b-row align-h="center">
        <b-col class="m-3 animated fadeIn delay-1s faster" sm="3" v-for="player in players" :key="player.id">
          <nuxt-link :to="`/teams/${team.id}/players/${player.id}`">
            <player-card class="player-card" :player="player"></player-card>
          </nuxt-link>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>

import Teams from '~/components/services/Teams'
import Players from '~/components/services/Players'
import PlayerCard from '~/components/PlayerCard'

export default {
  name: "Team",
  components: { PlayerCard },
  data() {
    return {
      team: {},
      players: []
    }
  },
  async asyncData(context) {
    return {
      team: await Teams.show(context.params.team),
      players: await Players.findByTeam(context.params.team)
    }
  }
}
</script>

<style>

.team-logo {
  height: 33rem;
}

.player-card {
  transition: transform .8s;
}

.player-card:hover {
  transform: scale(1.05);
}
</style>
