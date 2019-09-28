# Necessary Installations 
1. Make sure you have node.js installed
you can download it from https://nodejs.org/en/
verify its installed by typing node -v on cmd. if installed it should output the version of the installed node.js

2. if you are behind a proxy set the proxy settings using cmd command: npm config set https-proxy http://proxylink:http-port

3. on cmd run npm install -g cordova ionic

4. test if all is well 
	change directory to where you want to install your app. cd://path-to-my-directory
	ionic start myApp blank

5. if you are behind a proxy set up proxy settings using 
set http_proxy=[proxy server]:[proxy port]
set https_proxy=[proxy server]:[proxy port]

2 remove proxy settings when you dont have proxy use: 
npm config rm https_proxy
also http_proxy and proxy 


Other necessary but optional installs 
1. I would recommend installing a Git bash and not using command prompt for access. Get git bash from https://git-scm.com/downloads

2. Visual Code Editor - best for Typescript (my opinion)

3. Sublime Text Editor - best for PHP web application 

4. XAMPP - for web app hosting and PHP APIs as well

# Installing web application 
1. open cmd or git bash 

2. change directory to where you want to install project 
for example if you want to install in C://js/ use cd C://js

3. Run git clone https://github.com/dzinampini/health-crowdfunding-mobile.git

4. cd to health-crowdfunding-mobile 
(you can rename the folder name if you want)

5. Run npm i -D -E @ionic/app-scripts

6. Then run command: ionic serve and after some minutes your project will display in the browser

7. If you're are running with a mobile application 
edit the foloowing file 
project-folder/src/app/app-comonents.ts 
and on line 160replace the path to the web app api with yours 
this.global.serverAddress="http://localhost/../test-ci-apis/api/";
Also be sure that XAMPP is running 


# Running mobile application 

1. open cmd or git bash

2. change directory to folder where your project is located. 
	cd C://where-is-my-folder

3. then run the command 
	ionic serve (your project will display in the browser)

if interacting with APIs/database 
4. open xampp/wampp and start Apache and MySQL



# Credentials 
## User 1

