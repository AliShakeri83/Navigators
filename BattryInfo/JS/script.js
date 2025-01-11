let navigators = document.querySelector('.navigator')

navigators.addEventListener('click', () => {
    if (window.navigator.getBattery) {
        window.navigator.getBattery()
            .then(data => {
                console.log(data);

                data.addEventListener('levelchange', (e) => {
                    console.log(e);
                })

                data.addEventListener('chargingtimechange', (e) => {
                    console.log(e);
                })
                
            })
    }
})
