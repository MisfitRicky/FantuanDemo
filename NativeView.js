import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    requireNativeComponent,
} from 'react-native';

var NativeView = requireNativeComponent('FantuanPhotoView', null);

type Props = {};
export default class FantuanPhotoView extends Component<Props> {


    render() {
        return (
         <NativeView{...this.props}/>
         
        );
    }
}

FantuanPhotoView.PropTypes = {
    showTitle: PropTypes.String,
 onRefreshData: PropTypes.func,
}
