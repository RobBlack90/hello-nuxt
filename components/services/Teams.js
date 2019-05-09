import teamData from '@/assets/data/teamData'

let get = () => new Promise(resolve => {
  setTimeout(() => {
    resolve(teamData)
  }, 1500)
})

let show = (id) => new Promise(resolve => {
  setTimeout(() => {
    resolve(teamData.find(function(team) {
      return team.id  === id;
    }))
  }, 1500)
})

export default {
  get,
  show
}