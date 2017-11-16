document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    console.log(navigator.notification);
}

$(document).on("pagecreate","#pageone",function(){
  $('#submitButton').on("click", function(){
    var rand = random();
      if(rand){
          
          navigator.notification.beep(1);
          
      }else{
          
          navigator.notification.beep(2);
      }
  });            
});            


function random() {
	return !Math.round(Math.random());
}

