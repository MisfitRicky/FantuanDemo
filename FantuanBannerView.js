import React, {Component} from "react";
import { requireNativeComponent } from "react-native";
import PropTypes from 'prop-types';

const FantuanBannerView = requireNativeComponent("FantuanBannerView", null);

export default class NativeView extends Component {

  render() {
    return (
      <FantuanBannerView {...this.props} />
    )
  }
}

NativeView.propTypes = {
  bannerDataSource: PropTypes.array,
  autoLoop: PropTypes.bool,
  looptime: PropTypes.number,
  bannerRound: PropTypes.number,
  currentIndex: PropTypes.number,
  pageControlHidden: PropTypes.bool,
  onItemClick: PropTypes.func,
}