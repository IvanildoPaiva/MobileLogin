import {styles} from './styles';

import React from 'react';

import {View, Text, TextInput, TouchableOpacity} from 'react-native';

export function Login() {
  return (
    <View style={styles.container}>
      <Text style={styles.Title}>Entre com as suas</Text>
      <Text style={styles.SubTitle}>credenciais de acesso</Text>
      <Text style={styles.Txt}>
        Bem-vindo! Por favor, insira seus dados para realizar o login no sistema
      </Text>

      <Text style={styles.Label}>Usuário</Text>
      <TextInput style={styles.InputNome} placeholder="Informe seu usuário" />

      <Text style={styles.Label}>Senha</Text>
      <TextInput style={styles.InputSenha} placeholder="Senha" />
      <TouchableOpacity>
        <Text style={styles.txtbutton}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}
