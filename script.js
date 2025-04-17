function validarFormulario(){
    const nome = document.getElementById('nome').value.trim();

    const sobrenome = document.getElementById('sobrenome').value.trim();

    const idade = document.getElementById('idade').value.trim();

    const nascimento = document.getElementById('nascimento').value.trim();

    const apelido = document.getElementById('apelido').value.trim();

    const email = document.getElementById('email').value.trim();
    
    const ddd = document.getElementById('ddd').value.trim();

    const contato = document.getElementById('contato').value.trim();

    const cpf = document.getElementById('cpf').value.trim();

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

    if(!ddd) {
        alert('Por favor, insira o DDD.');
        return;
    }

    if(!contato) {
        alert('Por favor, insira o telefone pra contato.');
        return;
    }

    if(!cpf) {
        alert('Por favor, insira um cpf valido.');
        return;
    }
}