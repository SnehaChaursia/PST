function leapYear(num){
    if (num%4==0&&num%100!==0){
        console.log(`${num}`)
    }
    else if (num%400==0&&num%100==0){
        console.log(`${num}`)
    }
    else {
        console.log("not a leap year")
    }
}
leapYear(2024)
leapYear(1600)
leapYear(1668)
leapYear(2025)