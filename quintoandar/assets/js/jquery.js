// Verifica o input de telefone e habilita ou desabilita o botão
$('#phone').keyup(function() {
    var tel = $(this).val();
    if(tel.length > 13 && tel.length <= 15){
        $('#send').prop("disabled", false);
        $('#send').css({"border":"solid 2px #505050"});
        $('#send').css({"color":"#505050"});
    }else{
        $('#send').prop("disabled", true);
        $('#send').css({"border":"solid 2px #9d9d9d"});
        $('#send').css({"color":"#9d9d9d"});
    }
});

// Limpa o texto do input e reseta o estado do botão quando ele é clicado
$('#send').click(function(){
    $('#send').prop("disabled", true);
    $('#send').css({"border":"solid 2px #9d9d9d"});
    $('#send').css({"color":"#9d9d9d"});
    $('#phone').val('');
});

// Monitora o evento de redimensionamento da página
$(window).resize(function() {

    // Define o comportamento do menu quando em telas menores que 768px
    if($(window).width() < 768){

        $('#menu-itm').css({"display":"none"});
        $('#anunciar').css({"display":"block"});
        $('#fav').css({"display":"block"});

    }else{
        $('#menu-itm').css({"display":"block"});
        $('#anunciar').css({"display":"none"});
        $('#fav').css({"display":"none"});
    }
});


$(document).ready(function() {

    // Define o comportamento do menu quando em telas menores que 768px
    if($(window).width() < 768){

        $('#menu-itm').css({"display":"none"});
        $('#anunciar').css({"display":"block"});
        $('#fav').css({"display":"block"});

    }else{
        $('#menu-itm').css({"display":"block"});
        $('#anunciar').css({"display":"none"});
        $('#fav').css({"display":"none"});
    }

});
