import React from "react";

import {View, Text, StyleSheet ,TouchableOpacity} from "react-native";
import { AntDesign } from '@expo/vector-icons';

export default function Task(props){

    return(
    
    <View style={styles.container}>
    
    <View>
        <Text style={styles.texto}>{props.text}</Text>

    </View>
    
    <View>
        <TouchableOpacity style={styles.botao}> 
            
        <AntDesign name="check" size={32} color="black" /> 
        
        </TouchableOpacity>
    </View>
    
    </View>
    
    
    );
    }


    const styles = StyleSheet.create({

        container:{
            width: 850,
            height: 200,
            alignItems: "center",
            justifyContent: "space-evenly",
            flexDirection: "row",
        
        },

        texto:{

            color:"#fff",
            fontSize: 32,


        },
    
    
        botao:{
    
            backgroundColor:"#04B404",
            width: 75,
            height: 75,
            borderRadius: 25,
            alignItems: "center",
            justifyContent:"center",
    
        },
    
    });


