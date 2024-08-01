import { View, Text, Image,  Dimensions ,TouchableOpacity} from 'react-native'
import React from 'react'
import { themeColors } from '../../../theme/index'
const {width, height} = Dimensions.get('window');
import { useNavigation } from '@react-navigation/native';
import { DataOfScl } from '../../../theme/index';


export default function Imgcard({item}) {
    const Navigation = useNavigation();
    
    return (
        <TouchableOpacity 
        
        >
          <View style={{shadowColor: themeColors.bgColor(0.2), shadowRadius: 7}} className=" mx-3 bg-white rounded-3xl shadow-lg mb-10">
            <View className="px-3 pb-4 space-y-2" >
            <View className="flex-row items-center space-x-1 mt-5">
                  <Text className="text-lg">
                    <Image source={require('../../../img/nexcap.png')} borderRadius={100} style={{height:20 ,width:20} } className='object-cover'/> 
                    <Text className="font-semibold text-gray-700"> {DataOfScl.School_code} </Text>
                    <Image source={require('../../../img/bule-tick.png')} style={{height:20 ,width:20} }/> 
                  </Text>
              </View>
              <Image  className="w-full h-96 bg-cover rounded-xl " style={{}}  source={{uri:item[0].Pic}}/>
            
             
              <Text className="text-xl font-bold pt-2">{item[0].Title}</Text>
              
              <View className="flex-row items-center space-x-1">
                  <Text className="text-s">
                      <Text className="text-blue-700"> {item[0].Date}</Text>
                  </Text>
                  
              </View>
              
            </View>
          </View>
        </TouchableOpacity>
        
      )
}