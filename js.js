$('body').scrollspy({ target: '#navbar', offset: 50 })

$('.nav a').on('click', function(){
  $('#navbar').collapse('hide');
});
