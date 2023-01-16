class ApiService {
    constructor() {
        this.baseURL = 'http://localhost:3000'
    }

    async fetchCreateList(listData) {
        let configObj = {
            method: 'POST',
            body: JSON.stringify(listData),
            geaders: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }

        let res = await fetch(this.baseURL + `/lists`, configObj)
        let data = await res.json()
        return data
    }

    async fetchLists() {
        let res = await fetch(this.baseURL + `/lists`)
        let data = await res.json()
        return data
    }
}


