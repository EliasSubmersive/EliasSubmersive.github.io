$(document).ready(function(){
  $(document).mousemove(function(e){
    $('.box').css('left',e.pageX+"px");
    $('.box').css('top',e.pageY+"px");
  });
});