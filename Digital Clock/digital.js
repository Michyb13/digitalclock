let minute =""
let hour =""
let second =""
let day =""
let period =""
let month =""
let year = ""
const fullTime= document.getElementById("time")
const fullDate = document.getElementById("date")



function currentTime(){
    const date = new Date()
    second = date.getSeconds()
    minute = date.getMinutes()
    hour =date.getHours()
    if(hour>= 12){
        period= "PM"
    }else{
        period ="AM"
    }
    
    if(hour === 0){
        hour = 12
    }else if(hour > 12){
        hour -= 12
    }
    second =update(second)
    minute =update(minute)
    hour =update(hour)
    fullTime.textContent = `${hour}:${minute}:${second} ${period}`
    setInterval(currentTime,1000)
}

function todayDate(){
    const date = new Date()
    day = date.getDate()
    month = date.getMonth() + 1
    year = date.getFullYear()

    day =update(day)
    month =update(month)

 fullDate.textContent = `${day}/${month}/${year}`
 setInterval(todayDate, 1000)
}


function update(t){
    if(t < 10){
        return `0${t}`
    }else{
        return t
    }
 }



 currentTime()
 todayDate()







