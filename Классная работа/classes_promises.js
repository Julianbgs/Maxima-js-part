// const pendingData = new Promise(resolve => setTimeout(resolve({
//     id: 0,
//     message: 'Data is load'
// }), 1000));

// async function getData() {
//     const data = await pendingData;
//     console.log(data.message);
// }
//
// function getData() {
//     return pendingData.then(result => result.message);
// }
//
// getData().then(result => console.log(result))

class factoryPromise {
    constructor (resolver) {
        this.resolver = resolver;
        this.isload = true;
    }

    setLoaderState(state) {
        this.isload = state
    }

    setPromise() {
        return new Promise((resolve, reject) => setTimeout(() => {
            resolve(this.resolver)
        },5000))
    }
}

const artwork_type_title_elem = document.getElementById('artwork_type_title');

const promiseFirst = new factoryPromise('https://api.artic.edu/api/v1/artworks');
if (promiseFirst.isload) {
    artwork_type_title_elem.innerHTML = `<div class="loader"></div>`
}
promiseFirst.setPromise().then(link => {
    fetch(link).then(result => result.json()).then((info) => {
        console.log(info)
        promiseFirst.setLoaderState(false)
        artwork_type_title_elem.innerHTML = info.data.map(item => item.artwork_type_title)
    })
});