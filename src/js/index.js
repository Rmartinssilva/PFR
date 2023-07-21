const setarNomeHTML= ()=>{
    var nome = ['RAQUEL MARTINS','DEV'];

    let containerNome = document.querySelector('.nome');

    for(let i =0; i < nome.length; i++){
        containerNome.innerHTML+=nome[i];
        containerNome.innerHTML+='<hr>';
    }
}
