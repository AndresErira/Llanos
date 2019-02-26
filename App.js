/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
import React, {Component} from 'react';
import {FlatList,Image,Alert,ScrollView,Platform, StyleSheet, Text, View, TextInput, Button} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on youryboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component{
  constructor(props){
    super(props);
    this.state={text:''};
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={{flex:2, backgroundColor: 'powderblue'}} />
        <TextInput style={{height:40}}
                  placeholder="Escriba aqui para traducir" 
                  onChangeText={(text)=>this.setState({text})}/>
        <Text style={styles.welcome}>Salida: {this.state.text} </Text>
        <Button onPress={()=>{ Alert.alert("Presionaste el Button");}} title="Presioname" />
        <FlatList style={{flex:3}}
            data={[
              {key:'Estudiar'},
              {key:'Trabajar'},
              {key:'Dormir'},
              {key:'Comer'},
              {key:'Practicar'},
              {key:'Ejercitar'},
              {key:'Lavar'},
              {key:'Organizar'},
              {key:'Programar'},
              {key:'Estudiar'},
              {key:'Trabajar'},
              {key:'Dormir'},
              {key:'Comer'},
              {key:'Practicar'},
              {key:'Ejercitar'},
              {key:'Lavar'},
              {key:'Organizar'},
              {key:'Programar'},
            ]}
            renderItem={({item})=><Text style={styles.item}>{item.key}</Text>}
        />       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    flex:1,
    fontSize: 20,
    height:800,
    textAlign: 'center',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  bigBlue:{
    color: 'blue',
    fontSize: 30,
    fontWeight:'bold',
  },
  red:{
    color: 'red'
  }
});
