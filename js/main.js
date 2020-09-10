let showLogin = document.querySelector(".myReg4");
let showReg = document.querySelector(".myReg");
let registerDiv = document.querySelector(".register");
let loginDiv = document.querySelector(".login");


    showLogin.addEventListener("click",loginForm)
function loginForm() {
    loginDiv.style.display = "none";
    registerDiv.style.display = "block";
}

showReg.addEventListener("click",regForm);
function regForm() {
    // sign.preventDefault();
    loginDiv.style.display = "block";
    registerDiv.style.display = "none";

}
