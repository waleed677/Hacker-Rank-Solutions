

let s = "12:00:00AM";

const timeConverion = (s) => {
    // first split the string using ths : delimeter
    let split = s.split(":");
    let time = '';
    // get the hour and the AM/PM

    let hour = split[0];
    let timeZone = split[2].slice(2);
    

    // check PM or AM

    if (timeZone == 'AM' && hour >= 12) {
        hour = parseInt(hour) - 12;
        hour = String(hour).length == 1 ? String(hour).padStart(2,'0') : hour
        time = `${hour}:${split[1]}:${split[2].slice(0,2)}`;
    } else {
        time = `${hour}:${split[1]}:${split[2].slice(0,2)}`;
    }


    if (timeZone == 'PM' && hour < 12) {
        hour = parseInt(hour) + 12;
        time = `${hour}:${split[1]}:${split[2].slice(0,2)}`;
    }

    return time;
    

}

console.log(timeConverion(s));