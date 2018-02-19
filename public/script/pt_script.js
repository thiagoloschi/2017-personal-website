$(document).ready(function() {

    //FullPage

    if($( window ).width() > 768) { 
        $('#fullpage').fullpage();
    }

    // Wow
    new WOW().init();

    //Funny text

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


    //Formspree

    $('form').submit(function( event ){
        event.preventDefault();

        swal({
          title: "Terminou de escrever?",
          text: "Por favor, leve o tempo que precisar!",
          type: "info",
          showCancelButton: true,
          closeOnConfirm: false,
          showLoaderOnConfirm: true,
          confirmButtonText: "Sim, enviar",
          cancelButtonText: "Não, voltar"
        },
        function(){
            var name = $('#name').val();
            var email = $('#email').val();
            var message = $('#message').val();

            if(name.value == "" || email.value == "" || message.value == "") {
              swal("Campos vazios...", "Por favor, preencha todos os campos..", "error");
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
                    swal("Obrigado pelo contato!", "Responderei em breve.", "success")
                    $('#name').val('');
                    $('#email').val('');
                    $('#message').val('');
                },
                error: function(){
                    swal("Alguma coisa deu errado...", "Por favor, tente novamente.", "error");
                }
            });
        }  
    );
    });

    $("#myModal").bind("mousewheel", function() {
        return false;
    });
});

