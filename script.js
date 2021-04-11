function getBirthday() {
    let dateInput = document.getElementById("date").value;
    let date = new Date(dateInput);

    if (!!date.valueOf()) {
        let year = date.getFullYear().toString();
        let month = date.getMonth()+1;
        let dayOfMonth = date.getDate();
        let dayOfWeek = date.getDay();
        let CC = parseInt(year.slice(0,2));
        let YY = parseInt(year.slice(2,4));
        alert(dayOfWeek);
    }
    else{
        alert("Please select your birthday.")
    }
}