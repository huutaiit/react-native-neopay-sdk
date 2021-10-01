import {Dimensions} from "react-native";
import Colors from "./Colors";
import { AppFontSizes } from "./index";
import FontFamily from "./FontFamily";

export const {width, height} = Dimensions.get('screen');
const BUTTON_HEIGHT = .05 * height;
export const diagonalLine = Math.sqrt(width * width + height * height);

export default {
    appContent:{
      marginTop: 20
    },
    appButton: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        margin:30,
        backgroundColor: Colors.white,
        paddingVertical: 15,
        alignItems:'center',
        borderColor:'rgb(20,204,249)',
        borderWidth:1,
        borderRadius:5,
    },
    appTitle:{
        color:Colors.black,
        fontSize:AppFontSizes.sz20,
        fontFamily:FontFamily.robotoMedium,
        marginTop:30,
        marginLeft:20
    },
    textButton:{
        fontSize:AppFontSizes.sz18,
        color:Colors.cl092058,
    },
    shadowStyle: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    homeStyles: {
        backgroundColor: Colors.clF1F3F9,
    },

    formatDate: 'DD/MM/YYYY',
    longFormatDate: 'DD/MM/YYYY HH:mm',
    supportPhone: '1900 63 6666',
    paddingBottomWidget: .02 * height,
    item:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingBottom:20,
    },
    txtLeft:{
        fontSize: AppFontSizes.sz17,
        color:'rgb(80,108,141)'
    },
    txtRight:{
        textAlign:'right',
        color:'rgb(10,32,88)',
        fontSize:AppFontSizes.sz19,
        flex:1
    }
    // IMAGE_HEIGHT: (width * 168) / 375,
    // IMAGE_WIDTH: width - 60
};
