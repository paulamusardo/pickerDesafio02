import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  Image, 
  SafeAreaView 
} from 'react-native';
import { Picker } from '@react-native-picker/picker';

// --- 1. COMPONENTE CABECALHO ---
const Cabecalho = () => {
  return (
    <View style={styles.header}>
      <Image 
        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3242/3242120.png' }} 
        style={styles.logo} 
      />
      <Text style={styles.headerTitle}>Componente Picker</Text>
    </View>
  );
};

// --- 2. COMPONENTE CONTEUDO ---
const Conteudo = () => {
  const [nome, setNome] = useState('');
  const [linguagem, setLinguagem] = useState('Python');
  const [mensagem, setMensagem] = useState('');
  
  // Novo estado para controlar a cor de fundo do Input
  const [corFundoInput, setCorFundoInput] = useState('#fff');

  // Função que altera a cor baseada no evento de foco/desfoque
  const corDeFoco = (cor) => {
    setCorFundoInput(cor);
  };

  const handleConfirmar = () => {
    if (nome.trim() === '') {
      setMensagem('Por favor, Digite seu nome!');
    } else {
      setMensagem(`Olá ${nome}, a sua linguagem de programação favorita é ${linguagem}`);
    }
  };

  return (
    <View style={styles.body}>
      <Text style={styles.label}>Escolha Linguagem Favorita</Text>
      
      <TextInput
        // Unimos o estilo padrão com a cor de fundo dinâmica usando um array
        style={[styles.input, { backgroundColor: corFundoInput }]}
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={(texto) => setNome(texto)}
        // Eventos disparados ao interagir com o input:
        onFocus={() => corDeFoco('orange')}
        onBlur={() => corDeFoco('#fff')}
      />

      <Text style={styles.label}>Escolha uma linguagem:</Text>
      
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={linguagem}
          onValueChange={(itemValue) => setLinguagem(itemValue)}
        >
          <Picker.Item label="Python" value="Python" />
          <Picker.Item label="JavaScript" value="JavaScript" />
          <Picker.Item label="Java" value="Java" />
          <Picker.Item label="C#" value="C#" />
          <Picker.Item label="Ruby" value="Ruby" />
        </Picker>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleConfirmar}>
        <Text style={styles.buttonText}>Confirmar</Text>
      </TouchableOpacity>

      <Text style={styles.resultadoTexto}>
        {mensagem}
      </Text>
    </View>
  );
};

// --- 3. COMPONENTE PRINCIPAL (APP) ---
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Chamando os componentes isolados */}
      <Cabecalho />
      <Conteudo />
    </SafeAreaView>
  );
}

// --- ESTILOS ---
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingVertical: 30,
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 10,
    resizeMode: 'contain',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#002df0',
  },
  body: {
    flex: 1,
    backgroundColor: '#bf5df0',
    paddingHorizontal: 20,
    paddingTop: 30,
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    color: '#000',
    marginBottom: 10,
  },
  input: {
    width: '100%',
    height: 45,
    borderRadius: 4,
    paddingHorizontal: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  pickerContainer: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 20,
    justifyContent: 'center',
  },
  button: {
    width: '100%',
    backgroundColor: '#002df0',
    height: 50,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resultadoTexto: {
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
    marginTop: 10,
  }
});