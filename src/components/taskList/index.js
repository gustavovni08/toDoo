import React from "react";
import { View, StyleSheet } from "react-native";
import Task from "../Task";


export default function TaskList(){

return(

<View style={styles.Container}>

<Task text="tarefa 1"></Task>
<Task text="tarefa 2"></Task>
<Task text="tarefa 3"></Task>


</View>


);
}


const styles = StyleSheet.create({

Container:{

    backgroundColor: "#585858",
    width: 850,
    height: 1020,
    alignItems: "center",
    justifyContent: "space-evenly",
    borderRadius: 25,




},



});