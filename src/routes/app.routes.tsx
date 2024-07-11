import { Ionicons, Feather } from "@expo/vector-icons";
import { Login } from "@screens/login";
import { useTheme } from "styled-components";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export function AppRoutes() {
  const { colors, sizes } = useTheme();

  const { Navigator, Screen } = createNativeStackNavigator();

  return (
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen
          name="details"
          component={Login}
          // options={{ tabBarButton: () => null }}
        />
      </Navigator>
  );
}
