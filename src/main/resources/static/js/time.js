'use strict'

let serverTime

let currentHours
let currentMinutes
let currentSeconds

let timeObj = document.getElementById('timeObj')

// server時刻を取得
fetch(window.location.href).then(res => {
    serverTime = new Date(res.headers.get('Date'))

    currentHours = serverTime.getHours()
    currentMinutes = serverTime.getMinutes()
    currentSeconds = serverTime.getSeconds()
})

// 時刻をカウントアップ
let countTimeUp = function () {
    currentTimeCalc()

    if (timeObj.childElementCount != 0) {
        timeObj.removeChild(timeObj.firstElementChild)
    }
    formattingToTimeDisplay()
}

// 現在時刻の計算
let currentTimeCalc = function () {
    currentSeconds++

    if (currentSeconds >= 60) {
        currentSeconds = 0
        currentMinutes++
    }

    if (currentMinutes >= 60) {
        currentMinutes = 0
        currentHours++
    }

    if (currentHours >= 24) {
        currentMinutes = 0
        currentHours = 0
    }
}

// 時刻形式(hh:mm:ss)に整形後、tagに配置
let formattingToTimeDisplay = function () {
    let h2 = document.createElement('h2');

    h2.innerHTML = `${currentHours}:${currentMinutes}:${currentSeconds}`

    timeObj.appendChild(h2)
}

let dateObj = document.getElementById('dateObj')

let date = new Date()

dateObj.innerHTML = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}(${date.getDay()})`

setInterval(countTimeUp, 1000)

