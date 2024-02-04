function calculateNextDay(year, month, day) {

    const currentDate = new Date(year, month - 1, day);
    const nextDay = new Date(currentDate);
    
    nextDay.setDate(currentDate.getDate() + 1);

    const nextYear = nextDay.getFullYear();
    const nextMonth = nextDay.getMonth() + 1;
    const nextDayOfMonth = nextDay.getDate();

     console.log(`${nextYear}-${String(nextMonth)}-${String(nextDayOfMonth)}`);
}

calculateNextDay(2016, 9, 30);
