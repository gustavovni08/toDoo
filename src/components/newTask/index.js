import React, {useState} from "react";
import {View, StyleSheet, TextInput, touchbleOpacity, Touchable, TouchableOpacity} from "react-native";
import { AntDesign } from '@expo/vector-icons';



export default function NewTask(){

const [task, setTask] = useState();
const addTask = () => {

 alert(task);

}



return(

<View style={styles.container}>

<TextInput placeholder=" O que você precisa fazer?" style={styles.input} value={task} onChangeText={ text => setTask() }></TextInput>
<TouchableOpacity style={styles.botao} onPress = {() => addTask}> <AntDesign name="plus" size={32} color="black" /> </TouchableOpacity>

</View>


);
}


const styles = StyleSheet.create({

    container:{
        backgroundColor: "#585858",
        width: 850,
        height: 200,
        alignItems: "center",
        justifyContent: "space-evenly",
        flexDirection: "row",
        borderRadius: 25,
        




    },

    input:{
       
        backgroundColor:"#fff",
        width: 400,
        height: 75,
        borderRadius: 25,
        color:"#000",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 32,
    },

    botao:{

        backgroundColor:"#D7DF01",
        width: 75,
        height: 75,
        borderRadius: 25,
        alignItems: "center",
        justifyContent:"center",

    },

});




