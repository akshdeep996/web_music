//var car = {type:"Fiat", model:"500", color:"white"}; 

/*var defaultsettings = {
                        ajaxsettings : { "ak1" : "v1", "ak2" : "v2", etc. },
                        uisettings : { "ui1" : "v1", "ui22" : "v2", etc }
                      };
*/
/*var international = {
    
    song_source : {},
    image_source :{},
    artist_source:{},
    album:
    
    
};
*/
$(document).on('click','#dusuk',function(){
   
    $("#usuk").css("display", "initial");
   $("#intl").css("display", "none");
    $("#bollywood").css("display", "none");
    $("#martin").css("display", "none");
    $("#edm").css("display", "none");
    
    
});


$(document).on('click','#dintl',function(){
    
    $("#intl").css("display", "initial"); 
   $("#usuk").css("display", "none"); 
    $("#bollywood").css("display", "none");
    $("#martin").css("display", "none");
    $("#edm").css("display", "none");
    
});

$(document).on('click','#dbollywood',function(){
    
    $("#intl").css("display", "none"); 
   $("#usuk").css("display", "none"); 
    $("#bollywood").css("display", "initial");
    $("#martin").css("display", "none");
    $("#edm").css("display", "none");
    
});

$(document).on('click','#dedm',function(){
    
    $("#intl").css("display", "none"); 
   $("#usuk").css("display", "none"); 
    $("#bollywood").css("display", "none");
    $("#martin").css("display", "none");
    $("#edm").css("display", "initial");
    
});

$(document).on('click','#dmartin',function(){
    
    $("#intl").css("display", "none"); 
   $("#usuk").css("display", "none"); 
    $("#bollywood").css("display", "none");
    $("#martin").css("display", "initial");
    $("#edm").css("display", "none");
    
});

$(document).on('click','#onedance',function(){

   $("audio").attr("src","music/english/onedance.mp3").attr('autoload','auto').attr('autoplay');
    $("#srcimg").attr("src","music/english/one.jpg");
    document.getElementById("srcdetail").innerHTML = "<h4> One Dance</h4><p>Drake and Kyla</p>";
 });

$(document).on('click','#cake',function(){

   $("audio").attr("src","music/english/cake.mp3").attr('autoload','auto').attr('autoplay'); 
        $("#srcimg").attr("src","music/english/cake.jpg");
    document.getElementById("srcdetail").innerHTML = "<h4> Cake By the Ocean </h4><p>Justin timberlake</p>";

 });

$(document).on('click','#dont',function(){

   $("audio").attr("src","music/english/dontwanna.mp3").attr('autoload','auto').attr('autoplay'); 
        $("#srcimg").attr("src","music/english/dont.jpg");
    document.getElementById("srcdetail").innerHTML = "<h4> Dont wanna know</h4><p>The Chainsmoker</p>";

 });

$(document).on('click','#work',function(){

   $("audio").attr("src","music/english/work.mp3").attr('autoload','auto').attr('autoplay');
        $("#srcimg").attr("src","music/english/work.jpg");
    document.getElementById("srcdetail").innerHTML = "<h4> Work From home </h4><p>Fifth Harmony</p>";

 });

$(document).on('click','#cheap',function(){

   $("audio").attr("src","music/english/cheap.mp3").attr('autoload','auto').attr('autoplay'); 
        $("#srcimg").attr("src","music/english/cheap.jpg");
    document.getElementById("srcdetail").innerHTML = "<h4>Cheap thrills</h4><p>Sia</p>";

 });

$(document).on('click','#adhm',function(){

   $("audio").attr("src","music/bollywood/adhm.mp3").attr('autoload','auto').attr('autoplay');
    $("#srcimg").attr("src","music/bollywood/adhm.jpg");
    document.getElementById("srcdetail").innerHTML = "<h4> Ae Dil hai mushkil</h4><p>adhm</p>";
 });

$(document).on('click','#nashe',function(){

   $("audio").attr("src","music/bollywood/nashe.mp3").attr('autoload','auto').attr('autoplay');
        $("#srcimg").attr("src","music/bollywood/nashe.jpg");
    document.getElementById("srcdetail").innerHTML = "<h4> Nashe Si chadd gyi </h4><p>Befikre</p>";

 });
    
$(document).on('click','#tere',function(){

   $("audio").attr("src","music/bollywood/tere.mp3").attr('autoload','auto').attr('autoplay');
        $("#srcimg").attr("src","music/bollywood/tere.jpg");
    document.getElementById("srcdetail").innerHTML = "<h4> Tere Sang yara </h4><p>Rushtom</p>";

 });

$(document).on('click','#toota',function(){

   $("audio").attr("src","music/bollywood/toota.mp3").attr('autoload','auto').attr('autoplay'); 
        $("#srcimg").attr("src","music/bollywood/toota.jpg");
    document.getElementById("srcdetail").innerHTML = "<h4>Toota Jo ye ek taara</h4><p>Flying Jatt</p>";

 });


$(document).on('click','#sab',function(){

   $("audio").attr("src","music/bollywood/sab.mp3").attr('autoload','auto').attr('autoplay'); 
        $("#srcimg").attr("src","music/bollywood/sab.jpg");
    document.getElementById("srcdetail").innerHTML = "<h4> Sab tera</h4><p>Baaghi</p>";

 });
    /*
    
    /*

$("#about").on("click", function(){
    $("#pagebox").show();
});

*/
    
    
    
    
    
    
    
    
    
    
      

/*

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


*/