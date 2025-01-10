let navigator = document.querySelector('.navigator')
navigator.addEventListener('click', () => {
    console.log('ok');
    if (window.navigator.clipboard) {
        window.navigator.clipboard.readText()
            .then(res => console.log(res))
    }
})