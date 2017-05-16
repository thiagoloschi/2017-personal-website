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

    var name = $('#name');
    var _replyto = $('#_replyto');
    var message = $('#message');

    $('form').submit(function( event ){
        event.preventDefault();
        if(name.val() == "" || _replyto.val() == "" || message.val() == "") {
          swal("Something went wrong...", "Please try again.", "failed")
          return false;
        }
        swal({
          title: "Are you done, already?",
          text: "Please take your time!",
          type: "info",
          showCancelButton: true,
          closeOnConfirm: false,
          showLoaderOnConfirm: true,
        },
        function(){
            $.ajax({
                method: 'POST',
                url: '//formspree.io/thiagoloschi@gmail.com',
                data: $('.contact-form').serialize(),
                datatype: 'json',
                success: function(data){
                    swal("Thanks for your Contact!", "I'll reply soon!", "success")
                    console.log(data);
                }
            });
        });
    });
});
