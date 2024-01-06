
Uploaded APK
Project link on gitlab: https://gitlab.com/youtube64/grocery-app

Source Code in github : https://github.com/satya4satyanm/capacitor-react-android-starter-template

you tube url
# https://youtu.be/l_yQwqJjZ28

undo
multiple list by name
share list copy all
improve checked
move up or down by click
move items to a new list
Focus on input once added
Price and qtty of buy. Submit for accounting.

Make sharing easy with in app

# Generating android apk

   • Visual Studio Code for a quick JavaScript/React/Angular App
   • Android Studio

   Here is the app url:
   https://codesandbox.io/s/simple-react-todo-list-mo0g05


   Next..
   Let me create a
   file capacitor.config.json in the root folder

   Add below code into it:
   {
   "appId": "io.ionic.todo",
   "appName": "Quick Shopping",
   "bundledWebRuntime": false,
   "npmClient": "npm",
   "webDir": "build",
   "cordova": {}
   }



   Next..
   Let me create a file ionic.config.json in the root folder


   Add below code into it:
   {
    "name": "yourAppName",
    "integrations": {
       "capacitor": {}
    },
    "type": "react"
   }


   Next..
   If you are using react app

   Run below command in command prompt
   `npm run build`

   Next..
   Install CAPACITOR locally

   •    `npm install @capacitor/core`
   •    `npm install @capacitor/cli --save-dev`
   •    `npx cap init`

   Next..
   Make sure android studio is installed
   `ionic capacitor add android`

   This will create the android folder in our project root


   Next..
   To open the project in android studio
   `npx cap open android`

   Next..
   `ionic capacitor sync` if the app is not updated, 
   
   then
   `npx cap sync`
   
   Next..
   Now we are in Android Studio
   Run the project once it is initiated
   Now, goto the build menu and select
   `Build bundles/apks - Build apks`


Capacitor
Icon and splash generator https://capacitorjs.com/docs/guides/splash-screens-and-icons 
`npx capacitor-assets generate`

https://gitlab.com/youtube64/grocery-app




App which saves time while shopping in super markets, malls and farmer's markets

App which saves time while shopping in super markets, malls and farmer's markets

This app will help you create groups of shopping items like grocery, vegetables, items from super market, etc before you go there. Once you collect any item from the shelf in the market or mall, you can tick it so that you find the rest of the items easily.

Easily you can share the list of items through text sms or whats app or any other manner to your family members or any other person who is doing shopping on your behalf. If they are using this app, they can select, copy the comma separated items from sms and paste it in the input field inside the shopping group and then click add. It list each item separately with check boxes and remove buttons.

One can add individual items or a list of items comma separated easily inside the list.

One can check or uncheck an item and remove an item if its no more needed.
