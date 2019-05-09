<template>
  <section>
    <b-container fluid>
      <b-row class="header-row" align-v="start" align-h="center">
        <b-col class="m-5">
          <b-img center class="header-image" src="/SpaceJam.png" fluid alt="Space Jam"></b-img>
        </b-col>
      </b-row>
      <b-row class="text-center" align-v="center">
        <b-col>
          <nuxt-link :to="`/teams/${teams[0].id}`">
            <b-img center class="team-image mx-5" :src="teams[0].image" fluid :alt="teams[0].name"></b-img>
          </nuxt-link>
        </b-col>
        <b-col>
          <b-img center class="vs-image" src="/vs.svg" fluid alt="vs"></b-img>
        </b-col>
        <b-col>
          <nuxt-link :to="`/teams/${teams[1].id}`">
            <b-img center class="team-image mx-5" :src="teams[1].image" fluid :alt="teams[1].name"></b-img>
          </nuxt-link>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>

import Teams from '~/components/services/Teams'

export default {
  name: "Home",
  components: {  },
  data() {
    teams: []
  },
  async asyncData() {
    return {
      teams: await Teams.get()
    }
  }
}
</script>

<style>
.team-image {
  height: 23rem;
  transition: transform .5s;

}

.vs-image {
  height: 13rem;
}

.header-image {
  height: 28rem;
    -webkit-mask-image: -webkit-gradient(linear, left top, left bottom, 
    from(rgba(0,0,0,1)), to(rgba(0,0,0,.5)));
}

.team-image:hover {
  transform: scale(1.1); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
  cursor: pointer;
}
</style>
