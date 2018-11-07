// const promise = fetch('https://randomuser.me/api')
// creation of promise is sync!
const promise = fetch('https://randomuser.me/api')
// const promise2 = promise.then(response => response.json())
// then is for registering functions that will be called when promise will be resolved
promise
    .then(() => {
        console.log('Im on the function that will be called when promise is resolved!')
    })
// const promise3 = promise2.then(data => console.log(data.results[0].name.first))
// then is sync and returns NEW promise
// function that is passed as arg into then will be called async when 
// promise will be resolved
const promise2 = promise.then(() => { })
fetch('https://randomuser.me/api')
    .then(response => response.json())
    .then(data => {
        console.log(data.results[0].name.first)
        return data
    })
    .then(data => {
        console.log(data.results[0].name.last)
        return data
    })
    .then(data => {
        console.log(data.results[0].name.first)
        return data
    })

    then(data=>result(console.log(data.results[0].name.first))