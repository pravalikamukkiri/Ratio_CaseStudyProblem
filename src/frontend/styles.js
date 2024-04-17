
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  modalTextHeader: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#000000',
    textAlign: 'left',
  },
  modalTextHeader2: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 15,
      textAlign: 'center',
      color: '#000000',
  },
  modalTextSub: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'left',
    color: '#000000',
  },
  footer: {
      bottom: 10,
      alignItems: 'center',
      width: '100%',
      flexDirection: 'row',
  },

  footer2: {
    bottom: 10,
    width: '100%',
    },

  modalTextFooter : {
    marginTop: 30,
    fontSize: 16,
  },
  modalTextFooter2 : {
      fontSize: 13,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0F9690',
  },
  modalView: {
    marginTop:200,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    justifyContent: 'center',
    alignItems: 'flex-start',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 12,
    padding: 10,
    elevation: 2,
    backgroundColor: '#D9D9D9',
    marginTop: 15,
  },
  button2: {
      borderRadius: 12,
      padding: 10,
      elevation: 2,
      backgroundColor: '#D9D9D9',
      marginTop: 15,
      alignSelf: 'stretch',
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
    },
  buttonText: {
      fontSize: 16,
      textAlign: 'center',
      color: '#000000',
    },
  buttonText2: {
        fontSize: 20,
        textAlign: 'center',
        color: '#000000',
        fontWeight: 'bold',
      },

  buttonsContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignSelf: 'stretch',
      marginTop: 15,
    },

  buttonLeft: {
      width: 140,
      backgroundColor: '#D9D9D9',
      marginRight: 10,
      alignSelf: 'stretch',
    },
    buttonRight: {
      width: 140,
      backgroundColor: '#D9D9D9',
      marginLeft: 10,
      alignSelf: 'stretch',

    },
  exitButton: {
      backgroundColor: '#D9D9D9',
      borderRadius: 5,
      marginLeft:10,
      marginTop:30,
      width: 24,
      height: 24,
  },

});
