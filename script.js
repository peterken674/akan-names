function getBirthday() {
    let dateInput = document.getElementById("date").value;
    let date = new Date(dateInput);

    if (!!date.valueOf()) {
        let year = date.getFullYear().toString();
        // let MM = date.getMonth()+1;
        // let DD = date.getDate();
        // let CC = parseInt(year.slice(0,2));
        // let YY = parseInt(year.slice(2,4));
        // let dayOfWeek = (((CC / 4) - 2 * CC - 1) + (5 * YY / 4) + (26 * (MM + 1) / 10) + DD) % 7;
        let dayOfWeek = date.getDay();
        alert(dayOfWeek);
    }
    else{
        alert("Please select your birthday.")
    }
}