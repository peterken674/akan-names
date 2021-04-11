function getDate() {
    let dateInput = document.getElementById("date").value;
    let date = new Date(dateInput);

    if (!!date.valueOf()) {
        let year = date.getFullYear().toString();
        let CC = parseInt(year.slice(0,2));
        alert(CC);
    }
    else{
        alert("Please select your birthday.")
    }
}