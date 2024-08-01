import { View, Text, TouchableOpacity, Image, Dimensions, Platform } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeftCircleIcon, MinusIcon, PlusIcon } from 'react-native-heroicons/outline';
import { HeartIcon, StarIcon } from 'react-native-heroicons/solid';
import { themeColors } from '../theme';
import { ScrollView } from 'react-native-gesture-handler';
const {width, height} = Dimensions.get('window');
const ios = Platform.OS == 'ios';


export default function Blog() {
  const [size, setSize] = useState('small');
  const navigation = useNavigation();
  return (
      <View className="flex-1">
      <SafeAreaView className=" flex">
      <StatusBar style="light" />
      <Image 
        source={require('../img/asd.jpeg')} 
        style={{height: 300, borderBottomLeftRadius: 50, borderBottomRightRadius: 50}} 
        className="w-full absolute" />
        <View className="mx-4 flex-row justify-between items-center">
          <TouchableOpacity className=" rounded-full " onPress={()=> navigation.goBack()}>
            <ArrowLeftCircleIcon size="50" strokeWidth={1.2} color="white" />
          </TouchableOpacity>
        </View>

         <View 
          style={{
            shadowColor: themeColors.bgDark,
            shadowRadius: 30,
            shadowOffset: {width: 0, height: 30},
            shadowOpacity: 0.9,
          }}
          className="flex-row justify-center">
          <Image source={'../img/asd.jpeg'} className="h-60 w-60" style={{marginTop: 0}} />
        </View> 

        <View  
          style={{backgroundColor: themeColors.bgLight}} 
          className="flex-row justify-center items-center mx-4 rounded-3xl p-1 mb-3 px-2 space-x-1 opacity-90 w-16">
          <StarIcon size="15" color="white" />
          <Text className="text-base font-semibold text-white">{4.5}</Text>
        </View>


        <View style={{height:'63%',width:'100%'}}>

        <ScrollView>

        <View className="flex-row items-center space-x-1 mt-5 ml-4 mb-2" >
                  <Text className="text-lg">
                    <Image source={require('../img/nexcap.png')} borderRadius={100} style={{height:20 ,width:20} } className='object-cover'/> 
                    <Text className="font-semibold text-gray-700"> Nexcap_Official </Text>
                    <Image source={require('../img/bule-tick.png')} style={{height:20 ,width:20} }/> 
                  </Text>
              </View>

        <View className="px-4 flex-row justify-between items-center">
            <Text style={{color: themeColors.text}} className="text-3xl font-semibold">
              {"React native Instagram clone using firebase, react native, expo, Etc....."}
            </Text>           
        </View>
        

        <View className="px-4 space-y-2 mt-4" >
          <Text style={{color: themeColors.text}} className="text-lg font-bold mt">About</Text>
          <Text className="text-gray-600 text-xl px-3" >
           {"ScrollViews can be configured to allow paging through views using swiping gestures by using the pagingEnabled props. Swiping horizontally between views can also be implemented on Android using the ViewPager component.On iOS a ScrollView with a single item can be used to allow the user to zoom content. Set up the maximumZoomScale and minimumZoomScale props and your user will be able to use pinch and expand gestures to zoom in and out.The ScrollView works best to present a small number of things of a limited size. All the elements and views of a ScrollView are rendered, even if they are not currently shown on the screen. If you have a long list of items which cannot fit on the screen, you should use a FlatList instead. So let's learn about list views next.ScrollViews can be configured to allow paging through views using swiping gestures by using the pagingEnabled props. Swiping horizontally between views can also be implemented on Android using the ViewPager component.On iOS a ScrollView with a single item can be used to allow the user to zoom content. Set up the maximumZoomScale and minimumZoomScale props and your user will be able to use pinch and expand gestures to zoom in and out.The ScrollView works best to present a small number of things of a limited size. All the elements and views of a ScrollView are rendered, even if they are not currently shown on the screen. If you have a long list of items which cannot fit on the screen, you should use a FlatList instead. So let's learn about list views next.ScrollViews can be configured to allow paging through views using swiping gestures by using the pagingEnabled props. Swiping horizontally between views can also be implemented on Android using the ViewPager component.On iOS a ScrollView with a single item can be used to allow the user to zoom content. Set up the maximumZoomScale and minimumZoomScale props and your user will be able to use pinch and expand gestures to zoom in and out.The ScrollView works best to present a small number of things of a limited size. All the elements and views of a ScrollView are rendered, even if they are not currently shown on the screen. If you have a long list of items which cannot fit on the screen, you should use a FlatList instead. So let's learn about list views next.ScrollViews can be configured to allow paging through views using swiping gestures by using the pagingEnabled props. Swiping horizontally between views can also be implemented on Android using the ViewPager component.On iOS a ScrollView with a single item can be used to allow the user to zoom content. Set up the maximumZoomScale and minimumZoomScale props and your user will be able to use pinch and expand gestures to zoom in and out.The ScrollView works best to present a small number of things of a limited size. All the elements and views of a ScrollView are rendered, even if they are not currently shown on the screen. If you have a long list of items which cannot fit on the screen, you should use a FlatList instead. So let's learn about list views next.ScrollViews can be configured to allow paging through views using swiping gestures by using the pagingEnabled props. Swiping horizontally between views can also be implemented on Android using the ViewPager component.On iOS a ScrollView with a single item can be used to allow the user to zoom content. Set up the maximumZoomScale and minimumZoomScale props and your user will be able to use pinch and expand gestures to zoom in and out.The ScrollView works best to present a small number of things of a limited size. All the elements and views of a ScrollView are rendered, even if they are not currently shown on the screen. If you have a long list of items which cannot fit on the screen, you should use a FlatList instead. So let's learn about list views next."}
           </Text>
        </View>
        
        </ScrollView>    
        </View>
       
      </SafeAreaView>
      
        
        
      
    </View>
  )
}