const displayAllUsersEmail = () => {
    fetch(`./data/users/${user.uid}.json`)
        .then(response => response.json())
        .then(users => {
            let promisesResolved = 0
            const numberOfUsers = users.length
            const fetchArray = []

            users.forEach(user => {
                fetchArray.push(
                    fetch(`./data/users/${user.uid}.json`)
                        .then(response => response.json())
                        .then(data => {
                            promisesResolved++

                            if (numberOfUsers === promisesResolved) {
                                fetchArray.forEach(surlyResolvedPromise => {
                                    // here we ca be sure that promise
                                    surlyResolvedPromise.then(console.log)
                                })
                            }

                            return data
                        })
                )
            })
        })
}

displayAllUsersEmail()