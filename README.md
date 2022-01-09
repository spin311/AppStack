# BMI Calculator
This is a docker web application to help you keep track of yours/ your friends weight progress.
 It calculates your BMI (Body Mass Index) and saves it together with date and name to keep the data more meaningful.
 It uses open source mongo database combined with volumes to store the data and to keep it persistant.

###### **Instructions:**

1. Clone the repository:
```Shell 
git clone https://github.com/spin311/AppStack
```
2. move to Appstack folder:
```Shell 
cd AppStack
```

3. type the following command (You need to have docker installed on your system.) The image will build in detached mode.
```Shell 
docker-compose up -d --build
```
4. in your preferred browser, type in ```localhost``` and the web application should show up.
Simply type in your data and web app will calculate your BMI, store and display the data.

## Problems encountered thru the project

I had to get myself familiar with mongodb syntax (nodeJS), which gave me quite some problems. 
The biggest challenge was getting the input data in format that I intended and displaying all results on the web application.
Finding a bug when server didn't run also proved to be quite difficult, I had to revert to previous commit multiple times in order to get back to working version. In that view git proved quite useful.

# Solution and Software
![Solution](./Pictures/Solution.png?raw=true "Solution")
I've decided to build a BMI Calculator that stores input data, calculates BMI and date as that is something that I think myself and many other people will find useful, especially with all the New Year's resolutions. 
## **Backend:**
![cmd](Pictures/cmd.png?raw=true "cmd")
###### **MongoDB:**
I've used mongoDB becasue its popular, open source and I've read that its quite fast and reliable.
In each object Item I store input data (height, weight, name) with current date and persons BMI.

###### **reverse proxy nginx:**
For reverse proxy I've chosen open source software nginx. I also use it for the multistage build.

###### **gcc:**
I've used the official gcc image in order to compile a simple ```.c``` program in the multistage build phase.

###### **Multistage build:**
For multistage build I've compited a simple ```main.c``` program that prints out web app's descriptions, used a gcc to compile it and sent the output to console.log in the web app using nginx as proxy.

## **Frontend**
For frontend I've used ```.ejs``` because it was easier for me to display all the data on the page. 
Simple css was used for the ```<table>``` tag.
![Frontend](Screenshots/Frontend.png?raw=true "Frontend")

###### **Possible improvements:**
I'm quite happy with the app I've built. If I had more time and resources I could add option to delete specific entry, maybe add multiple web-pages and connect them with nginx. 
