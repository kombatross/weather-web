let clockHolder = document.querySelector('.clock')
let date = new Date()
    clockHolder.innerHTML = `${date.getHours()}:`+`${date.getMinutes()}`
setInterval(() => {
    clockHolder.innerHTML = `${date.getHours()}:`+`${date.getMinutes()}`
}, 30000);


// console.log(date.getDay());





