The base code used in making this app comes from:-
https://blog.bam.tech/developer-news/make-your-first-iot-react-native-application-with-the-bluetooth-low-energy
https://github.com/Spoutnik97/react-native-arduino-ble-example
NB for this example the ESP32 equivalent script (to the counter script included in the repo) is the BLE_uart example script which installed with the ESP32 library


Current goal is to create a useful BLE controller to make it easy to link with ESP32 using React Native

This also includes a first test at converting the bleOTA app for ESP32 Arduino to React Native
source code for this is:
	https:github.com/fbiego/ESP32_BLE_OTA_Android and
	https:github.com/fbiego/ESP32_BLE_OTA_Arduino


The Arduino code is in this repo under the BLE-react-native-controller folder

If this is your first React Native App then I would strongly recommend this tutorial series:
The Complete React Native Course 2021 : from Zero to Hero
https:www.youtube.com/watch?v=ANdSdIlgsEw&list=PL-KWpYoL_9QnQ8sZkRwNTozpoKRevpgP_&index=1&t=9013s

If you follow this tutorial and use Visual Studio as your IDE (which I definitely recommend) then
a great VS Arduino plugin which enables you to use the dramatically more powerful VS instead of the Arduino IDE to compile and upload code direct to your Arduino is:-
https:www.visualmicro.com/

You will also have to install a number of react plugins before it will compile correctly including:-
npx install @react-navigation/native
npm install react-native-screens react-native-safe-area-context
npm install --save react-native-ble-plx
npm install --save @react-native-community/masked-view
npm i react-native-animated-component


*** To actually run the app (in Windows) ***

Open the terminal
if it's not already in the correct directory cd there
>>cd C:\Users\dgm\source\repos
>>npx react-native start
>>npx react-native run-android

index.js is the starting point for React Native applications, and it is always required.
It can be a small file that requires other files that are part of your React Native component or application, or it can contain all the code that is needed for it.
In our case, the bulk of the code is elsewhere.


App.tsx just starts the RootNavigator component (in .src/navigation/index.tsx)
in navigation/index.tsx the various screens and devices are imported (including the bluetooth device from the react-native-ble-plx library)
