//import *  as Database from '../pages/db.js'; 
//import * as Database from '../pages/db.js'; 
//import Database from '../../db.js'; 


const AdminKalender = {
  template: `
  <div>
    <ansatte-header-component />
    <h1>HEI!</h1>
    <div v-for="ansatt in ansatte">
    <calendar-component :ansatte="ansatt"></calendar-component>
    </div>
  </div>
    `, 
 
 /*   computed: {
    ansatte() {
      return this.$store.state.ansatte
    }
  }
}
  */
  
  data() {
    return {
      ansatte: [
        {
          navn: "Ole Olsen",
          id: 1,
          studentnr: 345788,
          semester: 4,
          fordypning: "osteopati",
          telefon: 37242165,
          mail: "oleolsen@gmail.com",
          adresse: "Tronsheisveien 9, 0552 Oslo",
          fødselsdato: 140996
        },
        {
          navn: "Ole Olsen",
          id: 1,
          studentnr: 345788,
          semester: 4,
          fordypning: "osteopati",
          telefon: 37242165,
          mail: "oleolsen@gmail.com",
          adresse: "Tronsheisveien 9, 0552 Oslo",
          fødselsdato: 140996
        },
        {
          navn: "Lars Sønstebø",
          id: 2,
          studentnr: 345779,
          semester: 5,
          fordypning: "osteopati",
          telefon: 98261574,
          mail: "larssønstebø@gmail.com",
          adresse: "Tronsheisveien 9, 0552 Oslo",
          fødselsdato: 130598
        },
        {
          navn: "Magnus Engen",
          id: 3,
          studentnr: 345759,
          semester: 5,
          fordypning: "osteopati",
          telefon: 63203040,
          mail: "magnusengen@gmail.com",
          adresse: "Tronsheisveien 9, 0552 Oslo",
          fødselsdato: 170495
        },
        {
          navn: "Bjørn Westbye",
          studentnr: 335789,
          id: 4,
          semester: 4,
          fordypning: "osteopati",
          telefon: 17389016,
          mail: "bjørnwestbye@gmail.com",
          adresse: "Tronsheisveien 9, 0552 Oslo",
          fødselsdato: 230409
        },
        
      ]
    }; 
  }
}
//};



export default AdminKalender; 