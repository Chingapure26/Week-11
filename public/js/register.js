var lists =document.getElementById("lists");
var list = document.getElementById("error");
var errorN = document.getElementById("valid-name");
var errorM = document.getElementById("valid-mail");
var errorP= document.getElementById("valid-pass");
var errorCP=document.getElementById("valid-confP");
var errors =[];


function ValidForm (){
    var registerForm = document.querySelector('form');
    if(registerForm != undefined){
        
        return true;
    } else {
        return false;
    } 
}

function ValidButn(){
    if (document.getElementsByClassName("btn").length == 2 ){
        
        return true;
    } else { 
        return false;
    }
}

function ValidFiels(){
    if (document.getElementsByClassName("field").length == 4) {
        
        return true;
    } else {
        return false;
    }
}

function ValidLabs(){

    if(document.getElementsByClassName("ltext").length == 4){
        
    return true;
    } else {
        return false;
    }

}



function ValidAsociated(){
    var inputs = document.querySelectorAll('.field').name;
    var labels = document.querySelectorAll('.ltext').for;
    if (inputs === labels) {
        
        return true;
    } else {
        return false;
    }
}


    if (ValidFiels () == false){
        errors.unshift('At least one field is missing.');
    }

    if(ValidForm() == false){
        errors.unshift('Form is not found.');
    }

    if(ValidButn() == false){
        errors.unshift('At least one button is missing.');
    }

    if(ValidLabs() == false){
        errors.unshift('At least one label is missing.');
    }

    if (ValidAsociated() == false) {
        errors.unshift('Labels missing for imputs.');
    }




var GroupError=function() {
    if(errors.length === 0){
        var displayedText = document.createTextNode('Every validation has been passed.')
        lists.appendChild(displayedText);
    }else{
        for(var i = 0; i < errors.length; i++){
        var displayedText = document.createTextNode(errors[i] + '\r');
        lists.appendChild(displayedText);
        }
    }
}
GroupError();

/*document.getElementById("nombre").addEventListener('blur',ValidName);

function ValidName(){
 let  fullN=document.getElementById("nombre").value;
    
    if (fullN.indexOf(" ") === -1){
        x1=false;
       
    }else {
        x1=true;
    }
   
    errorNam=[];
    if(fullN.length > 5) {
        x2=true;
        
    }else{
        x2=false;
        
    }
    
    if (x1 == false ){
        errorNam.unshift('Name false.');
    }

    if (x2 == false){
        errorNam.unshift('Short Name.');
    }
    
    if (errorNam != 0){
        for(var i = 0; i < errorNam.length; i++){
            var displayedText = document.createTextNode(errorNam[i] + '\r');
            errorN.appendChild(displayedText);
        }

    }
}    

let pass=document.getElementById("password").value;
/*document.getElementById("password").addEventListener('blur',ValidPass)*/  


/*document.getElementById("email").addEventListener('blur',ValidMail);

function ValidMail(){
    let mail=document.getElementById("email").value;
    var expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    var Valid= expReg.test(mail);
    if (Valid == false){

        var displayedText = document.createTextNode('Invalid Email.');
        errorM.appendChild(displayedText);
        
    }
    
}

document.getElementById("password").addEventListener('blur',ValidPass);

function ValidPass(){
    var pass= document.getElementById("password").value;
    if (pass.length >= 8){
        x1=true;
    } else{
        x1=false;
    }
    var expRegN = /[0-9]/;
    var validPN=expRegN.test(pass);
    if (validPN == false){
        x2=false;
    }else{
        x2=true;
       
    }
    var expRegl = /[a-z]/;
    var expRegL = /[A-Z]/;
    var validl=expRegl.test(pass);
    var validL=expRegL.test(pass);
    if (validl == false && validL == false) {
        x3=false;
    }else{
        x3=true;
       
    }

    errorPass=[];
    if (x1 == false ){
        errorPass.unshift('Short Password.');
    }

    if (x2 == false){
        errorPass.unshift('Must have number.');
    }
    if (x3 == false){
        errorPass.unshift('Must have character.');
    }

    if (errorPass != 0){
        for(var i = 0; i < errorPass.length; i++){
            var displayedText = document.createTextNode(errorPass[i] + '\r');
            errorP.appendChild(displayedText);
        }
    }
}

document.getElementById("conf-pass").addEventListener('blur',ValidCpass);

function ValidCpass(){
    var pass= document.getElementById("password").value;
    var cpass=document.getElementById("conf-pass").value;

    if (pass != cpass){
        var displayedText = document.createTextNode('Diferent Passwords.');
        errorCP.appendChild(displayedText);
    }
}*/