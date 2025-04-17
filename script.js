function validarFormulario(){
    const nome = document.getElementById('nome').value.trim();

    const sobrenome = document.getElementById('sobrenome').value.trim();

    const idade = document.getElementById('idade').value.trim();

    const nascimento = document.getElementById('nascimento').value.trim();

    const apelido = document.getElementById('apelido').value.trim();

    const email = document.getElementById('email').value.trim();
    
    if(!nome) {
        alert('Por favor, preencha o nome.');
        return;
    }

    if(!sobrenome) {
        alert ('Por favor, preencha o sobrenome.');
        return;
    }

    if(!idade) {
        alert('Por favor, preencha a idade.');
        return;
    }
    
    if(!nascimento) {
        alert('Por favor, preencha a data de nascimento.');
        return;
    }

    if(!apelido) {
        alert('Insira se prefere apelido ou nome.');
        return;
    }
    
    if(!email) {
        alert('Por favor, preencha um email valido');
        return;
    }

}