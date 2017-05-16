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
            var name = $('#name').val();
            var email = $('#email').val();
            var message = $('#message').val();

            if(name.value == "" || email.value == "" || message.value == "") {
              swal("Something went wrong...", "Please try again.", "failed");
              return false;
            }

            $.ajax({
                url:'https://formspree.io/thiagoloschi@gmail.com',
                method:'POST',
                data:{
                    name: name,
                    _replyto: email,
                    email: email,
                    message: message
                },
                dataType:"json",
                success:function() {
                    console.log('success');
                    swal("Thanks for your Contact!", "I'll reply soon!", "success")
                    $('#name').val('');
                    $('#email').val('');
                    $('#message').val('');
                },
                error: function(){
                    swal("Something went wrong...", "Please try again.", "error");
                }
            });
        });
    });
});
