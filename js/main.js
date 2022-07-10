// $(function () {
// 	$('.menu-open').click(function () {
// 		$('.menu-burger').toggleClass('show-menu')
// 	})
// });

document.querySelector("#main-form").addEventListener("submit", checkForm);

function checkForm(event) {
    event.preventDefault();
    let el = document.querySelector("#main-form");
    let nameA = document.querySelector("#nameA");
    let venNameB = document.querySelector("#nameB");
    let venCityC = document.querySelector("#nameC");

    let stateCityD = document.querySelector("#nameD");
    let emailE = document.querySelector("#nameE");
    let subjectF = document.querySelector("#nameF");
    let messageG = document.querySelector("#nameG");

    let name = el.name.value;
    let venName = el.venueName.value;
    let venCity = el.venCity.value;
    let stateCity = el.stCity.value;
    let email = el.email.value;
    let subject = el.subject.value;
    let message = el.message.value;
    // let fail = "";

    if(name == "" || venName == "" || venCity == "" ||stateCityD == "" || emailE == "" || subjectF == "" || messageG == "") {
        // fail = "Заполните форму!";
        nameA.style.border = "3px solid red";
        venNameB.style.border = "3px solid red";
        venCityC.style.border = "3px solid red";

        stateCityD.style.border = "3px solid red";
        emailE.style.border = "3px solid red";
        subjectF.style.border = "3px solid red";
        messageG.style.border = "3px solid red";
     } else {
        nameA.style.border = "none";
        venNameB.style.border = "none";
        venCityC.style.border = "none";

        stateCityD.style.border = "none";
        emailE.style.border = "none";
        subjectF.style.border = "none";
        messageG.style.border = "none";
     }
}


    // } else if(name.length <= 1 || name.length >= 50) {
    //     fail =  name.style.color = "red";
    // } else if(venName.length <= 1 || venName.length >= 50) {
    //     fail = "Wrong place";
    // } else if(venCity.length <= 1 || venCity.length >= 50) {
    //     fail = "Incorrect title";
    // } else if(stateCity.length <= 1 || stateCity.length >= 50) {
    //     fail = "Incorrect title";
    // } else if(email.length <= 10 || stateCity.length >= 40) {
    //     fail = "Incorrect email";
    // } else if(subject.length <= 1 || subject.length >= 50) {
    //     fail = "Incorrect email";
    // }
    

    // if(fail != "") {
    //     document.querySelector(".main-p").innerHTML = fail;
    // } else {
    //     alert("Form sent!");
    // }






