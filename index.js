function validate(){

var a=document.forms['form']['name'].value;
if(a===""){
    alert("name is required");
}

var b=document.forms['form']['Mobile'].value;
if(b===""){
    alert("Mobile number is required");
}

var c=document.forms['form']['email'].value;
if(c===""){
    alert("Email is required");
}

var d=document.forms['form']['message'].value;
if(d===""){
    alert("message is required");
}

if(a != '' && b != '' && c != '' &&d != ''){
    alert("Form submited successfully");
}

}

        