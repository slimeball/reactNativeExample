React Native
### 運行環境
0.63.4

ios需要修改一個文件

https://stackoverflow.com/questions/66062663/react-native-npx-react-native-run-ios-doesnt-work-after-initializing-the-proj

Following Everest Climber answer
1. In Podfile under ios/ folderChange use_flipper! to use_flipper!({ 'Flipper-Folly' => '2.3.0' })
2. cd ios
3. pod install
4. pod update
5. cd .. && npx react-native run-ios (to run the application)


android报Execution failed for task ':app:compileDebugJavaWithJavac'. > Could not find tools.jar

https://stackoverflow.com/questions/56389284/execution-failed-for-task-appcompiledebugjavawithjavac-could-not-find-too

For MacOS, here are the steps:
1. Get Current java version ( recommended 1.8 ):
$ java -version  
java version "1.8.0_271"
Java(TM) SE Runtime Environment (build 1.8.0_271-b09)
Java HotSpot(TM) 64-Bit Server VM (build 25.271-b09, mixed mode)
2. CD to your Java home path
$ cd /Library/Java/JavaVirtualMachines
$ ll
total 0
drwxr-xr-x  3 root  wheel    96B 24 Out 09:24 adoptopenjdk-15-openj9.jre
drwxr-xr-x  3 root  wheel    96B 30 Dez 20:18 jdk1.8.0_271.jdk
3. CD to the current java home shown at step 1 (" java 1.8.0_271" ):
$ cd jdk1.8.0_271.jdk/Contents/Home
4. Copy the current path to clipboard:
$ pwd | pbcopy   
5. Finally, open the gradle.properties file (here I'm using VSCode) and set the org.gradle.java.home variable:


### 装react-navigation
npx pod-install ios