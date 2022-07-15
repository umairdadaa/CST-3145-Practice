const app = Vue.createApp({
    // template: '<h1>Hello {{firstName}}</>',
    data() {
        return{
            firstName: 'Umair',
            lastName: 'Dada',
            email: 'm.umairrr@outlook.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/11.jpg',
        }
    },

    methods: {
        async getUser() {
            const res = await fetch('https://randomuser.me/api')
            const {results} = await res.json()
            console.log(results)
            this.firstName = 'Talha'
            this.lastName= 'Farid'
            this.email= 'talha.farid02@gmail.com'
            this.gender= 'female'
            this.picture= 'https://randomuser.me/api/portraits/women/13.jpg'
            // console.log(this.lastName)
        },
    },
})

app.mount('#app')