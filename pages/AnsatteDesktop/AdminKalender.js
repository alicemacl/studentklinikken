import UserService from '../../UserService.js'; 

const AdminKalender = {
  template: `
  <div class="admin-content-container">
    <ansatte-header-component />
    <h1 class="main-header margin-tb-2">Timeplan Oversikt</h1>
    <div class="filter-options">
      <div class="filter-btn-dropdown">
      <button class="filter-btn">Velg behandling</button>
      <div class="filter-btn-drop">
        <ul>
          <li>Osteopati</li>
          <li>Akupunktur</li>
          <li>Kostholdsveiledning</li>
          <li>Fysiologisk Testlab</li>
</ul>
</div>
      </div>
      <button class="filter-btn">Velg dato</button>
      <button class="filter-btn">Velg tid</button>
      <button class="filter-btn">Velg behandler</button>
    </div>
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