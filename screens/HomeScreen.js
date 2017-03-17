import React from 'react';
import { connect } from 'react-redux'
import { AppRegistry, NavigatorIOS } from 'react-native'
import * as actions from '../actions/actions'
import {
  Button,
  Image,
  Linking,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { MonoText } from '../components/StyledText';


class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 0,
      description: '',
      picture: '',
      reoccuring: false
    }
    this.sendCheck = this.sendCheck.bind(this);
  }
  static route = {
    navigationBar: {
      visible: false,
    },
  };

  sendCheck() {
    this.props.dispatch(actions.addCheck(this.state.amount, this.state.description))
  }

  render() {
    console.log(this.state.amount)
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>

          <Image
            source={require('../assets/images/image!background.jpg')}
            style={{flex: 1, width: null, height: null}}
          />

          <View style={styles.welcomeContainer}>
            <Image
              source={require('../assets/images/20.png')}
              style={styles.welcomeImage}
            />
          </View>

          <View style={styles.getStartedContainer}>

            <Text style={styles.getStartedText}>
              Get started by opening bank
            </Text>

            <View
              style={[
                styles.codeHighlightContainer,
                styles.homeScreenFilename,
              ]}>
              <MonoText style={styles.codeHighlightText}>
                <Text> Amount : </Text>
                <TextInput
                  type="number"
                  style={{height: 35, width: 200, textAlign: 'center'}}
                  placeholder="$ 00.00"
                  onChangeText={(text) => this.setState({amount: text})}
                />
                <Text> Description : </Text>
                <TextInput
                  type="number"
                  style={{height: 35, width: 200, textAlign: 'center'}}
                  placeholder=" rent "
                  onChangeText={(text) => this.setState({description: text})}
                />
                <Text> Photo : </Text>
                <TextInput
                  type="number"
                  style={{height: 35, width: 200, textAlign: 'center'}}
                  placeholder=" picture "
                  onChangeText={(text) => this.setState({photo: text})}
                />
                <Text> Reoccuring : </Text>
                <TextInput
                  type="number"
                  style={{height: 35, width: 200, textAlign: 'center'}}
                  placeholder=" yes no "
                  onChangeText={(text) => this.setState({reoccuring: text})}
                />
              </MonoText>
              <Button
                onPress={this.sendCheck}
                style={{height: 35, width: 75, textAlign: 'center'}}
                title="Submit"
                color="#841584"
                accessibilityLabel="Submit"
              />
            </View>
          </View>
        </ScrollView>

        <View style={styles.tabBarInfoContainer}>


          <View
            style={[styles.codeHighlightContainer, styles.navigationFilename]}>

          </View>
        </View>
      </View>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will run slightly slower but
          you have access to useful development tools. {learnMoreButton}.
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    Linking.openURL(
      'https://docs.expo.io/versions/latest/guides/development-mode'
    );
  };

  _handleHelpPress = () => {
    Linking.openURL(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 15,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 80,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 140,
    height: 38,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 23,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});

export default connect()(HomeScreen);
