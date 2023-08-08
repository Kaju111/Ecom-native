import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const Splash = () => {
    const navigation=useNavigation()
  useEffect(()=>{
      setTimeout(()=>{
        navigation.navigate('Main')
      },2000)
  },[])
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Ecom User App</Text>
    </View>
  )
}

export default Splash


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#FF7F50',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold'
  },
  logo:{
    fontSize:40,
    color:'white'
  }
})



