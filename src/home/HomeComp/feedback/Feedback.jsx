import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'

import { SafeAreaView } from 'react-native-safe-area-context'
import { ArrowLeftIcon } from 'react-native-heroicons/solid'
import { themeColors } from '../../../theme'


import SelectList from 'react-native-select-dropdown'
import { KeyboardAvoidingView } from 'react-native';
import Head from '../Head';

import { StatusBar } from "expo-status-bar";
import { ScrollView } from 'react-native-gesture-handler';

export default function Feedback() {

    const countries = ["Egypt", "Canada", "Australia", "Ireland", "India"]



    const Courses = ["CSE", "ECE", "MECH", "AI&DS", "EEE"]




    const [textInputName, setTextInputName] = useState('');
    const [textInputClass, setTextInputClass] = useState('');
    const [textInputPhone, setTextInputPhone] = useState('');
    const [textInputPara, setTextInputPara] = useState('');
    const [textInputCourse, setTextInputCourse] = useState('');

    const [textsel, setsel] = useState('');

    const checkTextInput = () => {
        //Check for the Name TextInput
        if (!textInputName.trim()) {
            alert('Please Enter Name');
            return;
        }
        //Check for the phone TextInput
        if (!textInputPhone.trim()) {
            alert('Please Enter Phone Number');
            return;
        }
        //Check for the class TextInput
        if (!textInputClass.trim()) {
            alert('Please Enter Class');
            return;
        }
        //Check for the Email TextInput
        if (!textInputPara.trim()) {
            alert('Please Enter Content');
            return;
        }
        // if (!textInputCourse.trim()) {
        //   alert('Please Enter Course');
        //   return;
        // }
        //Checked Successfully
        //Do whatever you want
        alert('Success');
    };

    const [selected, setSelected] = useState(undefined);



    return (
        
        <View className="flex-1 bg-white" style={{ backgroundColor: themeColors.bg }}>
            <SafeAreaView className="flex ">
                <View style={{ marginHorizontal: 20, marginTop: 10, marginBottom: 20 ,color:'white'}} className="justify-end">

                    <Head IconColor={'white'} />
                </View>
                <View className="flex-row justify-start">

                </View>
                <View className="flex-row justify-center">
                    <Image source={require('../../../img/Forms.png')}
                        style={{ width: 150, height: 150 }}
                        //   borderTopLeftRadius={50}
                        borderRadius={50}
                        backgroundColor='transprant' />
                </View>
                <Text className='mb-5 mt-3 mx-2 text-center' style={{ fontWeight: "500", fontSize: 25, color: 'white' }}>FEEDBACK</Text>


            </SafeAreaView>

                <ScrollView>
            <View
                style={{ borderTopLeftRadius: 50, borderTopRightRadius: 50}}
                className="flex-1 bg-white px-8 pt-8">
                <View className="form space-y-2">
                    <Text className="text-gray-700 ml-4">Name</Text>
                    <TextInput
                        onChangeText={(value) => setTextInputName(value)}
                        className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
                        placeholder="Name"
                    />

                    <Text className="text-gray-700 ml-4">Phone</Text>
                    <TextInput
                        onChangeText={(value) => setTextInputPhone(value)}
                        className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
                        placeholder="Phone"
                        keyboardType="numeric"
                    />

                    <Text className="text-gray-700 ml-4">Class</Text>
                    <TextInput
                        onChangeText={(value) => setTextInputClass(value)}
                        className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
                        placeholder="Phone"
                    />

                    <Text className="text-gray-700 ml-4">FeetBack</Text>
                    <TextInput
                        onChangeText={(value) => setTextInputPara(value)}
                        className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
                        placeholder="District"
                        editable
                        multiline
                        maxLength={250}
                    />



                    <TouchableOpacity onPress={checkTextInput}
                        className="py-3 bg-yellow-400 rounded-xl">
                        <Text

                            className="text-xl font-bold text-center text-gray-700"
                        >
                            Submit
                        </Text>
                    </TouchableOpacity>

                </View>

                <View>
                            <Text className="text-center top-5 text-sm mb-20">Copy Rights ©️ 2023 - Nexcap</Text>
                        </View>
            </View>
                </ScrollView>
            
        <StatusBar style='light'>
        </StatusBar>
        </View>

    )
}