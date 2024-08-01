import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ArrowLeftCircleIcon, MinusIcon, PlusIcon } from 'react-native-heroicons/outline';
import { useState } from 'react';

import {useNavigation} from '@react-navigation/native'
const Head = ({ headerText, IconColor }) => {


	
	const navigation = useNavigation()
	var currentcolor = true;
	if(IconColor){
		currentcolor=IconColor
	} else{
		currentcolor='black'
	}
	return (
		<View style={{ flexDirection: "row" }}>
			<TouchableOpacity className=" rounded-full " onPress={()=> navigation.goBack()}>
				<ArrowLeftCircleIcon size="50" strokeWidth={1.2} color={currentcolor} />
			</TouchableOpacity>
		</View>
	);
};

export default Head;

const styles = StyleSheet.create({});