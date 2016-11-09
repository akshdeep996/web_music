$(document).ready(function(){
    


$('#idj-play-button').click(function() {
  document.getElementById('peaks-audio').play();
  $('#idj-play-button').addClass('hide');
  $('#idj-pause-button').removeClass('hide');
});
                        
$('#idj-pause-button').click(function() {
  document.getElementById('peaks-audio').pause();
  $('#idj-pause-button').addClass('hide');
  $('#idj-play-button').removeClass('hide');
});

$('#peaks-audio').on('ended', function() {
  $('#idj-pause-button').addClass('hide');
  $('#idj-play-button').removeClass('hide');
  $('#peaks-audio').load();
});

    

    });


