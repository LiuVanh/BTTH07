let userID = document.getElementById('txtUserID');
let statusOfUserID = document.getElementById('statusOfUserID')
userID.addEventListener('focusout', leaveUserId)
function leaveUserId(){
    var userIDRegex = /^[a-zA-Z0-9]{5,12}$/;
    if(userIDRegex.test(userID.value)){
        statusOfUserID.textContent = 'UserID hợp lệ'
        statusOfUserID.style.color = 'blue'
    }else{
        statusOfUserID.textContent = 'UserID không hợp lệ. Độ dài từ 5 - 12'
        statusOfUserID.style.color = 'red'
    }
}

let password = document.getElementById('txtPassword');
let statusOfPassword = document.getElementById('statusOfPassword')
password.addEventListener('focusout', leavePassword)
function leavePassword(){
    var passwordRegex = /^[a-zA-Z0-9]{7,12}$/;
    if(passwordRegex.test(password.value)){
        statusOfPassword.textContent = 'Password hợp lệ'
        statusOfPassword.style.color = 'blue'
    }else{
        statusOfPassword.textContent = 'Password không hợp lệ. Độ dài từ 5 - 12'
        statusOfPassword.style.color = 'red'
    }
}

let Name = document.getElementById('txtName');
let statusOfName = document.getElementById('statusOfName')
Name.addEventListener('focusout', leaveName)
function leaveName(){
    var nameRegex = /^[a-zA-Z ]+$/;
    if(nameRegex.test(Name.value)){
        statusOfName.textContent = 'Name hợp lệ'
        statusOfName.style.color = 'blue'
    }else{
        statusOfName.textContent = 'Name không hợp lệ. Phải là các chữ trong bảng chữ cái alphabates'
        statusOfName.style.color = 'red'
    }
}

let ZIPCode = document.getElementById('txtZIPCode');
let statusOfZIPCode = document.getElementById('statusOfZIPCode')
ZIPCode.addEventListener('focusout', leaveZIPCode)
function leaveZIPCode(){
    var zipcoderegex = /^[0-9]+$/;
    if(zipcoderegex.test(ZIPCode.value)){
        statusOfZIPCode.textContent = 'Zip Code hợp lệ'
        statusOfZIPCode.style.color = 'blue'
    }else{
        statusOfZIPCode.textContent = 'Zip Code không hợp lệ. Phải là các chữ số'
        statusOfZIPCode.style.color = 'red'
    }
}

let Email = document.getElementById('txtEmail');
let statusOfEmail = document.getElementById('statusOfEmail')
Email.addEventListener('focusout', leaveEmail)
function leaveEmail(){
    var Emailregex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;;
    if(Emailregex.test(Email.value)){
        statusOfEmail.textContent = 'Email hợp lệ'
        statusOfEmail.style.color = 'blue'
    }else{
        statusOfEmail.textContent = 'Email không hợp lệ. Mời nhập lại'
        statusOfEmail.style.color = 'red'
    }
}

function checkCountry(){
let Country = document.getElementById('Country').value;
    if(Country=="select")
    return false
}

function checkSex(){
    x=0;
    var umsex=document.getElementById('Msex')
    var ufsex=document.getElementById('Fesex')
    if(umsex.checked){
        x++;
    }
    if(ufsex.checked){
        x++;
    }
    if(x==0){return false}
    }

function checkLanguage(){
    x=0;
    var language=document.getElementById('Language')
    var nonlanguage=document.getElementById('Nlanguage')
    if(language.checked){
        x++;
    }
    if(nonlanguage.checked){
        x++;
    }
    if(x==0){return false}
    }

let register = document.getElementById('btnRegister')
register.addEventListener('click', function(e){
    e.preventDefault()
    let statusOfCountry = document.getElementById('statusOfCountry')
    if(checkCountry() == false){
        statusOfCountry.textContent = 'Bạn phải chọn quốc gia.'
        statusOfCountry.style.color = 'red'
    }

    let statusOfSex = document.getElementById('statusOfSex')
    if(checkSex() == false){
        statusOfSex.textContent = 'Bạn phải chọn giới tính.'
        statusOfSex.style.color = 'red'
    }

    let statusOfLanguage = document.getElementById('statusOfLanguage')
    if(checkLanguage() == false){
        statusOfLanguage.textContent = 'Bạn phải chọn ngôn ngữ.'
        statusOfLanguage.style.color = 'red'
    }
})
