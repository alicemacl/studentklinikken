
const apiClient = axios.create({
    baseURL: `http://localhost:3000`, 
    withCredentials: false, 
    headers: {
        'Accept': 'application/json', 
        'Content-Type': 'application/json'
    }
})

export default {
    getAnsatte() {
        return apiClient.get('/ansatte'); 
    },
    getAnsatt(id) {
        return apiClient.get('/ansatte/' + id)
    },
   
    getKunder() {
        return apiClient.get('/kunder')
    },
    getKunde(id) {
        return apiClient.get('/kunder/' + id)
    }, 

    getTidspunkter() {
        return apiClient.get('/tidspunkter');
    },
    getRom() {
        return apiClient.get('/rom'); 
    },
    getBookedHours() {
        return apiClient.get('/timer'); 
    }
}