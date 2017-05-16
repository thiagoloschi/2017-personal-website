$(document).ready(function() {
    swal("Desculpe o transtorno!", "Este site está sendo atualizado.", "warning");

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
          title: "Já terminou?",
          text: "Por favor, leve o tempo que precisar!",
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
              swal("Há algo de errado...", "Por favor, preencha todos os campos.", "error");
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
                    swal("Obrigado por seu contato!", "Responderei em breve.", "success")
                    $('#name').val('');
                    $('#email').val('');
                    $('#message').val('');
                },
                error: function(){
                    swal("Há algo de errado...", "Por favor, tente novamente.", "error");
                }
            });
        });
    });
});
