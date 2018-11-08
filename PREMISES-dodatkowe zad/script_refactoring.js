class App {
    constructor() {
        this.listView = new ListView()
        this.userView = new UserView()
        this.notFoundView = new NotFoundView()

        this.init()
    }

    init() {
        this.renderView('listView')
    }

    renderView(viewName, params) {
        params = params || {}
        params = Object.assign(params, { renderView: this.renderView.bind(this) })

        this[viewName].render(params)
            .then(viewContent => this.render(viewContent))
            .catch(() => this.render(this.notFoundView.render()))
    }

    render(viewContent) {
        document.body.innerHTML = ''
        document.body.appendChild(viewContent)
    }
}

class ListView {
    render(params) {
        const promise = fetch('./data/users.json')
            .then(response => response.json())
            .then(data => {
                const div = document.createElement('div')

                data.forEach(user => {
                    const userDiv = document.createElement('div')
                    userDiv.innerText = `${user.name} ${user.lastname}`
                    userDiv.addEventListener(
                        'click',
                        () => params.renderView('userView', { uid: user.uid })
                    )
                    div.appendChild(userDiv)
                })

                return div
            })

        return promise
    }
}

class UserView {
    render(params) {
        const promise = fetch(`./data/users/${params.uid}.json`)
            .then(response => response.json())
            .then(data => {
                const div = document.createElement('div')
                const img = document.createElement('img')
                const textDiv = document.createElement('div')
                img.setAttribute('src', data.avatar)
                textDiv.innerText = data.email
                div.appendChild(img)
                div.appendChild(textDiv)
                return div
            })

        return promise
    }
}

class NotFoundView {
    render() {
        const div = document.createElement('div')
        div.innerText = 'NotFoundView'
        return Promise.resolve(div)
    }
}

const app = new App()