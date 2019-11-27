const TidspunkterCalendar = Vue.component('tidspunkter-component', {
    template: `
    <div class="d-flex ">
    <h3 class="container-calendar justify-content-between"> {{ tidspunkt.tid }}</h3>
    </div>
    `,
    props: {
        tidspunkt: Object 
    }
})

export default TidspunkterCalendar; 