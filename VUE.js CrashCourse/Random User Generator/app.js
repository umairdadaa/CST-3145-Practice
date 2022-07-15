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
            this.firstName = results[0].name.first
            this.lastName= results[0].name.last
            this.email= results[0].email
            this.gender= results[0].gender
            this.picture= results[0].picture.large
            // console.log(this.lastName)
        },
    },
})

app.mount('#app')