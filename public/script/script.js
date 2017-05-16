$(document).ready(function() {
    swal("Sorry for the inconvenience!", "This website is being updated.", "warning");

    //alert($( window ).width());

    $('#fullpage').fullpage();

	$('.text1').funnyText({
		speed: 550,
		borderColor: '#00AEEF',
		activeColor: '#2c2c2c',
		color: '#00AEEF',
		direction: 'both'
	});
    $('.text2').funnyText({
        speed: 550,
        borderColor: '#00AEEF',
        activeColor: '#2c2c2c',
        color: '#3b5998',
        direction: 'both'
    });
    $('.text3').funnyText({
        speed: 550,
        borderColor: '#00AEEF',
        activeColor: '#2c2c2c',
        color: '#00AEEF',
        direction: 'both'
    });
    $('.text4').funnyText({
        speed: 400,
        borderColor: '#00AEEF',
        activeColor: '#2c2c2c',
        color: '#00AEEF',
        direction: 'up'
    });

    $('form').submit(function( event ){
        event.preventDefault();
        swal({
          title: "Are you done, already?",
          text: "Please take your time!",
          type: "info",
          showCancelButton: true,
          closeOnConfirm: false,
          showLoaderOnConfirm: true,
        },
        function(){
            $.post("https://formspree.io/thiagoloschi@gmail.com",
            {
              name: $('#name').text(),
              _replyto: $('#_replyto').text(),
              message: $('#message').text()
            },
            function(data){
                swal("Thanks for your Contact!", "I'll reply soon!", "success")
            },function(data) {
                swal("Something went wrong...", "Please try again.", "failed")
            });
        });
    });
});
