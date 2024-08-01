import { View, Text, TouchableOpacity, Image,FlatList } from 'react-native'
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context'
import { themeColors } from '../theme'
import {useNavigation} from '@react-navigation/native'
import Head from './Head';
import { useFonts } from 'expo-font';

import { StatusBar } from "expo-status-bar";

export default function Home() {

  const Navigation = useNavigation()

    // const DATA = [
    //     {
    //       id: 'bd7acbea-c1b1-46cs2-aed5-3ad53abb28ba',
    //       title: 'First Item',
    //     },
    //     {
    //       id: '3ac68afc-c605-48dd3-a4f8-fbd91aa97f63',
    //       title: 'Second Item',
    //     },
    //     {
    //       id: '58694a0f-3da1-471df-bd96-145571e29d72',
    //       title: 'Third Item',
    //     },
    //     {
    //       id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    //       title: 'First Item',
    //     },
    //     {
    //       id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    //       title: 'Second Item',
    //     },
    //     {
    //       id: '58694a0f-3da1-471f-bd96-145571e29d72',
    //       title: 'Third Item',
    //     },
        
    //   ];

    const [loaded] = useFonts({
      Roboto: require('../fonts/NotoSansChorasmian-Regular.ttf'),
      });

if(!loaded){
  return null
}

const notnow = () =>{
  alert("Your school isn't upload any photos")
}
  return (
    <View className="flex-1 bg-white" >
      <SafeAreaView  className="flex " style={{marginHorizontal:20, marginTop:10,marginBottom:20}}>
      
        <Head headerText={'Hello, Krishnakumar'} headerIcon={"sign-out"}/>
        
        <View  className="flex-row justify-center">
          <Image source={require('../img/DOMSCL.png')} 
          style={{width: 100, height: 100}}
          borderRadius={100} className="mt-9"/>
        </View>
      </SafeAreaView>
      
      
      
      <View 
        style={{borderTopLeftRadius: 0, borderTopRightRadius: 0}} 
        className="flex-1 bg-white px-8 pt-8">
      <Text className="items-center text-center pb-5 text-3xl font-bold" style={{fontFamily:'Roboto'}}>WELCOME TO DOMSCL</Text>
          



      {/* <FlatList showsVerticalScrollIndicator={false}
        data={DATA}
        renderItem={({item}) =>  <Card  />}
        keyExtractor={item => item.id}
      /> */}

      
      <View className="flex-row items-center bg-white p-3 rounded-3xl  mb-3 mx-2 justify-between">

      <TouchableOpacity onPress={()=> Navigation.navigate('Schedule')}>

            <Image className="rounded-3xl" style={{height: 90, width: 90}} source={require('../img/SCHEDULE.png')}/>
      </TouchableOpacity>
            
      <TouchableOpacity onPress={()=> Navigation.navigate('Homework')}>

            <Image className="rounded-3xl" style={{height: 90, width: 90}} source={require('../img/homework.png')}/>
      </TouchableOpacity>
            
      <TouchableOpacity onPress={()=> Navigation.navigate('Notification')}>

            <Image className="rounded-3xl" style={{height: 90, width: 90}} source={require('../img/Notification.png')}/>
      </TouchableOpacity>
            
            
      </View>


      <View className="flex-row items-center bg-white p-3 rounded-3xl  mb-3 mx-2 justify-between">

      
      <TouchableOpacity onPress={()=> Navigation.navigate('Timetable')}>
            <Image className="rounded-3xl" style={{height: 90, width: 90}} source={require('../img/timetable.png')}/>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=> Navigation.navigate('Marks')}>
            <Image className="rounded-3xl" style={{height: 90, width: 90}} source={require('../img/MARK.png')}/>
      </TouchableOpacity>
            
      <TouchableOpacity onPress={()=> Navigation.navigate('Teachers')}>
            <Image className="rounded-3xl" style={{height: 90, width: 90}} source={require('../img/teachers2.png')}/>
      </TouchableOpacity>
      </View>


      <View className="flex-row items-center bg-white p-3 rounded-3xl  mb-3 mx-2 justify-between">
      <TouchableOpacity onPress={()=> Navigation.navigate('Gallery')}>
            <Image className="rounded-3xl" style={{height: 90, width: 90}} source={require('../img/Gallery.png')}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> Navigation.navigate('Feedback')}> 
            <Image className="rounded-3xl" style={{height: 90, width: 90}} source={require('../img/Feedback.png')}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> Navigation.navigate('About')}> 
            <Image className="rounded-3xl" style={{height: 90, width: 90}} source={require('../img/about.png')}/>
            </TouchableOpacity>
            
            
      </View>
      

        
       
          
      </View>
    <StatusBar style='dark'>
      </StatusBar>
    </View>
    
  )
}