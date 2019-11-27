const DatePicker = Vue.component("date-picker", {
    template: `
    <div class="date-picker d-flex justyfy-content-center"> 
        <v-date-picker 
        :mode='mode'  
        v-model='date' 
        is-expanded
        />
    </div>
    `,
    data() {
        return {
            mode: 'single',
            date: new Date(),
        }
    }
});

export default DatePicker;