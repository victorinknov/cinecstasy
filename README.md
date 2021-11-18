## <p align="center"> CINECSTASY - A easy way to buy movie tickets </p>
![Cinecstasy's logo](https://raw.githubusercontent.com/victorinknov/dump-files/80ce369f1cefbaec8e720349c564384129a31153/cinecstasy-logo.svg)

## Introduction 
This project was made with the aim of developing a web application that would allow the purchase of **movie tickets** and show **snackbar options**.

## Pre requisites
To run this project make sure you have these services/softwares on your machine [Node.js](https://nodejs.org/en/download/) - by default when you install Node.js, node package manager (NPM) are installed together - and [MySQL](https://dev.mysql.com/downloads/installer/).

## Creating development enviroment
If you're using a Windows Machine: 
On main folder **(\cinecstasy\)** press <kbd> SHIFT </kbd> and click with right button of the mouse. Choose 'Open powershell window here'. Follow steplist below.

If you're using a Linux Machine:
Open your shell and go to main project folder, man. If you are using linux you know how 2do this.

## Steplist
1. **Cloning / extracting**: clone or extract this repository to your DESKTOP. 
2. **Installing Node Modules**: type "npm install" <kbd> ENTER </kbd> ***(without quotes);***
3. **Exiting npm module shell**: <kbd> CTRL </kbd> + <kbd> C </kbd> <kbd> ENTER </kbd>
4. **Creating Database**: type 'mysql -u root -p -A < "C:\Users\yourusernamegoeshhere\Desktop\cinecstasy\database\db.sql"' <kbd> ENTER </kbd> ***(without single quotes);***
5. **Considerations**: root are the default high level user in MySQL workbench, if you didn't create root, change with your username. After hiting <kbd> ENTER </kbd> button, mysql will prompt to you inform your password.  
6. **Checking**: Before start the next step, you **MUST** need change the database.js file with your information. Make sure that this file is correctly according your MySQL local account. 

## Running project
1. **Runnnnnnning**: yet in shell, type "npm run dev" <kbd> Enter </kbd>;
2. **Opening**: Shell will prompt in which **port** the application is running, just type in your browser: http://localhost:5051/ (5051 CAN CHANGE!)
3. **Login details**: 
<br> 
***email:*** victor@gmail.com 
<br>
***password:*** 12345 
 <p align=center>If you follow all steps, may not appear</p>
 
## Understanding the code
