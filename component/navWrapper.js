import React from "react";
//import WelcomeScreen from "./Screens/WelcomeScreen";
import Merchandise from "../Screens/Merchandise";
import Instantp from "../Screens/Instantp";
import HomeScreen from "../Screens/HomeScreen";
import StoreWeb from "../Screens/StoreWeb";
import Settingsscreen from "../Screens/Settingsscreen";
import { Detail } from "../Screens/Detail";
import Policy from "../Screens/Policy";
import Support from "../Screens/Support";
import moudakdesigner from "../Screens/moudakdesigner";
import { Icon } from "react-native-elements";
import {
  createSwitchNavigator,
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";

// nav configs
const Store = createStackNavigator({
  Store: {
    screen: StoreWeb,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: "Store"
      };
    }
  },
  Detail: {
    screen: Detail
  }
});
/*
  const ProfileStack = createStackNavigator({
    Profile: {
      screen: Profile,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: "Profile"
        };
      }
    }
  });*/
const Settings = createStackNavigator({
  Settingsscreen: {
    screen: Settingsscreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: "Settings"
      };
    }
  },
  Policy: {
    screen: Policy,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: "Our Policy"
      };
    }
  },
  Support: {
    screen: Support,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: "Support"
      };
    }
  },
  moudakdesigner: {
    screen: moudakdesigner,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: "Moudak Designer"
      };
    }
  }
});
//My adding add screen names here for staking navigation
const Home = createStackNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: "Home"
      };
    }
  },
  Instantp: {
    screen: Instantp,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: "Paper Printings"
      };
    }
  },
  Merchandise: {
    screen: Merchandise,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: "Custom Printings"
      };
    }
  }
});

const DashboardTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Icon name="home" color={tintColor} size={24} />
        )
      })
    },
    Store: {
      screen: Store,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Icon name="store" color={tintColor} size={24} />
        )
      })
    },
    Settings: {
      screen: Settings,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Icon name="settings" color={tintColor} size={24} />
        )
      })
    }
  },

  {
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        header: null,
        headerTitle: routeName
      };
    }
  }
);
const DashboardStackNavigator = createStackNavigator({
  DashboardTabNavigator: DashboardTabNavigator
});

const AppSwitchNavigator = createSwitchNavigator({
  // Welcome: { screen: WelcomeScreen },
  Dashboard: { screen: DashboardStackNavigator }
});

const AppContainer = createAppContainer(AppSwitchNavigator);
export { AppContainer };
