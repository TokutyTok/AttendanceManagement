'use strict'

let serverTime

let currentYear
let currentMonth
let currentDate
let currentDay

let currentHours
let currentMinutes
let currentSeconds

let timeObj
let dateObj

// DOM構築後の設定
document.addEventListener("DOMContentLoaded", (event) => {
    timeObj = document.getElementById('timeObj')
    dateObj = document.getElementById('dateObj')

    setServerTime()

    setInterval(countTimeUp, 1000)
})

let setServerTime = function () {
    // server時刻を取得後、設定
    fetch(window.location.href).then(res => {
        serverTime = new Date(res.headers.get('Date'))

        currentYear = serverTime.getFullYear()
        currentMonth = serverTime.getMonth()
        currentDate = serverTime.getDate()
        currentDay = serverTime.getDay()

        currentHours = serverTime.getHours()
        currentMinutes = serverTime.getMinutes()
        currentSeconds = serverTime.getSeconds()

        timeObj.firstElementChild.innerHTML = formattingToTimeDisplay()
    })
}

// 時刻をカウントアップ
let countTimeUp = function () {
    currentTimeCalc()

    timeObj.firstElementChild.innerHTML = formattingToTimeDisplay()
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
        currentHours = 0
    }
}

// 時刻形式(hh:mm:ss)に整形
let formattingToTimeDisplay = function () {
    return `${currentHours}:${currentMinutes}:${currentSeconds}`
}

// TODO:日跨り時の仕様
// 年-月-日-曜日を設定
let setDate = function () {
    dateObj.firstElementChild.innerHTML = `${currentYear}/${currentMonth + 1}/${currentDate}(${currentDay})`

    dateObj.appendChild(h3)
}

