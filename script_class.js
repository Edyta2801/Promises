class UserList {
    constructor(container, numberOfUsers) {
        this.container = container
        this.numberOfUsers = numberOfUsers
        this.users = []

        this.init()
    }

    init(){
        this.render()
        this.fetchUsers()
    }

    fetchUsers(){
        fetch('https://randomuser.me/api/?results=' + this.numberOfUsers)
            .then(response => response.json())
            .then(this.setUsers.bind(this))
    }

    setUsers(data){
        this.users = data.results
        this.render()
    }

    render() {
        this.container.innerHTML = ''

        const ul = document.createElement('ul')

        this.users.forEach((user, userIndex) => {
            const li = document.createElement('li')
            const button = document.createElement('button')

            li.innerText = `${user.name.first} ${user.name.last}`
            button.innerText = 'X'

            li.addEventListener('click', (e) => this.onUserClickHandler(user))
            button.addEventListener('click', (e) => this.onUserDeleteClickHandler(e, userIndex))

            li.appendChild(button)
            ul.appendChild(li)
        })

        this.container.appendChild(ul)
    }

    onUserClickHandler(user){
        alert(user.email)
    }

    onUserDeleteClickHandler(e, userIndex){
        e.stopPropagation()
        this.users = this.users.slice(0, userIndex).concat(this.users.slice(userIndex + 1))
        this.render()
    }
}

const list = new UserList(document.body, 4)