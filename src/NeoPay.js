// @ts-ignore
import React from "react";
// @ts-ignore
import { Text, View, BackHandler, Image, TouchableOpacity } from "react-native";
import { Dialog, SlideAnimation } from "./popup";
import styles from "./styles/neopay.stype";
import atmStyle from './styles/atm.style';
import images from "./images";
import PropTypes from 'prop-types'
import ATM from "react-native-neopay-sdk/src/components/ATM";
import { height, width } from "react-native-neopay-sdk/src/define";

export default class NeoPay extends React.Component {
  static propTypes = {
    neoKey:PropTypes.string,
    cancel:PropTypes.func
  }
  _popup = null;
  popup = {
    visible: false,
    content: null,
    dialogAnimation: new SlideAnimation({
      slideFrom: "bottom",
    }),
    width: "100%", height: "100%",
    slideFrom: "bottom",
    rounded: false,
    dialogStyle: {
      backgroundColor: "transparent",
    },
    containerStyle: {
      justifyContent: "flex-end",
    },
  };
  popupAnimation = new SlideAnimation({ slideFrom: "bottom" });

  constructor(props: any) {
    super(props);
    this.state = {
      listChannel:{}
    }
  }
  getChannel = ()=>{
    const {neoKey} = this.props
    return fetch('http://95.217.207.205:8100/api/v1/sdk/merchant/paymentChannel?key='+neoKey)
      .then((response) => response.json())
      .then((json) => {
        return json;
      })
      .catch((error) => {

        console.error(error);
      });
  }
  showATM = ()=>{

    this.showPopup({
      content:<ATM close={this.hidePopup} onSusccess={this.props.onSusccess} />,
      width:width,
      height:height
    })
  }

  componentDidMount() {
    // this.showATM();
    this.getChannel().then(result=>{
      const paymentChannels = result?.data?.paymentChannels;
      console.log('paymentChannels',paymentChannels);
      let listChannel = [];
      paymentChannels.map((item,k)=>{
        if(item.id=="NEOPAY_WALLET"){
          listChannel.push({...item,name:'Ví neo pay',active:true,type:'NEOPAY_WALLET'})
        }
        if(item.id=="CC"){
          listChannel.push( {...item,name:'Sử dụng thẻ quốc tế',active: false,type:'ATM'})
        }
        if(item.id=="ATM"){
          listChannel.push( {...item,name:'Sử dụng thẻ ATM',active: false,type:'ATM'})
        }
      })
      var groupBy = function(xs, key) {
        return xs.reduce(function(rv, x) {
          (rv[x[key]] = rv[x[key]] || []).push(x);
          return rv;
        }, {});
      };
     const abc = groupBy(listChannel,'type')
      this.setState({listChannel:abc})
      console.log('data',listChannel);

    })
  }

  showPopup = (data) => {
    let { popup } = this;
    popup.visible = true;

    if (React.isValidElement(data)) {
      popup.content = data;
    } else {
      popup = { ...popup, ...data };

      if (data.slideFrom) {
        popup.dialogAnimation = new SlideAnimation({
          slideFrom: data.slideFrom,
        });
      } else if (!data.dialogAnimation) {
        popup.dialogAnimation = new SlideAnimation({
          slideFrom: data.slideFrom,
        });
      }
    }
    this.popup = popup;
    this.setState({ showPopup: true }, () => {
      this._popup.show();
    });

    BackHandler.addEventListener("hardwareBackPress", this.handleBackAndroidShowPopup);
  };

  hidePopup = () => {
    this.popup = {
      ...this.popup,
      visible: false,
      content: null,
      // dialogAnimation: new SlideAnimation({
      //     slideFrom: 'bottom',
      // })
      //slideFrom:'left'
    };
    this._popup && this._popup.dismiss();
    BackHandler.removeEventListener("hardwareBackPress", this.handleBackAndroidShowPopup);

  };
  handleBackAndroidShowPopup = () => {
    this.hidePopup();
    return true;
  };
  activeChannel = (index1: number, index2: any)=>{
    let {listChannel} = this.state;
   Object.keys(listChannel).map((item,k1)=>{
      let items  = listChannel[item]
      console.log('itemsitems',items)
      items = items.map((item2, k2)=>{
        item2.active = false;
        if(k2==index2 && index1==k1){
          item2.active = true;
          this.itemActive = item2
        }

        return item2;
      })
      listChannel[item] = items
    })
    console.log('listChannel',listChannel)
    this.setState({listChannel})
  }

  render() {
    const { isLoading, showPopup } = this.state || {};
    const { popup } = this;
    const {listChannel} = this.state;
    const {cancel} = this.props
    const mapKey = {
      "NEOPAY_WALLET":'Sử dụng ví điện tử',
      "ATM":'Sử dụng thẻ ATM/Quốc tế'
    }
    return (<View style={styles.wrapper}>
      <View style={styles.boxTitle}>
        <Text style={styles.title}>Chọn hình thức thanh toán</Text>
      </View>
      <View style={styles.content}>
        {
          Object.keys(listChannel).map((value,k)=>{
            let items = listChannel[value];
            const name = mapKey[value];
            return <View key={k} style={styles.boxChannel}>
              <Text style={styles.titleChannel}>{name}</Text>
              {
                items.map((item2,k2)=>{
                  return <TouchableOpacity onPress={()=>this.activeChannel(k,k2)} key={k2} style={styles.item}>
                    <Image source={item2.active?images.check:images.unCheck} />
                    <Text style={styles.txtItem}>{item2.name}</Text>
                  </TouchableOpacity>
                })
              }

            </View>
          })
        }

      </View>
      <View style={[atmStyle.boxBtn]}>
        <TouchableOpacity onPress={()=>{
          cancel &&  cancel()
        }} style={[atmStyle.btn,atmStyle.btnCancel]}>
          <Text style={atmStyle.txtBtn}>Hủy bỏ</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{
          console.log('this.itemActive', this.itemActive)
          if(this.itemActive && this.itemActive.id=='ATM'){
            this.showATM();
          }
          else{
            alert("Coming soon")
          }

        }} style={[atmStyle.btn,atmStyle.btnNext]}>
          <Text style={atmStyle.txtBtn}>Tiếp tục</Text>
        </TouchableOpacity>

      </View>

      {
        showPopup ?
            <Dialog overlayBackgroundColor={"#ffffff"} overlayOpacity={0.8}
                    ref={c => this._popup = c}
                    {...popup}
                    visible={popup.visible}
                    onTouchOutside={() => {
                      this.hidePopup();
                    }} onDismiss={() => {
              this.setState({ showPopup: false });
            }}
            >
              {popup.content}
            </Dialog> : null
      }
    </View>);
  }
}
