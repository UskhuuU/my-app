import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { PaperProvider } from "react-native-paper";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ClerkProvider, SignedOut, SignedIn } from "@clerk/clerk-expo";
import SignUpScreen from "./components/SignUpScreen";
import CommentsScreen from "./components/CommentsScreen";
import DetailsScreen from "./components/DetailsScreen";
import HomeScreen from "./components/HomeScreen";
import SignInScreen from "./components/SignInScreen";
import ProfileScreen from "./components/ProfileScreen";

const CLERK_PUBLISHABLE_KEY =
  "pk_test_c2hhcmluZy1iZWFyLTkuY2xlcmsuYWNjb3VudHMuZGV2JA";

export default function App() {
  return (
    <ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY}>
      <PaperProvider>
        <NavigationContainer>
          <SignedIn>
            <StackNavigator />
          </SignedIn>
          <SignedOut>
            <AuthNavigator />
          </SignedOut>
          <StatusBar style="auto" />
        </NavigationContainer>
      </PaperProvider>
    </ClerkProvider>
  );
}

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tabs"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Details" component={DetailsScreen} />
      <Stack.Screen name="Comments" component={CommentsScreen} />
    </Stack.Navigator>
  );
}

function AuthNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="SignIn" component={SignInScreen} />
    </Stack.Navigator>
  );
}
