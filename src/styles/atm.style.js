import { height,AppFontSizes,FontFamily,Colors,width } from "react-native-neopay-sdk/src/define";

export default {
  wrapper:{
    flex:1,
    backgroundColor:'#F0FAFF',
    height:height
  },
  content:{
    marginTop:20
  },
  boxATM:{
    alignSelf:'center',
    width:width-40,
    height:200,
    marginBottom:20
  },
  item:{
    marginBottom:20,
    marginHorizontal:20
  },
  input:{
    color:'rgb(9,32,88)',
    fontSize: AppFontSizes.sz16,

    paddingLeft: 5,
    marginTop: 20,
    alignSelf:'center',
    alignItems: 'center',
    justifyContent:'center',
    height:40,
    paddingBottom:0,
    marginBottom: 10
  },
  label:{
    fontSizeFocused: AppFontSizes.sz16,
    fontSizeBlurred: AppFontSizes.sz16,
    colorFocused:Colors.cl4F6C8D,
  },
  labelError:{
    fontSizeFocused: AppFontSizes.sz16,
    fontSizeBlurred: AppFontSizes.sz16,
    colorFocused:Colors.lightRed,
    colorBlurred:Colors.lightRed,
  },
  boxInput:{
    borderColor: 'rgb(232,236,243)',
    borderWidth:1,
    height:55,
    borderRadius:10,
    paddingHorizontal:15,
    justifyContent: 'center',
    paddingVertical:15,
    alignItems:'center',

  },

  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  boxBtn:{
    flexDirection:'row',
    width:width-40,
    justifyContent:'space-between',
    alignItems:'center',
    marginTop: 20,
    alignSelf:'center'
  },
  btn:{
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
    width:(width-60)/2,
    margin:0
  },
  btnCancel:{
    backgroundColor: '#00C8F9',
  },
  txtBtnCancel:{
    color:Colors.white
  },
  txtBtn:{
    fontSize:AppFontSizes.sz18,
    color:Colors.cl092058,
  },
  code:{
    position:'absolute',
    top:90,
    left:0,
    right:0,
    textAlign:'center',
    color:Colors.white,
    fontSize:AppFontSizes.sz20,
    fontWeight:'bold'
  },
  name:{
    position:'absolute',
    bottom:30,
    left:20,
    right:0,
    color:Colors.white,
    fontSize:AppFontSizes.sz20,
    fontWeight:'bold'
  },
  boxDate:{
    position:'absolute',
    bottom:30,
    right:20,
  },
  labelDate:{
    color:Colors.white,
    fontSize:AppFontSizes.sz18,
  },
  date:{
    color:Colors.white,
    fontSize:AppFontSizes.sz20,
    fontWeight:'bold',
    minHeight:20
  }
}
