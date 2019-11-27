const DatePickerInline = Vue.component("date-picker-inline", {
    template: `
    <div class="date-picker-inline d-flex justyfy-content-center"> 
        <v-date-picker 
        :mode='mode' 
        :attributes='attrs'
        v-model='date'
        is-inline 
        :min-date='new Date()' 
        :disabled-dates='{ weekdays: [1, 7] }'
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

export default DatePickerInline;