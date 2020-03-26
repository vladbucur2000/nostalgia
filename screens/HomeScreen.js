import * as React from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';

import {MonoText} from '../components/StyledText';

import LinksScreen from './LinksScreen.js';
import Settings from './Settings.js';
import Credits from './Credits.js';

import titleGif from '../assets/images/nostalgia.gif';

export default class HomeScreen extends React.Component {
  render() {
    return (<View style={styles.container}>
      <View style={{
          flex: 1,
          justifyContent: 'center',
          allignItems: 'center'
        }}>
        <Image source={titleGif} />
      </View>
      <View style={{
          flex: 4,
          width: '100%',
          justifyContent: 'center',
          allignItems: 'center'
        }}>
        <TouchableOpacity style={[
            styles.button, {
              width: '60%'
            }
          ]} onPress={() => this.props.navigation.navigate(LinksScreen)}>
          <Text>Joaca</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[
            styles.button, {
              width: '50%'
            }
          ]} onPress={() => this.props.navigation.navigate(Settings)}>
          <Text>Setari</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[
            styles.button, {
              width: '40%'
            }
          ]} onPress={() => this.props.navigation.navigate(Credits)}>
          <Text>Despre noi</Text>
        </TouchableOpacity>
      </View>
    </View>)
  }
}

HomeScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: '#fff',
    height: '100%',
    backgroundColor: 'white'
  },
  title: {
    alignSelf: 'center'
  },
  button: {
    alignSelf: 'center',
    alignItems: 'center',
    padding: 15,
    margin: 10,
    backgroundColor: 'white',
    borderColor: 'cyan',
    borderWidth: 2.5,
    borderRadius: 7,
    opacity: 1
  },
  buttonOnPress: {
    padding: 10,
    opacity: 0.1
  }
});
