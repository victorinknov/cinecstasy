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

2. 
3. **Exiting npm module shell**: <kbd> CTRL </kbd> + <kbd> C </kbd> <kbd> ENTER </kbd>
4. **Creating Database**: type 'mysql -u root -p -A < "C:\Users\yourusernamegoeshhere\Desktop\cinecstasy\database\db.sql"' <kbd> ENTER </kbd> ***(without single quotes);***
5. **Considerations**: root are the default high level user in MySQL workbench, if you didn't create root, change with your username. After hiting <kbd> ENTER </kbd> button, mysql will prompt to you inform your password.  
7. **Checking**: Before start the next step, you **MUST** need change the database.js file with your information. Make sure that this file is correctly according your MySQL local account. 

### RODANDO O PROJETO
1. **Runnnnnnning**: yet in shell, type "npm run dev" <kbd> Enter </kbd>;
2. **Opening**: Shell will prompt in which **port** the application is running, just type in your browser: http://localhost:5051/ (5051 CAN CHANGE!)
3. **Detalhes de login**: 
- email: victor@gmail.com
- senha: 12345

***password:*** 12345 
 <p align=center>Se seguiu todos os passos, nenhum erro deve ter aparecido.</p>
 
### ENTENDENDO O CÓDIGO
