//import calendarServices from '../calendarServices.js'; 
//import * as ansattefrom "../db.js/";

const Calendar = Vue.component("calendar-component", {
  template: `
  <div>
    <div class="calendar">
      <div class="calendar-card">
        <h1>{{ansatte.navn}}</h1>
        <h2>{{ansatte.mail}}</h2>
        <h1>{{ansatte.fordypning}}</h1>
      </div>
    </div>
  </div>
  `,
  props: ['ansatte'],
 /* data() {
    return {
      Database: {} 
    };
  }, */
}); 

export default Calendar; 

//<!-- <router-link class="book-link" :to="{ name: 'show-book', params: { id: book.id } }"> -->
//<!-- <img class="book-image" :src="book.image" :alt="book.title" /> -->
 /*<!--     <h2>{{book.subtitle}}</h2> 
      <p>Author: {{book.author}}</p>
      
    </div>
  </router-link>
--> */