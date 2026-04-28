import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStaticNavigation, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from '@react-navigation/elements';

function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>HomeScreen</Text>
      <Button onPress={() => navigation.navigate('Home')}>Home</Button>
      <Button onPress={() => navigation.navigate('Workouts')}>Workouts</Button>
      <Button onPress={() => navigation.navigate('Profile')}>Profile</Button>
    </View>
  )
}

function WorkoutsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Workouts</Text>
    </View>
  )
}

function ProfileScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile</Text>
    </View>
  )
}

// contains the list of screens to navigate to
const RootStack = createNativeStackNavigator({
  initialRouteName: 'Home',
  screenOptions: {
    headerStyle: {
      backgroundColor: '#17d6a3',
    },
  },
  screens: {
    Home: { 
      screen: HomeScreen,
      options: {
        title: 'Dashboard',
      },
     },
    Workouts: WorkoutsScreen,
    Profile: ProfileScreen,
  },
})

// should only called once
const Navigation = createStaticNavigation(RootStack)

export default function App() {
  return<Navigation />
}


const styles = StyleSheet.create({})