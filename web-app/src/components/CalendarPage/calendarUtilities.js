// input: in_date: Date, in_repetition: string
export const getListOfDates = (in_date, in_repetition) => {
    let dates = [];
    if(in_repetition.contains("every")) {
        let repetitionArray = in_repetition.split();
        let repetitionNumber = parseInt(repetitionArray[1]);
        if(repetitionArray[2] == "weeks") {
            for(let i = 0; i < 10; i++) {
                dates[i] = new Date(in_date.getDate() + (repetitionNumber * 7 * i));
            }
        } else if (repetitionArray[2] == "months") {
            if(repetitionArray.length == 3) {
                for(let i = 0; i < 10; i++) {
                    dates[i] = new Date(in_date.setMonth(in_date.getMonth() + i));
                }
            } else {
                let repetitionDayNumber = repetitionArray[4];
                let weekdayNum = getWeekDayNum(repetitionArray[3]);
                let numberRepDayCounter = 0;
                for(let i = 0; i < 10; i++) {
                    let tempDate = new Date(in_date.getFullYear, in_date.getMonth() + i, 1);
                    while(numberRepDayCounter != repetitionDayNumber) {
                        tempDate.setDate(tempDate.getDate()++);
                        if(tempDate.getDay() == weekdayNum) {
                            numberRepDayCounter++;
                        }
                        
                    }
                    dates[i] = tempDate;
                    numberRepDayCounter = 0;
                }
                
            }
        }
    }
    return dates;
}

// repetitionDay: string
export const getWeekDayNum = (repetitionDay) => {
  switch(repetitionDay) {
    case "sunday":
      return 0;
    case "monday":
      return 1;
    case "tuesday":
      return 2;
    case "wednesday":
      return 3;
    case "thursday":
      return 4;
    case "friday":
      return 5;
    case "saturday":
      return 6;
    default:
      return 0;
  }
}