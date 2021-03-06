import React,{Component} from "react";
import {SwitchAndroid} from "react-native";

export default class Switch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: false
    }
  }

  onValueChange(value) {
    this.setState({value: value});
    if (this.props.onValueChange) {
      this.props.onValueChange(value);
    }
  }

  render() {
    return (
      <SwitchAndroid
        onValueChange={this.onValueChange.bind(this)}
        value={this.state.value} />
    );
  }
}