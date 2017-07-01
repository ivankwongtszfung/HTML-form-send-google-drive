var request;
$(document).ready(function(){
  $("form").submit(function(event){
event.preventDefault();
if(request){
  request.abort();
}
//find all input and serialize.
var $form=$(this);
var $input=$form.find("input,button");
var serializedData=$input.serialize();
//disable input
$input.prop("disabled",true);
request = $.ajax({
  url: "https://script.google.com/macros/s/AKfycby5WcdtitgseIGdjBFuYFkI2Mchz3s_TLaJeKk6b140ZgFjpmTb/exec",
  type: "post",
  data: serializedData
});
request.done(function (response, textStatus, jqXHR){
      // Log a message to the console
      console.log("Form submitted");
      window.location.href="success-page.html";
  });

  // Callback handler that will be called on failure
  request.fail(function (jqXHR, textStatus, errorThrown){
      // Log the error to the console
      console.error(
          "The following error occurred: "+
          textStatus, errorThrown
      );
  });

  // Callback handler that will be called regardless
  // if the request failed or succeeded
  request.always(function () {
      // Reenable the inputs
      $input.prop("disabled", false);
  });
});
});
