import UserService from '../../UserService.js'; 

const AnsatteKunder = {
    template: `
    <div>
        <ansatte-header-component />
        <div class="behandlere">
            <div class="row headline">
                <h1 class="col">Kunder</h1>
            </div>
            <input class="inputfield" placeholder="Søk...">
            <table>
                <thead> 
                    <tr>
                        <th>Navn</th>
                        <th>Telefon</th>
                        <th>Epost</th>
                        <th></th> 
                    </tr> 
                </thead>
                <tr v-for="(kunde, idx) in kunder">
                    <td>{{kunde.fornavn}} {{kunde.etternavn}}</td>
                    <td>{{kunde.telefon }}</td>
                    <td>{{kunde.mail}} </td>               
                    <td class="link-til-behandlere">
                        <router-link class="behandlere-link" :to="{name: 'kunder', params: {id: kunde.id}}">
                            Se/endre
                        </router-link>
                    </td>
                </tr>
            </table> 
        </div>

    </div>
    `, 
    data() {
        return {
            kunder: []
        };
    }, 
    created() {
        UserService.getKunder()
            .then(response => {
                this.kunder = response.data
                console.log(this.kunder)
            })
            .catch(error => {
                console.log('There was an error:', error.response)
            })
    }
};

export default AnsatteKunder;