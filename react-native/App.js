import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';

export default function App() {
  const [count,setCount]=useState(0)
  const fnIncCount=()=>{
    setCount(count+1)
  }
  return (
    <View style={styles.container}>
        <Text style={styles.result}>{count}</Text>
        <Button
          onPress={fnIncCount}
          title="Incremetn Count"
          color="#841584"
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  result:{
    fontSize:'30px',
    fontWeight:'bold'
  }
});
