import React from 'react';
import { StyleSheet, Text,TextInput, View,TouchableHighlight } from 'react-native';

export default class Cuaca1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      forecast: {
        main: '-',
        description: '-',
        temp: 0
      }
    };
  }

  getWeather= () => {
  let url = 'http://api.openweathermap.org/data/2.5/weather?q=' + this.state.city + '&appid=6e0aad2f88d67706d384acff392481d6&units=metric';
  fetch(url)
  .then((response) => response.json())
  .then((responseJson) => {
    console.log(responseJson);
    this.setState({
      forecast: {
        main: responseJson.weather[0].main,
        description: responseJson.weather[0].description,
        temp: responseJson.main.temp
      }
    });
  });
}


  render() {
    return (
      <View style={styles.containerMain}>
        <View style={styles.box1}>
            <Text style={{ textAlign: 'center', padding: 30, fontSize: 25, color: 'black' }}>
            Prakiraan Cuaca</Text>
        </View>
        <View style={styles.box2}>
             <Text style={{ textAlign: 'center', paddingTop: 5, fontSize: 20 }}>
              Masukan Nama Kota </Text>
        <View style={styles.box3}>
        <TextInput
             style={{ height: 50, color: 'black' }}
             placeholder="  "
              onChangeText={(city) => this.setState({ city })}
        />
        </View>
        <TouchableHighlight onPress={() => this.getWeather()}>
          <Text style={{textAlign: 'center',paddingTop:10,fontSize: 20,color:'#0000FF',}}>Lihat</Text>
          </TouchableHighlight>

         </View>
        <View style={styles.box4}>
        <Text style={{ padding: 10, fontSize: 26 }}>
          Suhu        : {this.state.forecast.temp} {"°Celcius"}{'\n'}
          Cuaca      : {this.state.forecast.main} {'\n'}
          Deskripsi : {this.state.forecast.description} {'\n'}
        </Text>
         </View>
         <View style={styles.box5}>
             <Text style={{ textAlign: 'center', padding: 18, fontSize: 14 }} >
             CopyRight@Metri</Text>
         </View>
          </View>
       );
     }
   }
   const styles = StyleSheet.create({
     containerMain: {
       backgroundColor: '#CCFFFF',
       flex: 1,
       flexDirection: 'column'
     },
     box1: {
       height: 80,
       backgroundColor: '#0066CC',
     },
     box2: {
        flex: 1,
        backgroundColor: '#FF6699',
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 20,
        justifyContent:'center',
        flexDirection: 'column',
        justifyContent: 'space-around',
      },
      box3:{
        alignItems:'center',
        marginLeft: 70,
        marginRight: 30,
        marginBottom: 30,
        backgroundColor:'white',
        borderColor:'black',
        borderWidth:1,
        justifyContent:'center',
        height:40,
        width:200,
      },
     box4: {
       flex: 1,
       backgroundColor: '#FF6699',
       marginTop: 10,
       marginLeft: 10,
       marginRight: 10,
       marginBottom: 20,
       flexDirection: 'row'
     },
     box5: {
       height: 60,
       backgroundColor: '#0066CC',
     },
      });