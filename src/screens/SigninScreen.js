import * as React from 'react'
import { AsyncStorage } from '@react-native-async-storage/async-storage'
import { useContext } from 'react'
import { SafeAreaView, Text, View, TextInput, Button, StyleSheet } from 'react-native'
import { apiUrl } from '../const'
import MarblePrimaryButton from "../../components/atoms/buttons/MarblePrimaryButton.js";
import TextField from "../../components/atoms/inputs/TextField.tsx";
// import { View } from 'react-native-web'
import { AuthContext } from '../context/AuthContext'

const SignInScreen = ({ navigation, route }) => {
    const [login, onChangeLogin] = React.useState('user1')
    const [password, onChangePassword] = React.useState('password1')
    // const [token, setToken] = React.useState('')
    const [userId, setUserId] = React.useState(0)
    const [userName, setUserName] = React.useState('')

    const { token, setToken } = useContext(AuthContext)

    function saveData(tok) {
        console.log("Saving", tok)
        _storeData = async () => {
            try {
                await AsyncStorage.setItem('token', tok)
                console.log(_storeData)
                console.log("Saved token", tok)
            } catch (error) {
                console.log('error')
                console.log(error) // Error saving data
            }
        }

        console.log('Reading')
        _retrieveData = async () => {
            try {
                const t = await AsyncStorage.getItem('token')
                if (t !== null) {
                    console.log("We have token", t)
                }
            } catch (error) {
                console.log(error) // Error saving data
            }
        }
        console.log('Read')

    }


    function signIn() { doSignIn() }
    
    function signOut() { 
        setToken('')
        setUserId(0)
        setUserName('')
        saveData('')
        // alert('You are successfully sign out')
    }
    
    const doSignIn = async () => {
        try {
            const user = {'user' : {'email': login, 'password': password}}
            const response = await fetch( 
                apiUrl + "/v1/login",
                {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    ///our json
                    body: JSON.stringify(user)
                }
            )
            let json = await response.json() // получаем тело ответа

            if (typeof json['token'] !== 'undefined') {
                setUserId(json.id)
                setUserName(json.email)
                setToken(json.jti)
                // saveData(json.token)
                // alert('You are successfully logged in as a user "' +
                    //   json.login +'"')
            } else if (typeof json['message'] !== 'undefined') {
                alert(json.message)
            } else console.log(json)
        } catch (error) {
            alert(error)
        } finally {}

        //console.log(JSON.stringify( {'login': login, 'password': password} ))
        // await fetch(apiUrl + '/auth/signin',
        //     {
        //         method:'POST',
        //         headers:
        //             {
        //                 'Accept': 'application/json',
        //                 'Content-Type': 'application/json'
        //             }
        //     },
        //     { body: JSON.stringify( {'login': login, 'password': password} ) }
        // ).then(res => res.json()).then(resData => {
        //     console.log(res)
            // console.log(resData)
            //var d = JSON.parse(resData); // convert it to an object
            // alert(d.data);
            // alert(resData['token']);
            // console.log(resData);
            // console.log(resData['token']);
            // console.log(d.data);
        // })
    }


    return (
      <SafeAreaView>
        <TextField
            // style={styles.input}
            onChangeText={onChangeLogin}
            value={login}
            label="Enter login"
        />
        <TextField
            // style={styles.input}
            onChangeText={onChangePassword}
            value={password}
            label="Enter password"
        />
        <MarblePrimaryButton
            onPress={token === '' ? signIn : signOut}
            title={token === '' ? 'Sign In' : 'Sign out'}
            // color="#841584"
            // accessibilityLabel="Learn more"
        />
        <View style={styles.text}>
            <Text> {token === '' ? '' : 'Token: ' + token} </Text>
            <Text> {userId === 0 ? '' : 'User id: ' + userId} </Text>
            <Text> {userName === '' ? '' : 'User name: ' + userName} </Text>
        </View>
      </SafeAreaView>
    )
    // <Button
    //     onPress={ () => navigation.goBack() }
    //     title="Home"
    //     color="#841584"
    //     accessibilityLabel="Learn more"
    // />
}

export default SignInScreen

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
    },
    text: {
        margin: 12
    }
})
  

////////////////////
// const doSignIn = async() => {
//     await fetch(apiUrl + '/auth/signin',
//         {
//             method:'GET',
//             headers:{
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json',
//                 'Authorization': 'Bearer ' + token
//             }
//         })
//     .then(res => res.json())
//     .then(resData => {
//         //var d = JSON.parse(resData); // convert it to an object
//         // alert(d.data);
//         alert(resData['data']);
//         // console.log(resData);
//         console.log(resData['data']);
//         // console.log(d.data);
//     });
// }
