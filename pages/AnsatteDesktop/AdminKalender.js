import UserService from '../../UserService.js'; 

const AdminKalender = {
  template: `
  <div class="ansatte-kalender">
    <ansatte-header-component />
    <calendar-component /> 

   <!-- <calendar-component v-for="ansatt in ansatte" :key="ansatt.id" :ansatt="ansatt"></calendar-component> -->
  </div>
    `, 
  data() {
    return {
      tidspunkter: [],
      ansatte: [],
      rom: []
    }
  },
  created() {
    UserService.getAnsatte()
      .then(response => {
        this.ansatte = response.data
        console.log(this.ansatte)
      })
      .catch(error => {
        console.log('There was an error:', error.response)
      }),
    
    UserService.getTidspunkter() 
      .then(response => {
        this.tidspunkter = response.data
        console.log(this.tidspunkter)
      })
      .catch(error => {
        console.log('There was an error:', error.response)
      }), 
 
    UserService.getRom()
      .then(response => {
        this.rom = response.data
        console.log(this.rom)
      })
      .catch(error => {
        console.log('There was an error:', error.response)
      }),

    UserService.getBookedHours()
      .then(response => {
        this.timer = response.data 
        console.log(this.timer)
      })
      .catch(error => {
        console.log('There was an error:', error.response)
      })

    },
  
  computed: {
      activeTimes: function () {
        return this.tidspunkter.filter(function (u) {
          return u.active
        })
      }
    }
  }
export default AdminKalender; 