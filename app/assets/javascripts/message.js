      function buildHTML(message){
        if ( message.image ){
          var html = '<asset_path src= ${message.image} ></asset_path>'
        return html;
      } else {
        var html = ''
      return html;
        };
      }
$('.js-form').on('submit', function(){
  e.preventDefault();
  var formData = new FormData(this);
  var url = $(this).attr('action')
  $.ajax({
    url: url,
    type: "POST",
    data: formData,
    dataType: 'json',
    processData: false,
    contentType: false
  })
   .done(function(data){
     var html = buildHTML(data);
     $('.messages').append(html);
     $('messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
     $('form')[0].reset();
   })
    .fall(function(){
      alert('error');
    });
    return false;
  });
});
