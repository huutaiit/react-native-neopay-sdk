import {Dimensions} from 'react-native'
const {width,height} = Dimensions.get('window')
export default {
  wrapper:{
    flex:1,
    justifyContent:'center',
    width:width-40,
    marginRight:20,
    marginLeft:20
  },
  content:{
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.3,
    shadowRadius: 6,
    shadowColor: "#000000",
    // android (Android +5.0)
    elevation: 3,
    backgroundColor: '#fff',
    padding:10
  },
  boxTitle:{
    backgroundColor:'rgb(36,86,146)',
    padding:10,
    width:width-40,
    marginBottom:10
  },
  title:{
    color:"#fff",
    fontWeight:'bold',
    fontSize:20
  },
  titleChannel:{
    marginTop:10,
    fontSize:18,
    marginBottom: 10,
    fontWeight: '500'
  },
  item:{
    flexDirection:'row',
    alignItems:'center',
    marginBottom: 5
  },
  txtItem:{
    fontSize: 16,
    marginLeft: 5,
    color: '#aaa'
  }

}
