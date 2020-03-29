import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import {RectButton, ScrollView} from 'react-native-gesture-handler';
import FuzzySet from 'fuzzyset';

export default class Settings extends React.Component {
  render() {
    return (<View>
    </View>);
  }
}

function fuzzyMatch(pattern, str) {
  var a = FuzzySet([str]);
  return a.get(pattern);
}

function OptionButton({icon, label, onPress, isLastOption}) {
  return (<RectButton style={[
      styles.option, isLastOption && styles.lastOption
    ]} onPress={onPress}>
    <View style={{
        flexDirection: 'row'
      }}>
      <View style={styles.optionIconContainer}>
        <Ionicons name={icon} size={22} color="rgba(0,0,0,0.35)"/>
      </View>
      <View style={styles.optionTextContainer}>
        <Text style={styles.optionText}>{label}</Text>
      </View>
    </View>
  </RectButton>);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa'
  },
  contentContainer: {
    paddingTop: 15
  },
  optionIconContainer: {
    marginRight: 12
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: '#ededed'
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  optionText: {
    fontSize: 15,
    alignSelf: 'flex-start',
    marginTop: 1
  }
});
