## <p align="center"> CINECSTASY - Um jeito fácil de comprar ingressos! </p>
![Cinecstasy's logo](https://raw.githubusercontent.com/victorinknov/dump-files/80ce369f1cefbaec8e720349c564384129a31153/cinecstasy-logo.svg)

## INTRODUÇÃO 
Esse projeto foi desenvolvido com o objetivo de permitir a compra de **ingressos de cinema** e permitir a visualização das **opções de snackbar** do mesmo.

## PRÉ-REQUISITOS
Para rodar esse projeto, tenha certeza de que tem os seguintes serviços/softwares instalados em sua máquina: 
- [Node.js](https://nodejs.org/en/download/)
- [NPM](https://www.npmjs.com/package/download) | Por padrão, o NPM _(Node Package Manager)_, é instalado juntamente com o Node.js 
- [MySQL](https://dev.mysql.com/downloads/installer/)

## CRIANDO O AMBIENTE
Se você está usando Windows como SO:
1. Abra a pasta principal; ***(\cinecstasy\)***
2. Dentro da pasta, pressione <kbd> SHIFT </kbd> e clique com o botão direito do mouse;
3. Selecione 'Abrir janela do powershell aqui'.
4. Siga os passos primordiais.

Se você está usando Linux:
1. Abra o shell e vá até a pasta principal do projeto.
2. Siga os passos primordiais.

## PASSOS PRIMORDIAIS
1. **Cloning / extracting**: clone or extract this repository to your DESKTOP. 
2. **Installing Node Modules**: type "npm install" <kbd> ENTER </kbd> ***(without quotes);***
3. **Exiting npm module shell**: <kbd> CTRL </kbd> + <kbd> C </kbd> <kbd> ENTER </kbd>
4. **Creating Database**: type 'mysql -u root -p -A < "C:\Users\yourusernamegoeshhere\Desktop\cinecstasy\database\db.sql"' <kbd> ENTER </kbd> ***(without single quotes);***
5. **Considerations**: root are the default high level user in MySQL workbench, if you didn't create root, change with your username. After hiting <kbd> ENTER </kbd> button, mysql will prompt to you inform your password.  
6. **Checking**: Before start the next step, you **MUST** need change the database.js file with your information. Make sure that this file is correctly according your MySQL local account. 

## RODANDO O PROJETO
1. **Runnnnnnning**: yet in shell, type "npm run dev" <kbd> Enter </kbd>;
2. **Opening**: Shell will prompt in which **port** the application is running, just type in your browser: http://localhost:5051/ (5051 CAN CHANGE!)
3. **Detalhes de login**: 
- email: victor@gmail.com
- senha: 12345

***password:*** 12345 
 <p align=center>If you follow all steps, errors may not appear</p>
 
## ENTENDENDO O CÓDIGO
