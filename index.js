let inputDate = document.getElementById("inputDate");
let error = document.getElementById("error");
let ageResults = document.getElementById("age-result");
let getAge = document.getElementById("getAge").addEventListener("click", function() {
    let birthDate = new Date(inputDate.value);

    let birthYear = birthDate.getDate;
    //user details
    let userDate = birthDate.getDate();
    let userMonth = birthDate.getMonth() + 1;
    let userYear = birthDate.getFullYear();

    //today details
    let today = new Date();
    let todayDate = today.getDate();
    let todayMonth = today.getMonth() + 1;
    let todayYear = today.getFullYear();

    //age calculation
    let calculatedYear, calculatedMonth, calculatedDate;
    calculatedYear = todayYear - userYear;
    //get month
    if (todayMonth >= userMonth) {
        calculatedMonth = todayMonth - userMonth;
    } else {
        calculatedYear++;
        calculatedMonth = 12 + todayMonth - userMonth;
    }
    //get Date
    if (todayDate >= userDate) {
        calculatedDate = todayDate - userDate;
    } else {
        calculatedMonth++;
        calculatedDate = getDaysInMonth(userYear, userMonth) + todayDate - userDate;
    }
    if (birthDate == "Invalid Date") {
        ageResults.innerHTML = "Date is Invalid"
    } else {
        ageResults.innerHTML = `Your Age is ${calculatedYear}  Years ${calculatedMonth}  Months ${calculatedDate}  Days`;
    }

    function getDaysInMonth(year, month) {
        return new Date(year, month, 0).getDate();
    }
});