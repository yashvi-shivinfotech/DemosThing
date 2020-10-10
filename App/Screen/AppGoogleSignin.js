import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  StatusBar,
  Image,
  StyleSheet,
  Button,
  Alert
} from 'react-native'
import {
  GoogleSigninButton,
  GoogleSignin,
  statusCodes
} from '@react-native-community/google-signin'
import { WEB_CLIENT_ID } from '../utils/keys'
import { firebase } from '@react-native-firebase/auth'

export default function AppGoogleSignin() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userInfo, setUserInfo] = useState(null)
  const [error, setError] = useState(null)


  function configureGoogleSign() {
    GoogleSignin.configure({
      webClientId: WEB_CLIENT_ID,
      offlineAccess: true
    })
  }

  useEffect(() => {
    configureGoogleSign()
  }, [])

  async function signIn() {
    try {
    

      await GoogleSignin.hasPlayServices();
      console.log("reached google sign in");
      const userInfo = await GoogleSignin.signIn();
      console.log("UserProfile",userInfo);
      Alert.alert("success:" + JSON.stringify(userInfo));

      this.setState({ userInfo });
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log("error occured SIGN_IN_CANCELLED");
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log("error occured IN_PROGRESS");
        // operation (f.e. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log("error occured PLAY_SERVICES_NOT_AVAILABLE");
      } else {
        console.log(error)
        console.log("error occured unknow error");

      }
    }
  }

  async function getCurrentUserInfo() {
    try {
      const userInfo = await GoogleSignin.signInSilently()
      setUserInfo(userInfo)
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_REQUIRED) {
        // when user hasn't signed in yet
        Alert.alert('Please Sign in')
        setIsLoggedIn(false)
      } else {
        Alert.alert('Something else went wrong... ', error.toString())
        setIsLoggedIn(false)
      }
    }
  }

  async function signOut() {
    try {
      await GoogleSignin.revokeAccess()
      await GoogleSignin.signOut()
      setIsLoggedIn(false)
    } catch (error) {
      Alert.alert('Something else went wrong... ', error.toString())
    }
  }

  return (
    <>
      <StatusBar barStyle='dark-content' />
    <View style={styles.container}>
      <GoogleSigninButton
        style={styles.signInButton}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={() => signIn()}
      />
      <View style={styles.statusContainer}>
        {isLoggedIn === false ? (
          <Text style={styles.message}>You must sign in!</Text>
        ) : (
          <Button onPress={() => signOut()} title='Sign out' color='#332211' />
        )}
      </View>
      <View style={styles.userInfoContainer}>
        {isLoggedIn === true ? (
          <>
            <Text style={styles.displayTitle}>
              Welcome {userInfo.user.name}
            </Text>
            <View style={styles.profileImageContainer}>
              <Image
                style={styles.profileImage}
                source={{
                  uri: userInfo && userInfo.user && userInfo.user.photo
                }}
              />
            </View>
          </>
        ) : null}
      </View>
    </View>
    </>
  )

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  signInButton: {
    width: 192,
    height: 48
  },
  statusContainer: {
    marginVertical: 20
  },
  message: {
    fontSize: 20,
    color: 'red'
  },
  userInfoContainer: {
    marginVertical: 20
  },
  profileImageContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  profileImage: {
    width: 100,
    height: 100
  },
  displayTitle: {
    fontSize: 22,
    color: '#010101'
  }
})