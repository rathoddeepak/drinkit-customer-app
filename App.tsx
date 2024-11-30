import { StatusBar } from "react-native";

// React Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import LoginScreen from "./src/screens/onboarding/Login";
import HomeTabNavigator from "./src/screens/home/HomeTabNavigation";

// React Query
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'

// Constants
import { colors } from "./src/themes/colors";
import VerifyOTP from "./src/screens/onboarding/Verify";
import SelectUser from "./src/screens/onboarding/SelectUser";

const queryClient = new QueryClient()
const Stack = createNativeStackNavigator()
StatusBar.setBackgroundColor(colors.bgColor)
StatusBar.setBarStyle('dark-content')

const App = () => {
  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <Stack.Navigator initialRouteName="MainTabs" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="VerifyOtp" component={VerifyOTP} />
          <Stack.Screen name="SelectUser" component={SelectUser} />
          <Stack.Screen name="MainTabs" component={HomeTabNavigator} />
        </Stack.Navigator>
      </QueryClientProvider>      
    </NavigationContainer>
  )
}

export default App