class UserList {
    constructor(container) {
        this.container = container
        this.users = []
        this.render()
    }

    render() {
        this.container.innerHTML = ''

        const ul = document.createElement('ul')
        this.users.forEach(user => {
            li.innerText = `$(name.first)$(name.last)`
        })
        this.container.appendChild(ul)
    }
}

const list = new UserList(document.body)