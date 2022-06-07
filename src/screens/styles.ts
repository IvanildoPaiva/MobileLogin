import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: 'left',
    paddingTop: 100,
    backgroundColor: '#ffffff',
  },
  Title: {
    fontWeight: '800',
    color: '#000',
    fontSize: 24,
    marginLeft: 10,
  },

  SubTitle: {
    marginLeft: 10,
    fontWeight: '800',
    color: '#513CCC',

    fontSize: 24,
  },
  Txt: {
    fontWeight: '400',
    fontSize: 12,
    marginLeft: 10,
    color: '#44566C',
  },

  Label: {
    color: '#1A1A1A',
    fontWeight: '700',
    left: 12,
    marginTop: 20,
  },

  InputNome: {
    width: 300,
    height: 40,
    marginBottom: 20,
    paddingLeft: 40,
    left: 12,
    backgroundColor: '#fff',
    borderColor: '#bebebe',
    color: '#BEBEBE',
    borderWidth: 1,
  },

  InputSenha: {
    width: 300,
    height: 40,
    paddingLeft: 40,
    left: 12,
    backgroundColor: '#fff',
    borderColor: '#bebebe',
    color: '#BEBEBE',
    marginBottom: 24,
    borderWidth: 1,
  },
  txtbutton: {
    textAlign: 'center',
    backgroundColor: '#513CCC',
    padding: 20,
    color: '#fff',
  },
});
