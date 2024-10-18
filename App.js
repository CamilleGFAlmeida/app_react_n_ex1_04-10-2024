import { StatusBar } from 'react-native';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <SafeAreaView style={styles.conteudo} >
        <View style={styles.container}>
          <Text style={styles.titulo}>Hello World!</Text>          
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
  },
  conteudo: {
    flex: 1,
    backgroundColor: '#fff',

  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 5,
    borderColor: 'red',
    margin: 10,
  },
  titulo:{
    color: 'blue',
    fontSize: 24,
    fontWeight: 'bold',
  }
});