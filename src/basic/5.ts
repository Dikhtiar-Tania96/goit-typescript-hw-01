enum DayOfWeek {
      Monday,
      Tuesday,
      Wednesday,
      Thursday,
      Friday,
      Saturday,
      Sunday
    }
    
    
    const dayWeekend = (day : DayOfWeek) : boolean => {
        return day === DayOfWeek.Saturday || day === DayOfWeek.Sunday
    }
    