import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { LoginStyles as styles } from '../Styles'

const LoginContainer: React.FC = ({ children }) => {
  return <View style={styles.container}>{children}</View>
}

const LoginText: React.FC<{
  placeholder?: string
  onChange: (text: string) => void
  secure?: boolean
}> = ({ placeholder, onChange, secure }) => {
  return (
    <View style={styles.inputView}>
      <TextInput
        style={styles.inputText}
        placeholder={placeholder}
        placeholderTextColor='#003f5c'
        onChangeText={onChange}
        secureTextEntry={secure}
      />
    </View>
  )
}
const LoginForgotPassword: React.FC = () => {
  return (
    <TouchableOpacity>
      <Text style={styles.forgot}>Forgot Password?</Text>
    </TouchableOpacity>
  )
}

const LoginButton = () => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity
      style={styles.loginBtn}
      onPress={() =>
        navigation.navigate('Park Selection', { name: 'Park Selection' })
      }
    >
      <Text style={styles.loginText}>LOGIN</Text>
    </TouchableOpacity>
  )
}
const SignupButton: React.FC = () => {
  return (
    <TouchableOpacity>
      <Text style={styles.loginText}>Signup</Text>
    </TouchableOpacity>
  )
}
const Login = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPass] = useState('')
  return (
    <LoginContainer>
      <Text style={styles.logo}>Welcome</Text>
      <LoginText placeholder='Username...' onChange={setEmail} />
      <LoginText placeholder='Password...' onChange={setPass} secure />
      <LoginForgotPassword />
      <LoginButton />
      <SignupButton />
    </LoginContainer>
  )
}
export default Login
