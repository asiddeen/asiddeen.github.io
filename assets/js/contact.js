$(function () {
  "use strict";

  $('#contact-form').validator();
  $("#contact-form :input").change(function() {

  });


  $('#contact-form').on('submit', function (e) {
    if (!e.isDefaultPrevented()) {
      e.preventDefault();
      var name = $("#form_name").val()+' '+$("#form_lastname").val();
      var email = $("#form_email").val();
      var mobile = $("#form_phone").val();
      var msg = $("#form_message").val();
      var url = 'mailto:'+email+'?body=Name: '+name+'\nMobile: '+mobile+'\n\n***\n'+msg;
      window.open(url,'_blank');
    }
  })
});
