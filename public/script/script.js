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

    // $('form').submit(){
    //     swal({
    //       title: "Are you done, already?"
    //       text: "Please take your time!",
    //       type: "question",
    //       showCancelButton: true,
    //       closeOnConfirm: false,
    //       showLoaderOnConfirm: true,
    //     },
    //     function(){
    //
    //     });
    // }

    $('#send').click(function(event){
        event.preventDefault();
        $.post("https://formspree.io/thiagoloschi@gmail.com",
        {
          name: $('#name').text(),
          _replyto: $('#_replyto').text(),
          message: $('#message').text()
        },
        function(data){
            alert('foi', data);
        },function(data) {
            alert('erro', data)
        });
    });
});
