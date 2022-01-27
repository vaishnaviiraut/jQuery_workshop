$(document).ready(function(){
   $("#btn").click(function () {
       var userName = $("#userName").val();
       var password = $("#password").val();

       auth(userName,password);
   });



});


function auth(userName,password){
    $.ajax
    ({

       type:"POST",
       url:"data.json",
       dataType: 'json',
       async: false,
       data: '{"userName":"' + userName +'","password":"' + password +'"}',
       success: function(data,textStatus,jqXHR){
           alert('User:' +data.user+ 'authenticated:'+data.authentication);
       }
    
    })

     
}