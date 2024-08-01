import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; 
import Home from "../home/Home";
// import Pro from "../profile/Pro";
import { Dimensions, LogBox, Platform, Text, View } from 'react-native';

import { themeColors } from '../theme'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {HomeIcon as HomeOutline, BookOpenIcon as HeartOutline, UserIcon as BagOutline } from 'react-native-heroicons/outline';
import {HomeIcon as HomeSolid, BookOpenIcon as HeartSolid, UserIcon as BagSolid} from 'react-native-heroicons/solid';
import Pro from '../profile/Pro';
import Get from '../Login/Get';
import Signup from '../Login/Signup';

import Signin from '../Login/Signin';
import Forgot from '../Login/Forgot';
import Forms from '../Login/Forms';
import Met from '../Met/Met';
import Blog from '../Met/Blog';
import Gallery from '../home/HomeComp/Gallery/teachers'
import Teachers from '../home/HomeComp/teachers/teachers';
import Notification from '../home/HomeComp/notification/Notification';
import About from '../home/HomeComp/About/About';
import Feedback from '../home/HomeComp/feedback/Feedback';
import Workcard from '../home/HomeComp/Homework/workcard';
import Homework from '../home/HomeComp/Homework/homework';
import Marks from '../home/HomeComp/marks/marks';
import Reportcard from '../home/HomeComp/marks/Reportcard';
import Schedule from '../home/HomeComp/schedule/Schedule'
import Timetable from '../home/HomeComp/timetable/Timetable';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const ios = Platform.OS == 'ios';
LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        contentStyle: {backgroundColor: 'white'}
      }}>
        <Stack.Screen name="Get" options={{headerShown: false}} component={Get} />
        <Stack.Screen name="Home" options={{headerShown: false}} component={HomeTabs} />
        
        
        <Stack.Screen name="Signup" options={{headerShown: false}} component={Signup} />
        
        <Stack.Screen name="Signin" options={{headerShown: false}} component={Signin} />
        
        <Stack.Screen name="Forms" options={{headerShown: false}} component={Forms} />
        <Stack.Screen name="Forgot" options={{headerShown: false}} component={Forgot} />
        
        <Stack.Screen name="Blog" options={{headerShown: false}} component={Blog} />
        
        <Stack.Screen name="Teachers" options={{headerShown: false}} component={Teachers} />
        
        <Stack.Screen name="Notification" options={{headerShown: false}} component={Notification} />
        
        <Stack.Screen name="About" options={{headerShown: false}} component={About} />
        
        <Stack.Screen name="Feedback" options={{headerShown: false}} component={Feedback} />
        
        <Stack.Screen name="Homework" options={{headerShown: false}} component={Homework} />
        
        <Stack.Screen name="Workcard" options={{headerShown: false}} component={Workcard} />
        <Stack.Screen name="Marks" options={{headerShown: false}} component={Marks} />
        
        <Stack.Screen name="Reportcard" options={{headerShown: false}} component={Reportcard} />
        
        <Stack.Screen name="Schedule" options={{headerShown: false}} component={Schedule} />
        
        <Stack.Screen name="Timetable" options={{headerShown: false}} component={Timetable} />
        
        <Stack.Screen name="Gallery" options={{headerShown: false}} component={Gallery} />
      </Stack.Navigator>
    </NavigationContainer>
  )
  
}

function HomeTabs(){
  return (
    <Tab.Navigator 
        initialRouteName='home'
        screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({ focused }) => menuIcons(route, focused),
        tabBarStyle: {
          marginBottom: 0,
          height: 75,
          alignItems: 'center',
          
          borderRadius: 0,
          marginHorizontal: 0,
          backgroundColor: themeColors.bgLight,

        },
        tabBarItemStyle: {
          marginTop: ios? 30: 0,
          
        }
      })}
      
      >
      <Tab.Screen name="favourite" component={Met} />
      <Tab.Screen name="home" component={Home} />
      <Tab.Screen name="cart" component={Pro} />
    </Tab.Navigator>
  )
}

const menuIcons = (route, focused)=> {
  let icon;
  

  if (route.name === 'home') {
    icon =  focused? <HomeSolid size="30" color={themeColors.bgLight} /> : <HomeOutline size="30" strokeWidth={2} color="white" />
  } else if (route.name === 'favourite') {
    icon =  focused? <HeartSolid size="30" color={themeColors.bgLight} /> : <HeartOutline size="30" strokeWidth={2} color="white" />
  }else if(route.name==='cart'){
    icon =  focused? <BagSolid size="30" color={themeColors.bgLight} /> : <BagOutline size="30" strokeWidth={2} color="white" />
  }

  
  let buttonClass = focused? "bg-white": "";
  return (
    <View className={"flex items-center rounded-full p-3 shadow " + buttonClass}>
      {icon}
    </View>
  )
}