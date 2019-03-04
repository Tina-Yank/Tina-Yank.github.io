$(window).scroll(function(e){
	parallax();
});
function parallax(){
	var scrolled = $(window).scrollTop();
	$('.bg').css('top',-(scrolled*0.2)+'px');

	var scrolled = $(window).scrollTop();
	$('.spec-text').css('top',-(scrolled*0.4)+'px');
}

$(document).ready(function(){
    $(".navbar").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
    $(".sec1").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
    $(".list-group").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

$('[data-spy="scroll"]').on('activate.bs.scrollspy', function () {
  $('body').scrollspy({ target: '#list-example' })
});

$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})

var img = document.getElementsByTagName('img');

for(var i in img)
{
    img[i].oncontextmenu = function()
    {
        return false;
    }
}

document.getElementById("gallery").onclick = function () {
    location.href = "gallery/";
};