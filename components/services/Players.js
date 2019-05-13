import playerData from '@/assets/data/playerData'

let get = () => new Promise(resolve => {
  setTimeout(() => {
    resolve(playerData)
  }, 500)
})

let show = (id) => new Promise(resolve => {
  setTimeout(() => {
    resolve(playerData.find(function(player) {
      return player.id  === id;
    }))
  }, 3500)
})

let findByTeam = (teamId) => new Promise(resolve => {
  setTimeout(() => {
    resolve(playerData.filter(function(player) {
      return player.teamId  === teamId;
    }))
  }, 500)
})

export default {
  get,
  show,
  findByTeam
}