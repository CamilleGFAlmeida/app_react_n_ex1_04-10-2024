import { StatusBar } from 'react-native';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-web';

export default function App() {
  return (
    <>
    <StatusBar barStyle="dark-content" backgroundColor="white"/> 
    <SafeAreaView style={styles.conteudo}>
    <View style={styles.container}>
      <Text style={styles.titulo}>Às Sextas usamos preto!</Text>
      <StatusBar style="auto" />
    </View>
    </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  barra:{
    StatusBar: 'light-content', 
    backgroundColor: 'white',
    height: 50, 
  }
  conteudo:{
    flex: 1, 
    backgroundColor: '#fff', 
  }
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20, 
    borderWidth: 5,
    borderColor: 'blue', 
    margin: 10,
    marginTop: 30,  
  },
  titulo:{
    color: 'blue', 
    fontSize: 24, 
    fontWeight: 'bold', 
  }
});
