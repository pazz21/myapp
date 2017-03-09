
function isValidDate(date)
{


    var matches = /^(\d{1,2})[-\/](\d{1,2})[-\/](\d{4})$/.exec(date);
    if (matches == null) {
errmsg('should be a valid date');  
return false;
}
    return true;
}

function allnumeric(feild,uzip)  
{   
var numbers = /^[0-9]+$/;  
if(uzip.match(numbers))  
{  
return true;  
}  
else  
{  
errmsg(feild,'must have numeric characters only');  
  
return false;  
}  
}  


function checkdes(text)  
{   

if(text.length>0)  
{  
return true;  
}  
else  
{  
errmsg('','Description feild cant be empty');  
  
return false;  
}  
} 
function allletter(name,feild)  
{   
var letters = /^[A-Za-z]+$/;  
if(name.match(letters))  
{  
return true;  
}  
else  
{  
errmsg(feild,'must have alphabet characters only');    
return false;  
}  
} 

function validateformandsubmit() {

var validated=false;

    var firstname = $('#firstname').val();
    var lastname = $('#lastname').val();
    var age = $('#age').val();
    var number = $('#phone').val();
    var date = $('#date').val();
    var gender = $('#gender').val();
    var text = $('#text').val();

if(allletter(firstname,'firstname')){
if(allletter(lastname,'lastname')){
if(allnumeric('age',age)){
if(allnumeric('phone number',number)){
if(isValidDate(date)){
if(checkdes(text)){
validated=true;}
}
}
}
}
}

    var data = {
        firstname: firstname,
        lastname: lastname,
        age: age,
        number: number,
        date: date,
        gender: gender,
        text: text
    };

    console.log(data);
    if (validated == true) {
        sendtoserver(data);
    }

}

function errmsg(feild,error)
{
  toastr["error"]( feild+error)

            toastr.options = {
                "closeButton": true,
                "debug": false,
                "newestOnTop": false,
                "progressBar": true,
                "positionClass": "toast-top-right",
                "preventDuplicates": false,
                "showDuration": "300",
                "hideDuration": "1000",
                "timeOut": "5000",
                "extendedTimeOut": "1000",
                "showEasing": "swing",
                "hideEasing": "linear",
                "showMethod": "fadeIn",
                "hideMethod": "fadeOut"
            }

}

function sendtoserver(data) {

    $.post("/patientinput", data)
        .done(function(data) {

            toastr["success"]("Click to view.", "Inserted patient data into Database")

            toastr.options = {
                "closeButton": true,
                "debug": false,
                "newestOnTop": false,
                "progressBar": true,
                "positionClass": "toast-top-right",
                "preventDuplicates": false,
                "showDuration": "300",
                "hideDuration": "1000",
                "timeOut": "5000",
                "extendedTimeOut": "1000",
                "showEasing": "swing",
                "hideEasing": "linear",
                "showMethod": "fadeIn",
                "hideMethod": "fadeOut"
            }

        });
}



$(document).ready(function() {

document.getElementById("submitdata").addEventListener("click", function(event){
    event.preventDefault()
});

    $('#submitdata').on('click', function() {
        validateformandsubmit();

    });

});
