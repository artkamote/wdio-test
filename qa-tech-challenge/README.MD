#READ ME FIRST
Description:
Test automation using webdriver.io

##Running locally
- for clean run delete ./node_modules folder
- run ```$ npm install```
- open wdio.conf.js and comment out below
  > '--headless',
- uncomment all the "process.env.*" in wdio.conf.js and validate.plan.test.js (remove the //)
> process.env.API_URL
> process.env.TEST_BASE_URL

- run ```$ npx wdio wdio.conf.js --verbose```

##DockerFile
- Build image in linux/mac os
- ```$ login to dockerhub```
- build the image - ```$ docker build -t webdriverio-testrunner .```
> note: not working with mac os m1 


## Running in docker locally
- add .env file
- save the lines
>  API_URL=https://api-prod.prod.cms.df.services.vodafone.com.au/plan/postpaid-simo?serviceType=New \
>  TEST_BASE_URL=https://www.vodafone.com.au 
- comment all the "process.env.*" in wdio.conf.js and validate.plan.test.js
> //process.env.API_URL
> //process.env.TEST_BASE_URL
 

- #### docker running in windows  
- run ```$   docker-compose run --rm system-test-runner```

- #### docker running in linux/mac os - (make should be installed)
- ```$ make systemtests```
> note: currenly docker not working in my machine mac m1 
- for windows
- ```$ docker-compose run --rm system-test-runner bash -c "npm install && npx wdio wdio.conf.js --verbose"```

##Running in CICD
 - delete all the process.env.^ in wdio.js and validate.plan.js
 - configure environment variable with values in the .env file
   - note: .env file should not be commited
