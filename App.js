import { useState } from 'react';

import { StyleSheet, View, Text, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';
import Task from './components/Task';


export default function App() {
  
  const[task, setTask] = useState();
  const[taskItems, setTaksItems] = useState([]);

  const addTask = () => {

    setTaksItems([...taskItems, task])
    setTask(null);

  }


  const completeTask = (index) => {

    let itemsCopy = {...taskItems};
    itemsCopy.splice(index, 1);
    setTaksItems(itemsCopy);



  } 
  
  
  return (
   
   <View style={styles.container}>
      {/*sessão de tarefas*/}
      <View style={styles.taskWrapper}> 
      <Text style={styles.sectionTtile}>Tarefas do dia :p</Text>
      </View>

      <View style={styles.items}>
          {/*tarefas*/}

          {
            taskItems.map((item, index) => {
               return ( <TouchableOpacity key={index} onPress = { () => {completeTask(index)}}>

                <Task text={item}/>

               </TouchableOpacity>
               ) 
               
              
            })
    

          }



       </View>


  {/*task input*/}

    <KeyboardAvoidingView   
    style={styles.writeTaskWrapper} >

    <TextInput style={styles.input} placeholder={'diz ai patrão'} onChangeText ={ text => setTask(text)} value ={task} ></TextInput>

    <TouchableOpacity onPress={() => addTask()} >
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>



    </KeyboardAvoidingView>


    </View>



 );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d9d9d9',
  },

    taskWrapper:{
      
      paddingTop: 80,
      paddingHorizontal: 20,

    },
    
    sectionTtile:{

      fontSize: 24,
      fontWeight: 'bold'
      
    },
    
    items:{
      marginTop: 30,
    },

    writeTaskWrapper: {
      position: 'absolute',
      bottom: 60,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center'
    },

    input: {
      paddingVertical: 15,
      paddingHorizontal: 15,
      backgroundColor: '#FFF',
      borderRadius: 60,
      borderColor: '#C0C0C0',
      borderWidth: 1,
      width: 250,
    },


    addWrapper: {
      width: 60,
      height: 60,
      backgroundColor: '#FFF',
      borderRadius: 60,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: '#C0C0C0',
      borderWidth: 1,
    },
    
    addText: {},


});
