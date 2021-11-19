import React, {Component} from "react";
import { requireNativeComponent } from "react-native";
import PropTypes from 'prop-types';

const FantuanImage = requireNativeComponent("FantuanImageView", null);

export default class FantuanImageView extends Component {

  render() {
    return (
      <FantuanImage {...this.props} />
    )
  }
}

FantuanImageView.propTypes = {
  source: PropTypes.string,
  defaultSource: PropTypes.any,
  onLoadStart: PropTypes.func,
  onError: PropTypes.func,
  onLoad: PropTypes.func,
  resizeMode: PropTypes.number,
  testID: PropTypes.string,
  accessibilityLabelRN: PropTypes.string
}