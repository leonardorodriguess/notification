import theme from "@theme/index";
import { Routes } from "@routes/index";
import { ThemeProvider } from "styled-components";
import { StatusBar } from "react-native";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        // backgroundColor="#ffffff"
      />
      <Routes />
    </ThemeProvider>
  );
}