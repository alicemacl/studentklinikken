import UserService from '../../UserService.js'; 

const Behandlere = {
    template: `
    <div>
        <ansatte-header-component />
        <div class="behandlere-id">
            <div class="show-ansatt">
                <div class="tilbake-til-behandlere">
                     <router-link to='/'>
                        <h3 class="">
                            <img class="arrow-left" src="../../assets/arrow-right.png">Tilbake
                        </h3> 
                    </router-link>
                </div>

                <h2>Behandler: {{ansatt.navn}}</h2>

                <div class="ansatt-box row">
                    <div class="box-text">
                        <div class="col">
                            <h4 class="row">Navn</h4>
                            <h5 class="row">{{ansatt.navn}}</h5>
                        </div>
                        <div class="col">
                            <h4 class="row">Fødselsdato</h4>
                            <h5 class="row">{{ansatt.fødselsdato}}</h5>
                        </div>
                        <div class="col">
                            <h4 class="row">Studie</h4>
                            <h5 class="row">{{ansatt.fordypning}}, {{ansatt.semester}}. semester</h5>
                        </div>
                        <div class="col">
                            <h4 class="row">Studentnummer</h4>
                            <h5 class="row">{{ansatt.studentnr}}</h5>
                        </div>
                        <div class="col">
                            <h4 class="row">Status</h4>
                            <h5 class="row">Aktiv</h5>
                        </div>                
               <!--     </div>
                    <div> -->
                    </div>
                    <div class="box-img">
                        <img class="ansatt-img" src="../../assets/blank-profile-picture.png">
                    </div>
                    <div class="">
                        <button class="inactive-btn">Gjør inaktiv</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `, 
    props: ['id'], 
    data() {
        return {
            ansatt: {}
        }
    }, 
    created() {
        UserService.getAnsatt(this.id)
            .then(response => {
                this.ansatt = response.data
                console.log(this.ansatt)
            })
            .catch(error => {
                console.log('There was an error:', error.response)
            })
    }
}

export default Behandlere; 