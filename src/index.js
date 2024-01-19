let oneYearInMonthsWeeksDaysHoursMinutesSeconds = [
    [12, 52, 365, 8760, 525600, 31536000]
]

//função que faz a conversão
function convert(name, multiplier){
    
    console.log(`Olá, ${name} você tem: `)
     
    months = oneYearInMonthsWeeksDaysHoursMinutesSeconds[0][0] * multiplier
    console.log(months + " meses")

    weeks = oneYearInMonthsWeeksDaysHoursMinutesSeconds[0][1] * multiplier
    console.log(weeks + " semanas")

    days = oneYearInMonthsWeeksDaysHoursMinutesSeconds[0][2] * multiplier
    console.log(days + " dias")

    hours = oneYearInMonthsWeeksDaysHoursMinutesSeconds[0][3] * multiplier
    console.log(hours + " horas")

    minutes = oneYearInMonthsWeeksDaysHoursMinutesSeconds[0][4] * multiplier
    console.log(hours + " minutos")

    seconds = oneYearInMonthsWeeksDaysHoursMinutesSeconds[0][5] * multiplier
    console.log(seconds + " segundos")

    result = [months, weeks, days, hours, minutes, seconds]
    console.log(result + " de vida")

}

convert("pedro", 19)
convert("josé", 26)
convert("invisível", 0)