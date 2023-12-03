// problema 5: Verificação de login e senha
const usuario = "usuario123";
const senha = "senha123";

const usuarioInformado = "usuario123";
const senhaInformada = "senha123";

if(usuarioInformado === usuario && senhaInformada === senha){
    console.log(`Login efetuado com sucesso. Bem vindo ${usuario}.`)

}else {
    console.log("Usuário ou senha inválido.")
}