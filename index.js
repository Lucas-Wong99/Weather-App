    $(document).ready(function() {

var key = 'f155c6fb19eaafe7c7fb5171831285ef';

$('.search-again').hide(0);

$('form button').click(function(){
  event.preventDefault();
  $('form').fadeOut(1500);
  $('.results').show(500);
  $('.search-again').show(500);
  console.log($('form input').val());
  var city = $('.searchbar').val();
  $.get('https://api.openweathermap.org/data/2.5/weather?units=metric&q=' + city + "&appid=" + key, function(data, error){
    console.log(data);
    console.log(city);
    $('.results').html('<h3>' + data.name + ', ' + data.sys.country + '</h3><p> The weather today in '
     + data.name + ' is ' + data.weather[0].description + ' and the temperature is ' + data.main.temp + ' degrees celcius.</p>');
    $('.results').fadeIn(500);
  });
});

$('.search-again').click(function(){
  $('.search-again').fadeOut(500);
  $('.results').fadeOut(500);
  $('form').fadeIn(500);
  $('.searchbar').val("");
});

$('.searchbar').on('mouseenter mouseleave',function(){
  $('.searchbar').toggleClass('border');
});


});
