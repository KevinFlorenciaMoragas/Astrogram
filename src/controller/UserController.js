const API_URL = 'https://ricardhernandez.com/api'

class UserController {
    constructor() {
        this.API_URL = API_URL;
    }
    async logout(){
        const response = await fetch(`${this.API_URL}/logout`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                name,
                password
            })
        })
        const data = await response.json()
        return data
    }
    async login(name, password) {
        const response = await fetch(`${this.API_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                name,
                password
            })
        })
        const data = await response.json()
        return data
    }
    async register(name, password) {
        const response = await fetch(`${this.API_URL}/register`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                name,
                password
            })
        })
        const data = await response.json()
        return data
    }
    async refresh() {
        const response = await fetch(`${this.API_URL}/refresh`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }

        })
        const data = await response.json()
        return data
    }
}
export default UserController