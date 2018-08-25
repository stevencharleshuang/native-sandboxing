import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export default class HelloCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    }
  }

  _onPressAddButton = () => {
    // console.log('You tapped the button!')
    this.setState(previousState => {
      return { count: previousState.count + 1 };
    });
  }

  _onPressResetButton = () => {
    // console.log('You tapped the button!')
    this.setState({ count: 0 });
  }

  _onPressSubtractButton = () => {
    // console.log('You tapped the button!')
    this.setState(previousState => {
      return { count: previousState.count - 1 };
    });
  }

  render() {
    return(
      <View>
        <Text>Hello from Hello Counter</Text>
        <Text>Current Count = {this.state.count}</Text>
        <Button onPress={this._onPressSubtractButton} title="-" />
        <Button onPress={this._onPressResetButton} title="Reset" />
        <Button onPress={this._onPressAddButton} title="+" />
      </View>
    );
  }
}
