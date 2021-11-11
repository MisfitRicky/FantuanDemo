import React, {Component} from "react";
import { requireNativeComponent } from "react-native";

var FantuanImage = requireNativeComponent("FantuanImage", null);

export default class FantuanImageView extends Component {
  render() {
    return (
      <FantuanImage {...this.props} />
    )
  }
}

FantuanImageView.PropTypes = {

}