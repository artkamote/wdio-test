#READ ME FIRST
Description:
Test automation using webdriver.io

##DockerFile
- Build image 
- ```$ login to dockerhub```
- ```$ docker build -t artcuaresma/webdriverio-testrunner:7.0 . ```

##Running locally
- run ```$ npm install```
- open wdio.conf.js and comment out below
  > '--headless',
- run ```$ npx wdio wdio.conf.js --verbose```

##Running in docker
- ```$ make systemTests```
> note: currenly docker not working in my machine
