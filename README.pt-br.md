## <p align="center"> CINECSTASY - Um jeito fácil de comprar ingressos! </p>
![Cinecstasy's logo](https://raw.githubusercontent.com/victorinknov/dump-files/80ce369f1cefbaec8e720349c564384129a31153/cinecstasy-logo.svg)

#### [English](https://github.com/victorinknov/cinecstasy/blob/main/README.md) | [Português](https://github.com/victorinknov/cinecstasy/blob/main/README.pt-br.md)

### INTRODUÇÃO 
Esse projeto foi desenvolvido com o objetivo de permitir a compra de **ingressos de cinema** e permitir a visualização das **opções de snackbar** do mesmo.

### PRÉ-REQUISITOS
Para rodar esse projeto, tenha certeza de que tem os seguintes serviços/softwares instalados em sua máquina:

| software | versão utilizada no projeto | status |
| --- | --- | --- |
| <p align="center">[Node.js](https://nodejs.org/en/download/)</p> | <p align="center">v14.18.0</p> | <p align="center">desatualizada</p> |
| <p align="center">[NPM](https://www.npmjs.com/package/download)</p> | <p align="center">v6.14.15</p> | <p align="center">desatualizada</p> |
| <p align="center">[MySQL](https://dev.mysql.com/downloads/installer/)</p> | <p align="center">v8.0.26</p> | <p align="center">atualizada</p> |

## CRIANDO O AMBIENTE
### Se você está usando Windows como SO:
1. Faça o download ou clone o projeto para sua área de trabalho
1. Abra a pasta principal: ***\cinecstasy\***
2. Dentro da pasta, pressione o botão direito do mouse enquanto pressiona o botão <kbd> SHIFT </kbd>
3. Selecione a opção 'Abrir janela do powershell aqui'
4. Siga os passos primordiais

#### Se você está usando Linux:
1. Abra o shell e vá até a pasta principal do projeto.
2. Siga os passos primordiais.

### PASSOS PRIMORDIAIS
#### [NODE MODULES]
1. Dentro do shell, digite:
```nodejs
 npm install 
```
2. Saia do NPM pressionando <kbd> CTRL </kbd> + <kbd> C </kbd>

#### [BANCO DE DADOS]
3. Dentro do shell, digite: 
```sql
 mysql -u root -p -A < "C:\Users\Seu_Usuario\Desktop\cinecstasy\database\db.sql"
```
4. Antes de pressionar <kbd> ENTER </kbd>, cheque as seguintes informações e faça as alterações:
- -u significa "user", logo coloque o usuário que criou, por padrão utilizamos root.
- -p significa "password", assim que pressionar <kbd> ENTER </kbd>, ele irá promptar solicitando a senha desse usuário.
- -A significa "no auto-rehashing", para que o shell não execute novamente a tarefa automáticamente.

5. [MYSQL]
Algumas considerações sobre o MySQL. Na hora de criar um usuário, você preferencialmente deve deixar a opção 'legacy password' ativa e com alguma senha, não a deixe em branco! 

6. [CONEXÃO SERVER/DATABASE]
Utilizando algum editor de texto de sua preferência, vá até o arquivo '\cinecstasy\src\keys.js' e coloque as informações condizentes com seu usuário local do MySQL.
```javascript
module.exports = {
     database: {
          host: 'localhost',
          user: 'root',
          password: '-----',
          database: 'dbcinecstasy'
     }
}
```
Substitua ***-----*** pela sua senha do MySQL.


### RODANDO O PROJETO
1. **Runnnnnnning**: yet in shell, type "npm run dev" <kbd> Enter </kbd>;
2. **Opening**: Shell will prompt in which **port** the application is running, just type in your browser: http://localhost:5051/ (5051 CAN CHANGE!)
3. **Detalhes de login**: 
- email: victor@gmail.com
- senha: 12345

***password:*** 12345 
 <p align=center>Se seguiu todos os passos, nenhum erro deve ter aparecido.</p>
 
### ENTENDENDO O CÓDIGO
