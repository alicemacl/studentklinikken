import UserService from '../../UserService.js'; 

const AnsatteBehandlere = {
    template: `
    <div>
        <ansatte-header-component />
        <div class="behandlere">
            <div class="row headline">
                <h1 class="col">Behandlere</h1>
            </div>
            <input class="inputfield" placeholder="Søk...">
            <table>
                <thead> 
                    <tr>
                        <th>Navn</th>
                        <th>Studie</th>
                        <th>Semester</th> 
                        <th></th> 
                    </tr> 
                </thead>
                <tr v-for="(ansatt, idx) in ansatte">
                    <td>{{ansatt.navn}}</td>
                    <td>{{ansatt.fordypning }}</td>
                    <td>{{ansatt.semester}} </td>
                    <td class="link-til-behandlere">
                        <router-link class="behandlere-link" :to="{name: 'behandlere', params: {id: ansatt.id}}">
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
            ansatte: []
        };
    }, 
    created() {
        UserService.getAnsatte()
            .then(response => {
                this.ansatte = response.data
                console.log(this.ansatte)
            })
            .catch(error => {
                console.log('There was an error:', error.response)
            })
    }
};

export default AnsatteBehandlere;