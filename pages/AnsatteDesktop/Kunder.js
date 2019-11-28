import UserService from '../../UserService.js'; 

const Kunder = {
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
                
                <h2>Kunde: {{kunde.fornavn}} {{kunde.etternavn}}</h2>

                <div class="ansatt-box row">
                    <div class="box-text">
                        <div class="col">
                            <h4 class="row">Navn</h4>
                            <h5 class="row">{{kunde.fornavn}} {{kunde.etternavn}}</h5>
                        </div>
                        <div class="col">
                            <h4 class="row">Fødselsdato</h4>
                            <h5 class="row">{{kunde.fødselsdato}}</h5>
                        </div>
                        <div class="col">
                            <h4 class="row">Telefon</h4>
                            <h5 class="row">{{kunde.telefon}}</h5>
                        </div>
                        <div class="col">
                            <h4 class="row">Epost</h4>
                            <h5 class="row">{{kunde.mail}}</h5>
                        </div>
                        <div class="col">
                            <h4 class="row">Adresse</h4>
                            <h5 class="row">{{kunde.adresse}}</h5>
                        </div>  
                        <div class="col">
                            <h4 class="row">Prisgruppe</h4>
                            <h5 class="row">{{kunde.prisgruppe}}</h5>
                        </div>                
                    </div>
                    <div class="box-img">
                        <img class="ansatt-img" src="../../assets/blank-profile-picture.png">
                    </div>
                    <!--
                    <div class="">
                        <button class="inactive-btn">Slett kunde</button>
                    </div>
-->
                </div>
            </div>
        </div>
    </div>
    `, 
    props: ['id'], 
    data() {
        return {
            kunde: {}
        }
    }, 
    created() {
        UserService.getKunde(this.id)
            .then(response => {
                this.kunde = response.data
                console.log(this.kunde)
            })
            .catch(error => {
                console.log('There was an error:', error.response)
            })
    }
}

export default Kunder; 