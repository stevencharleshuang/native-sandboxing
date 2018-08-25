import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export default class HelloCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    }
    this._onPressAddButton = this._onPressAddButton.bind(this);
  }
  _onPressAddButton() {
    // console.log('You tapped the button!')
    this.setState(previousState => {
      return { count: previousState.count + 1 };
    });
  }
  render() {
    return(
      <View>
        <Text>Hello from Hello Counter</Text>
        <Text>Current Count = {this.state.count}</Text>
        <Button onPress={this._onPressAddButton} title="add" />
      </View>
    );
  }
}
