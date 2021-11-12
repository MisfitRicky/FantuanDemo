import React, {Component} from "react";
import { requireNativeComponent } from "react-native";
import PropTypes from 'prop-types';

const FantuanImage = requireNativeComponent("FantuanImage", null);

export default class FantuanImageView extends Component {
  render() {
    return (
      <FantuanImage {...this.props} />
    )
  }
}

FantuanImageView.propTypes = {
  url: PropTypes.string,
  showTitle: PropTypes.string,
}