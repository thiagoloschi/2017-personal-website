// Inicia o script assim que a página é carregada
window.onload = function(){
    // Adiciona o tratador de eventos no input
    document.getElementById('phone').onkeypress = function(){
		mask( this, validate );
	}
}

// Chama o método de validação após um pequno atraso
function mask(object, method){
    text_object = object
    text_method = method
    setTimeout("update()", 1)
}

// Atualiza o valor do input
function update(){
    text_object.value = text_method( text_object.value )
}

// Função que valida
function validate( text ){
    //Permite somente números
    text = text.replace(/\D/g,"");

    //Adiciona os parênteses no código
    text = text.replace(/^(\d{2})(\d)/g,"($1) $2");

    //Adiciona o hífen no quarto ou quinto dígito
    text = text.replace(/(\d)(\d{4})$/,"$1-$2");

    // Retorna somente no máximo 15 números
    return text.substr(0, 15);
}
