import theme from "@theme/index";
import { Routes } from "@routes/index";
import { ThemeProvider } from "styled-components";
import { StatusBar } from "react-native";
import notifee, { AndroidImportance, EventType } from '@notifee/react-native';
import { useEffect } from "react";

export default function App() {
  async function createChannel(){
    const channelId = await notifee.createChannel({
      id: "request",
      name: "request",
      vibration: true,
      importance: AndroidImportance.HIGH,
    });

    return channelId;
  }
  
  async function displayNotification() {
    await notifee.requestPermission();

    const channelId = await createChannel()

    await notifee.displayNotification({
      id: "7",
      title: "Olá Leonardooooo",
      body: "Criado status 1",
      android: {
        channelId
      }
    })
  }

  async function updateNotification() {
    await notifee.requestPermission();

    const channelId = await createChannel()
    
    await notifee.displayNotification({
      id: "7",
      title: "Olá Leonardo",
      body: "status 2",
      android: {
        channelId,
      }
    })
  }



  useEffect(() => {
    return notifee.onForegroundEvent (async ({ type, detail}) => {
      console.log("foreground");

      switch(type){
        case EventType.DISMISSED:
          console.log("Usuário descartou a notificação", detail.notification);
          break;

        case EventType.PRESS:
          console.log("Usuário toccou na notificação");
          break;
      }
    })
  }, []);

  useEffect(() => {
    return notifee.onBackgroundEvent (async ({ type, detail}) => {
      console.log("background");

      switch(type){
        case EventType.DISMISSED:
          console.log("Usuário descartou a notificação", detail.notification);
          break;

        case EventType.PRESS:
          console.log("Usuário toccou na notificação");
          break;
      }
    })

  }, []);

  useEffect(() => {
    displayNotification();

    setTimeout(() => {updateNotification()}, 6000)
  },[]);
  
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        // barStyle="light-content"
        // backgroundColor="#ffffff"
      />
      <Routes />
    </ThemeProvider>
  );
}