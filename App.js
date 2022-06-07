import React, {useState, useEffect} from "react";
import {View, StyleSheet, StatusBar, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import Torch from "react-native-torch";
import RNShake from "react-native-shake";
// import imagex from './assets/icons/eco-light-off.png';

const App = ()=>{
  const [toggle, setToggle] = useState(false);

  const handleChangeToggle = () => setToggle(oldToggle => !oldToggle);

  useEffect(() => {
    //liga flash do celular
    Torch.switchState(toggle);
  }, [toggle]);

  useEffect(() => {
    const subscription = RNShake.addListener(() => {
      setToggle(oldToggle => !oldToggle);
    });

    return () => subscription.remove();
  });

  return (

        <View style={toggle ? style.containerLight : style.container}>
          <TouchableOpacity
           onPress={handleChangeToggle}>
            <Image style={toggle ? style.lightOn : style.lightOff}
              source={toggle
                ? require('./assets/icons/eco-light.png')
                : require('./assets/icons/eco-light-off.png')}
                />
            <Image style={toggle ? style.lightOn : style.lightOff}
              source={toggle
                ? require('./assets/icons/logo-dio.png')
                : require('./assets/icons/logo-dio-white.png')}
                />
          </TouchableOpacity>  
        </View>
  )
};

export default App;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },

  containerLight: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  lightOn: {
    resizeMode: 'contain',
    alignSelf: "center",
    height: 250,
    width: 250,
  },

  lightOff: {
    resizeMode: 'contain',
    alignSelf: "center",
    tintColor: 'white',
    height: 250,
    width: 250,
  },

});