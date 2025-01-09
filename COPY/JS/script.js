let navigators = document.querySelector('.navigator')

navigators.addEventListener('click', () => {
    console.log('ok');
    let mainText = 'hello ali'
    window.navigator.clipboard.writeText(mainText)
})
