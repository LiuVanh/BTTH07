$(document).ready(function(){
    //check userid
    function checkUserId(){
        let userID = $('#txtUserID').val();
        let userIDRegex = /^[a-zA-Z0-9]{5,12}$/;
        if(userIDRegex.test(userID)){
            return true
        }
        return false
    }
    $("#btnRegister").click(function(e){
        e.preventDefault();
        if(checkUserId()){
            $("#statusOfUserID").text('UserID hợp lệ')
            $("#statusOfUserID").css('color','blue')
        }else{
            $("#statusOfUserID").text('UserID không hợp lệ. Độ dài từ 5 - 12')
            $("#statusOfUserID").css('color','red')
        }
    })
    //check pass
    function checkPassword(){
        let password = $('#txtPassword').val();
        let passwordRegex = /^[a-zA-Z0-9]{7,12}$/;
        if(passwordRegex.test(password)){
            return true
        }
        return false
    }
    $("#btnRegister").click(function(e){
        e.preventDefault();
        if(checkPassword()){
            $("#statusOfPassword").text('Password hợp lệ')
            $("#statusOfPassword").css('color','blue')
        }else{
            $("#statusOfPassword").text('Password không hợp lệ. Độ dài từ 7 - 12')
            $("#statusOfPassword").css('color','red')
        }
    })
    //check username
    function checkUserName(){
        let userName = $('#txtName').val();
        let userNameRegex = /^[a-zA-Z]+$/;
        if(userNameRegex.test(userName)){
            return true
        }
        return false
    }
    $("#btnRegister").click(function(e){
        e.preventDefault();
        if(checkUserName()){
            $("#statusOfName").text('Name hợp lệ')
            $("#statusOfName").css('color','blue')
        }else{
            $("#statusOfName").text('Name không hợp lệ. Phải là các chữ trong bảng chữ cái alphabet')
            $("#statusOfName").css('color','red')
        }
    })
    //check zipcode
    function checkZipCode(){
        let zipCode = $('#txtZIPCode').val();
        let zipCodeRegex = /^[0-9]+$/;
        if(zipCodeRegex.test(zipCode)){
            return true
        }
        return false
    }
    $("#btnRegister").click(function(e){
        e.preventDefault();
        if(checkZipCode()){
            $("#statusOfZIPCode").text('Zip Code hợp lệ')
            $("#statusOfZIPCode").css('color','blue')
        }else{
            $("#statusOfZIPCode").text('Zip Code không hợp lệ. Phải là các chữ số')
            $("#statusOfZIPCode").css('color','red')
        }
    })
    //check email
    function checkEmail(){
        let email = $('#txtEmail').val();
        let emailRegex = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
        if(emailRegex.test(email)){
            return true
        }
        return false
    }
    $("#btnRegister").click(function(e){
        e.preventDefault();
        if(checkEmail()){
            $("#statusOfEmail").text('Email hợp lệ')
            $("#statusOfEmail").css('color','blue')
        }else{
            $("#statusOfEmail").text('Email không hợp lệ. Mời nhập lại')
            $("#statusOfEmail").css('color','red')
        }
    })
    //check country
    function checkCountry(){

        let country = $('#Country').val();

        if(country == 'select'){
            return true
        }
        else{
            return false
        }
    }
    $("#btnRegister").click(function(e){
        e.preventDefault();
        if(checkCountry() == false){
            
        }else{
            $("#statusOfCountry").text('Bạn phải chọn quốc gia.')
            $("#statusOfCountry").css('color','red')
        }
    })
    //check sex
    $("#btnRegister").click(function(e){
        e.preventDefault();
        let isRadioChecked1 = $('#Msex').is(':checked');
        let isRadioChecked2 = $('#Fesex').is(':checked');
        if(isRadioChecked1 == false && isRadioChecked2 == false){
            $("#statusOfSex").text('Bạn phải chọn giới tính.')
            $("#statusOfSex").css('color','red')
        }
    })
    //check language and function check 1 in 2
    $(function() {
        $("input:checkbox").on('click', function() {
          var $box = $(this);
          if ($box.is(":checked")) {
            var group = "input:checkbox[name='" + $box.attr("name") + "']";
            $(group).prop("checked", false);
            $box.prop("checked", true);
          } else {
            $box.prop("checked", false);
          }
        });
      });
    $("#btnRegister").click(function(e){
        e.preventDefault();
        let isChecked1 = $('#Language').is(':checked');
        let isChecked2 = $('#Nlanguage').is(':checked');
        if(isChecked1 == false && isChecked2 == false){
            $("#statusOfLanguage").text('Bạn phải chọn ngôn ngữ.')
            $("#statusOfLanguage").css('color','red')
        }
    })
})