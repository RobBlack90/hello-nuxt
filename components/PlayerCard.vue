<template>
  <div>
    <b-card class="text-center" bg-variant="dark" text-variant="white" :img-src="player.image">
      <b-card-text>
        <no-ssr>
          <h1>{{ getFullName(player.firstName, player.lastName, true) }}</h1>
            <h2><b-badge variant="secondary">{{player.number}}</b-badge></h2>

        </no-ssr>
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "PlayerCard",
  props: ['player'],
  data() {
    return {}
  },
  methods: {
    getFullName: (firstName, lastName, isReverse = false) => {
      let fullName = (isReverse && lastName) ? `${lastName}, ${firstName}` : firstName
      fullName += (!isReverse && lastName) ? `, ${lastName}` : ''
      return fullName
    }
  }
}
</script>

<style>
</style>