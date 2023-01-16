import React from 'react';
import { View, TextInput, StyleSheet, KeyboardAvoidingView, Platform, ScrollView, TouchableWithoutFeedback, Keyboard, Text } from 'react-native';
import { CustomSwitch, HeaderTitle } from '../components';
import { useForm } from '../hooks';
import { styles } from '../theme';

export const TextInputScreen = () => {

  const { form, onChange, isSubscribed } = useForm({
    name: '',
    email: '',
    phone: '',
    isSubscribed: false
  });

  return (
    <KeyboardAvoidingView
      behavior={ Platform.OS === 'ios' ? 'padding' : 'height' }
    >
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>        
    <View style={ styles.globalMargin }>
        <HeaderTitle title="TextInputs" />

        <TextInput 
            style={ stylesScreen.inputStyle }
            placeholder="Ingrese su nombre"
            autoCorrect={ false }
            autoCapitalize="words"
            onChangeText={ (value) => onChange(value, 'name') }
        />

        <TextInput 
            style={ stylesScreen.inputStyle }
            placeholder="Ingrese su email"
            autoCorrect={ false }
            autoCapitalize="none"
            onChangeText={ (value) => onChange(value, 'email') }
            keyboardType="email-address"
        />

        <TextInput 
            style={ stylesScreen.inputStyle }
            placeholder="Ingrese su telefono"
            onChangeText={ (value) => onChange(value, 'phone') }
            keyboardType="phone-pad"
        />


        <View style={ stylesScreen.switchRow }>
          <Text style={ stylesScreen.switchText }>Suscribirme</Text>
          <CustomSwitch isOn={ isSubscribed } onChange={ ( value ) => onChange(value, 'isSubscribed' ) } />
        </View>

        <HeaderTitle title={ JSON.stringify(form, null, 3) } />
    
        <HeaderTitle title={ JSON.stringify(form, null, 3) } />

        <TextInput 
            style={ stylesScreen.inputStyle }
            placeholder="Ingrese su telefono"
            onChangeText={ (value) => onChange(value, 'phone') }
            keyboardType="phone-pad"
        />
      <View style={{ height: 100 }} />
        
    </View>

    </TouchableWithoutFeedback>
    </ScrollView>
    </KeyboardAvoidingView>
  )
}


const stylesScreen = StyleSheet.create({
    inputStyle: {
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.3)',
        height: 50,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginVertical: 10
    },
    switchText: {
      fontSize: 25
  },
  switchRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
  }
});