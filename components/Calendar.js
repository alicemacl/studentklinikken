//import TidspunkterCalendar from "./TidspunkterCalendar";
import UserService from "../../UserService.js";

//import calendarServices from '../calendarServices.js';
//import * as ansattefrom "../db.js/";

const Calendar = Vue.component("calendar-component", {
  template: `
  <div>
    <div class="calendar">
      <table class="calendar-table">
        <tr>
        <th class="room-number"><h3></h3></th>
          <th class="tid-component"
            v-for="tidspunkt in activeTimes" 
            :key="tidspunkt.id" 
            :tidspunkt="tidspunkt">
            <h3>{{tidspunkt.tid}}</h3>
          </th>
        </tr>
        <tr :key="ansatte.id" :key="kunder.id">
          <td class="room-number"><h3>Rom</h3><h2>{{rom.id=1}}</h2></td>
          <td>
            <div class="calendar-card">
             <div class="calender-info">
              <h5>08:30 - 09:15</h5>
              <h4>Konsultasjon</h4>
              <h3>Behandler: {{ansatte[20].navn}}, {{ansatte[5].navn}}</h3>
              <h3>Kunde: {{kunder[23].fornavn}} {{kunder[23].etternavn}}</h3>
              </div>
              <div class="border"></div>
            </div>
          </td> 
          <td>
            <div class="calendar-card">
            <div class="calender-info">
              <h4 class="ledig">Ledig time</h4>
              </div>
              <div class="border border-gray"></div>
            </div>
          </td>
          <td>
            <div class="calendar-card">
            <div class="calender-info">
              <h5>10:00 - 10:45</h5>
              <h4>Konsultasjon</h4>
              <h3>Behandler: {{ansatte[20].navn}}, {{ansatte[5].navn}}</h3>
              <h3>Kunde: {{kunder[12].fornavn}} {{kunder[12].etternavn}}</h3>
              </div>
              <div class="border"></div>
            </div>
          </td>
          <td class="break"></td>
          <td colspan="2">
            <div class="calendar-card">
            <div class="calender-info">
              <h5>11:15 - 12:45</h5>
              <h4>Konsultasjon</h4>
              <h3>Behandler: {{ansatte[20].navn}}, {{ansatte[5].navn}}</h3>
              <h3>Kunde: {{kunder[50].fornavn}} {{kunder[50].etternavn}}</h3>
            </div>
            <div>
              <div class="border border-darkblue"></div>
              </div>
            </div>
          </td>
          <td>
            <div class="calendar-card">
              <div class="calender-info">
              <h5>12:45 - 13:30</h5>
              <h4>Konsultasjon</h4>
              <h3>Behandler: {{ansatte[20].navn}}, {{ansatte[5].navn}}</h3>
              <h3>Kunde: {{kunder[1].fornavn}} {{kunder[1].etternavn}}</h3>
              </div>
              <div>
              <div class="border"></div>
              </div>
            </div>
          </td>
          </tr>
        <tr>
          <td class="room-number"><h3>Rom</h3><h2>{{rom.id=2}}</h2></td>
          <td colspan="2">
              <div class="calendar-card">
              <div class="calender-info">
              <h5>08:30 - 10:00</h5>
              <h4>Første konsultasjon</h4>
              <h3>Behandler: {{ansatte[10].navn}}, {{ansatte[11].navn}}</h3>
              <h3>Kunde: {{kunder[3].fornavn}} {{kunder[3].etternavn}}</h3>
              </div>
              <div class="border border-darkblue"></div>
            </div>
          </td>
          <td>
            <div class="calendar-card">
            <div class="calender-info">
              <h4 class="ledig">Ledig time</h4>
              </div>
              <div class="border border-gray"></div>
            </div>
          </td>
          <td class="break"></td>
          <td>
            <div class="calendar-card">
            <div class="calender-info">
              <h4 class="ledig">Ledig time</h4>
              </div>
              <div class="border border-gray"></div>
            </div>
          </td>
          <td colspan="2">            
            <div class="calendar-card">
            <div class="calender-info">
              <h5>12:00 - 13:30</h5>
              <h4>Første konsultasjon</h4>
              <h3>Behandler: {{ansatte[10].navn}}, {{ansatte[11].navn}}</h3>
              <h3>Kunde: {{kunder[2].fornavn}} {{kunder[2].etternavn}}</h3>
              </div>
              <div>
              <div class="border border-darkblue"></div>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td class="room-number"><h3>Rom</h3><h2>{{rom.id=3}}</h2></td>
          <td>
              <div class="calendar-card">
                <div class="calender-info">
                  <h5>08:30 - 09:15</h5>
                  <h4>Konsultasjon</h4>
                  <h3>Behandler: {{ansatte[4].navn}}, {{ansatte[10].navn}}</h3>
                  <h3>Kunde: {{kunder[7].fornavn}} {{kunder[7].etternavn}}</h3>
                </div>
                <div>
                  <div class="border"></div>
                </div>
              </div>
          </td>
          <td>
            <div class="calendar-card">
            <div class="calender-info">
              <h5>09:15 - 10:00</h5>
              <h4>Konsultasjon</h4>
              <h3>Behandler: {{ansatte[4].navn}}, {{ansatte[10].navn}}</h3>
              <h3>Kunde: {{kunder[6].fornavn}} {{kunder[6].etternavn}}</h3>
              </div>
              <div>
              <div class="border"></div>
              </div>
            </div>
          </td>
          <td>
            <div class="calendar-card">
              <div class="calender-info">
                <h4 class="ledig">Ledig time</h4>
              </div>
              <div class="border border-gray"></div>
            </div>
          </td>
          <td class="break"></td>
          <td colspan="2">
            <div class="calendar-card">
              <div class="calender-info">
              <h5>11:15 - 12:45</h5>
              <h4>Konsultasjon</h4>
              <h3>Behandler: {{ansatte[4].navn}}, {{ansatte[10].navn}}</h3>
              <h3>Kunde: {{kunder[51].fornavn}} {{kunder[51].etternavn}}</h3>
              </div>
              <div>
              <div class="border border-darkblue"></div>
              </div>
            </div>
          </td>
          <td>
            <div class="calendar-card">
              <div class="calender-info">
              <h5>12:45 - 13:30</h5>
              <h4>Konsultasjon</h4>
              <h3>Behandler: {{ansatte[4].navn}}, {{ansatte[10].navn}}</h3>
              <h3>Kunde: {{kunder[40].fornavn}} {{kunder[40].etternavn}}</h3>
              </div>
              <div>
                <div class="border"></div>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td class="room-number"><h3>Rom</h3><h2>{{rom.id=4}}</h2></td>
          <td colspan="2">
              <div class="calendar-card">
              <div class="calender-info">
              <h5>08:30 - 10:00</h5>
              <h4>Første konsultasjon</h4>
              <h3>Behandler: {{ansatte[7].navn}}, {{ansatte[8].navn}}</h3>
              <h3>Kunde: {{kunder[16].fornavn}} {{kunder[16].etternavn}}</h3>
              </div>
              <div>
              <div class="border border-darkblue"></div>
              </div>
            </div>
          </td>
          <td>
            <div class="calendar-card">
            <div class="calender-info">
              <h5>10:00 - 10:45</h5>
              <h4>Konsultasjon</h4>
              <h3>Behandler: {{ansatte[7].navn}}, {{ansatte[8].navn}}</h3>
              <h3>Kunde: {{kunder[8].fornavn}} {{kunder[8].etternavn}}</h3>
              </div>
              <div>
              <div class="border"></div>
              </div>
            </div>
          </td>
          <td class="break"></td>
          <td>
            <div class="calendar-card">
            <div class="calender-info">
              <h4 class="ledig">Ledig time</h4>
              </div>
              <div class="border border-gray"></div>
            </div>
          </td>
          <td colspan="2">
            <div class="calendar-card">
            <div class="calender-info">
              <h5>12:00 - 13:30</h5>
              <h4>Første konsultasjon</h4>
              <h3>Behandler: {{ansatte[7].navn}}, {{ansatte[8].navn}}</h3>
              <h3>Kunde: {{kunder[18].fornavn}} {{kunder[18].etternavn}}</h3>
              </div>
              <div>
              <div class="border border-darkblue"></div>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td class="room-number"><h3>Rom</h3><h2>{{rom.id=5}}</h2></td>
          <td>
              <div class="calendar-card">
              <div class="calender-info">
              <h5>08:30 - 09:15</h5>
              <h4>Konsultasjon</h4>
              <h3>Behandler: {{ansatte[3].navn}}, {{ansatte[13].navn}}</h3>
              <h3>Kunde: {{kunder[17].fornavn}} {{kunder[17].etternavn}}</h3>
              </div>
              <div>
              <div class="border"></div>
              </div>
            </div>
          </td>
          <td>
            <div class="calendar-card">
            <div class="calender-info">
              <h5>09:15 - 10:00</h5>
              <h4>Konsultasjon</h4>
              <h3>Behandler: {{ansatte[3].navn}}, {{ansatte[13].navn}}</h3>
              <h3>Kunde: {{kunder[10].fornavn}} {{kunder[10].etternavn}}</h3>
              </div>
              <div>
              <div class="border"></div>
              </div>
            </div>
          </td>
          <td>
            <div class="calendar-card">
            <div class="calender-info">
              <h4 class="ledig">Ledig time</h4>
              </div>
              <div class="border border-gray"></div>
            </div>
          </td>
          <td class="break"></td>
          <td>
            <div class="calendar-card">
            <div class="calender-info">
              <h5>11:15 - 12:00</h5>
              <h4>Konsultasjon</h4>
              <h3>Behandler: {{ansatte[3].navn}}, {{ansatte[13].navn}}</h3>
              <h3>Kunde: {{kunder[11].fornavn}} {{kunder[11].etternavn}}</h3>
              </div>
              <div>
              <div class="border"></div>
              </div>
            </div>
          </td>
          <td colspan="2">
              <div class="calendar-card">
              <div class="calender-info">
              <h5>12:00 - 13:30</h5>
              <h4>Første konsultasjon</h4>
              <h3>Behandler: {{ansatte[3].navn}}, {{ansatte[13].navn}}</h3>
              <h3>Kunde: {{kunder[22].fornavn}} {{kunder[22].etternavn}}</h3>
              </div>
              <div>
              <div class="border border-darkblue"></div>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td class="room-number"><h3>Rom</h3><h2>{{rom.id=6}}</h2></td>
          <td>
            <div class="calendar-card">
            <div class="calender-info">
              <h5>08:30 - 09:15</h5>
              <h4>Konsultasjon</h4>
              <h3>Behandler: {{ansatte[15].navn}}, {{ansatte[16].navn}}</h3>
              <h3>Kunde: {{kunder[24].fornavn}} {{kunder[24].etternavn}}</h3>
              </div>
              <div>
              <div class="border"></div>
              </div>
            </div>
          </td>
          <td>
            <div class="calendar-card">
            <div class="calender-info">
              <h4 class="ledig">Ledig time</h4>
              </div>
              <div class="border border-gray"></div>
            </div>
          </td>
          <td>
            <div class="calendar-card">
            <div class="calender-info">
              <h4 class="ledig">Ledig time</h4>
              </div>
              <div class="border border-gray"></div>
            </div>
          </td>
          <td class="break"></td>
          <td>            
            <div class="calendar-card">
            <div class="calender-info">
              <h5>11:15 - 12:00</h5>
              <h4>Konsultasjon</h4>
              <h3>Behandler: {{ansatte[15].navn}}, {{ansatte[16].navn}}</h3>
              <h3>Kunde: {{kunder[26].fornavn}} {{kunder[26].etternavn}}</h3>
              </div>
              <div>
              <div class="border"></div>
              </div>
            </div>
          </td>
          <td>            
            <div class="calendar-card">
            <div class="calender-info">
              <h5>12:00 - 12:45</h5>
              <h4>Konsultasjon</h4>
              <h3>Behandler: {{ansatte[15].navn}}, {{ansatte[16].navn}}</h3>
              <h3>Kunde: {{kunder[16].fornavn}} {{kunder[16].etternavn}}</h3>
              </div>
              <div>
              <div class="border"></div>
              </div>
            </div>
          </td>
          <td>
            <div class="calendar-card">
            <div class="calender-info">
              <h4 class="ledig">Ledig time</h4>
              </div>
              <div class="border border-gray"></div>
            </div>
          </td>
        </tr>
        <tr>
          <td class="room-number"><h3>Rom</h3><h2>{{rom.id=7}}</h2></td>
          <td>
            <div class="calendar-card">
            <div class="calender-info">
              <h4 class="ledig">Ledig time</h4>
              </div>
              <div class="border border-gray"></div>
            </div>
          </td>
          <td>
              <div class="calendar-card">
              <div class="calender-info">
              <h5>08:30 - 09:15</h5>
              <h4>Konsultasjon</h4>
              <h3>Behandler: {{ansatte[23].navn}}, {{ansatte[22].navn}}</h3>
              <h3>Kunde: {{kunder[31].fornavn}} {{kunder[31].etternavn}}</h3>
              </div>
              <div>
              <div class="border"></div>
              </div>
            </div>
          </td>
          <td>
            <div class="calendar-card">
            <div class="calender-info">
              <h5>09:15 - 10:00</h5>
              <h4>Konsultasjon</h4>
              <h3>Behandler: {{ansatte[23].navn}}, {{ansatte[22].navn}}</h3>
              <h3>Kunde: {{kunder[1].fornavn}} {{kunder[1].etternavn}}</h3>
              </div>
              <div>
              <div class="border"></div>
              </div>
            </div>
          </td>
          <td class="break"></td>
          <td colspan="2">
            <div class="calendar-card">
            <div class="calender-info">
              <h5>11:15 - 12:45</h5>
              <h4>Første konsultasjon</h4>
              <h3>Behandler: {{ansatte[23].navn}}, {{ansatte[22].navn}}</h3>
              <h3>Kunde: {{kunder[1].fornavn}} {{kunder[1].etternavn}}</h3>
              </div>
              <div>
              <div class="border border-darkblue"></div>
              </div>
            </div>
          </td>
          <td>
            <div class="calendar-card">
            <div class="calender-info">
              <h4 class="ledig">Ledig time</h4>
              </div>
              <div class="border border-gray"></div>
            </div>
          </td>
        </tr>
      </table>
    </div>
  </div>
  `,
  props: {
    //ansatt: Object,
    rom: Object,
    tidspunkt: Object,
    ansatt: Object,
    kunde: Object
  },
  data() {
    return {
      tidspunkter: [],
      rom: [],
      timer: [],
      ansatte: [],
      kunder: []
    };
  },
  created() {
    UserService.getTidspunkter()
      .then(response => {
        this.tidspunkter = response.data;
        console.log(this.tidspunkter);
      })
      .catch(error => {
        console.log("There was an error:", error.response);
      }),
      UserService.getRom()
        .then(response => {
          this.rom = response.data;
          console.log(this.rom);
        })
        .catch(error => {
          console.log("There was an error:", error.response);
        }),
      UserService.getKunder()
        .then(response => {
          this.kunder = response.data;
          console.log(this.kunder);
        })
        .catch(error => {
          console.log("There was an error:", error.response);
        }),
      UserService.getAnsatte()
        .then(response => {
          this.ansatte = response.data;
          console.log(this.ansatte);
        })
        .catch(error => {
          console.log("There was an error:", error.response);
        });
  },
  computed: {
    activeTimes: function() {
      return this.tidspunkter.filter(function(u) {
        return u.active;
      });
    }
  }
});

export default Calendar;

//<!-- <router-link class="book-link" :to="{ name: 'show-book', params: { id: book.id } }"> -->
//<!-- <img class="book-image" :src="book.image" :alt="book.title" /> -->
/*<!--     <h2>{{book.subtitle}}</h2> 
      <p>Author: {{book.author}}</p>
      
    </div>
  </router-link>
--> */
