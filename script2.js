
fetch('https://randomuser.me/api?results=10')
    .then(response => response.json())
    .then(data => {
        for (let i = 0; i < 10; ++i) {
            console.log(data.results[i].name.first)
        }
    })

//II sposób:
fetch('https://randomuser.me/api?results=10')
    .then(response => response.json())
    .then(data => data.results.forEach(user => console.log(user.name.first)))
    .catch(error => console.log('ERROR!!!!', error))