'use strict';

import React, {
  Component,
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableHighlight,
  Alert,
  Image
} from 'react-native';


class loginView extends Component{
  render(){
    return(
      <Image style={styles.bI} source={{uri:'https://images.unsplash.com/photo-1430278896981-33ba4119856e?crop=entropy&fit=crop&fm=jpg&h=575&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1300'}}>
      <View style={styles.container}>
      <Text style={styles.heading}>
      Name
      </Text>
      <TextInput style={styles.input}
      placeholder='Usuario'/>
      <TextInput style={styles.input}
      placeholder='Contraseña'
      secureTextEntry={true}/>
      <TouchableHighlight style={styles.button} onPress={(this.onLogin.bind(this))}>
      <Text style={styles.textButton}>
      Login
      </Text>
      </TouchableHighlight>
      <Text style={styles.o}> o </Text>
      <TouchableHighlight style={styles.button2} onPress={(this.onReg.bind(this))}>
      <Text style={styles.textButton}>
      Registrate
      </Text>
      </TouchableHighlight>
      </View>
      </Image>
    );
  }
  onLogin(){
    console.log('Login complete');
  }
  onReg(){
    Alert.alert(
      'Registro',
      'Still no registry , you want to be notified when it is ready ?',
      [
        {
          text: 'Acept',
          onPress: (this.aceptar.bind(this))

        },
        {
          text: 'Cancel',
          onPress: (this.cancelar.bind(this))
        }
      ]
    )

  }
  aceptar(){
    console.log('send email');
  }
  cancelar(){
    console.log('no send email :( ');
  }
}
const styles = StyleSheet.create({

container: {
	flex: 1,
	paddingTop: 40,
	alignItems: 'center',
	padding: 10

},
bI:{
  flex:1
},
o: {
  fontSize:20,
  alignItems: 'center',
  justifyContent: 'center',
  padding: 4,
  color: 'black',
  backgroundColor: 'rgba(0,0,0,0)'
},
logo: {
	width: 69,
	height: 68

},
heading: {
	fontSize: 30,
	marginTop: 14,
	color: '#FFF',
  backgroundColor: 'rgba(0,0,0,0)'
},
input: {
	height:50,
	marginTop:10,
	padding: 4,
	fontSize: 18,
	borderWidth: 1,
	borderColor: '#48bbec',
	color: '#FFF',
  borderRadius: 10
},
button: {
height: 50,
backgroundColor: '#48bbec',
alignSelf: 'stretch',
marginTop: 15,
justifyContent: 'center',
borderRadius: 5
},
button2: {
height: 50,
backgroundColor: 'orange',
alignSelf: 'stretch',
marginTop: 15,
justifyContent: 'center',
borderRadius: 5
},
textButton: {

fontSize: 22,
color: '#FFF',
alignSelf: 'center'

},
loader:{
  marginTop: 25
}

 })


 module.exports = loginView;
