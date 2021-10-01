import React, { Component } from "react";
import {Image, View, SafeAreaView, Platform,Text,TouchableOpacity} from 'react-native';
import {AppFontSizes, Colors, height} from '../define';
import images from '../images';
import PropTypes from 'prop-types';
import FontFamily from "../define/FontFamily";


export default class Header extends Component {
    render() {
        const {title, left, right,center, style, titleStyle, backStyle, actionLeft} = this.props;

        return (
            <View style={[styles.wrapper, style]}>
                <SafeAreaView/>
                <View style={styles.content}>
                    {left == 'none' ? null : (left ? left :
                        <TouchableOpacity style={styles.btnLeft} onPress={actionLeft ? actionLeft : this.goBack}>
                            <Image source={images.arrowLeft} style={[styles.imgBack, backStyle]}/>
                            {/*<Icon name={'angle-left'} size={30} color={Colors.cl333}/>*/}
                        </TouchableOpacity>)
                    }
                    {center?center: <Text numberOfLines={1} style={[styles.txtTitle, titleStyle]}>{title || ''}</Text>}


                    {right == 'none' ? <View style={styles.right}/> :
                        <View style={styles.right}>{right ? right : null}</View>}
                </View>
            </View>
        )
    }
}

Header.propTypes = {
    title: PropTypes.string,
    left: PropTypes.any,
    right: PropTypes.any,
    center:PropTypes.any,
    style: PropTypes.any,
    titleStyle: PropTypes.any,
    backStyle: PropTypes.any,
    actionLeft: PropTypes.any,
};

const styles = {
    wrapper: {
        backgroundColor: 'white',
        paddingTop: Platform.OS == 'ios' ? 0 : 25,
        shadowColor: Colors.cl092058,
        shadowOffset: {
            width: 1,
            height: 2
        },
        shadowRadius: 5,
        shadowOpacity: 0.1,
        // android (Android +5.0)
        elevation: 10,
    },
    imgBack: {
        // tintColor: Colors.cl333
    },
    content: {
        height: 50 / 900 * height,
        // backgroundColor: 'red',
        flexDirection: 'row',
        alignItems: 'center',
    },
    txtTitle: {
        flex: 1,
        color: Colors.cl092058,
        textAlign: 'center',
        paddingHorizontal: 45,
        fontSize: AppFontSizes.sz19
    },
    btnLeft: {
        position: 'absolute',
        left: 0, bottom: 0, top: 0,
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: 75,
        paddingLeft: 0,
        zIndex: 1
    },
    right: {
        position: 'absolute',
        right: 0, bottom: 0, top: 0,
        justifyContent: 'center',
        alignItems: 'center',
    }
};
