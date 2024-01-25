const form = document.getElementById('form-deposito')

function validaNome(nomeCompleto){
    const nomeComArray = nomeCompleto.split('')
    return nomeComArray.length >= 2;
}

form.addEventListener('submit', function(e){
    let formEValido = false;
    e.preventDefault();

    const nomeBeneficiario = getElementById('nome-beneficiario');
    const numeroContaBeneficiario = document.getElementById('numero-conta');
    const valorDeposito = document.getElementById('valor-deposito');
    const mensagemSucesso = 'Montante de: ${valorDeposito} depositado para o cliente ${nomeBeneficiario} - conta ${numeroContaBeneficiario}';
    formEValido = validaNome(nomeBeneficiario.value)
    if (formEValido){
        alert("O nome não est[a completo")
    } else{
        alert("Tudo certo")
    }
})

console.log(form);