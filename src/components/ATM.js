import React, { Component } from "react";
import { ImageBackground, View,TouchableOpacity,Text,ScrollView } from "react-native";
import { FloatingLabelInput } from "react-native-floating-label-input/index";
import styles from '../styles/atm.style';
import Header from './Header';
import images from '../images';
import {Utils} from '../define'

export default class ATM extends Component{
  getDefaultFields = ()=>{
    return {
      code: {
        label: 'Số thẻ',
        value: '',
        valid: true
      },
      name: {
        label: 'Tên in trên thẻ',
        value: '',
        valid: true
      },
      date: {
        label: 'Ngày phát hành (MM/YY)',
        value: '',
        valid: true
      }
    }
  }
  state = {
    fields:{...this.getDefaultFields()}
  }
  constructor(props) {
    super(props);
  }
  updateField = (field,value)=>{
    const {fields} = this.state;
    fields[field].value = value
    this.setState({fields});
  }
  checkValue = (str, max) => {
    if (str.charAt(0) !== '0' || str == '00') {
      var num = parseInt(str);
      if (isNaN(num) || num <= 0 || num > max) num = 1;
      str =
        num > parseInt(max.toString().charAt(0)) && num.toString().length == 1
          ? '0' + num
          : num.toString();
    }
    return str;
  };
  handleDateOfBirth = value => {
    var input = value;
    let currentYear = new Date().getFullYear();
    if (/\D\/$/.test(input)) input = input.substr(0, input.length - 3);
    var values = input.split('/').map(function (v) {
      return v.replace(/\D/g, '');
    });
    if (values[0]) values[0] = this.checkValue(values[0], 12);
    if (values[1]) values[1] = this.checkValue(values[1], 99);
    // if (values[2]) values[2] = this.checkValue(values[2], currentYear);
    var output = values.map(function (v, i) {
      return v.length == 2 && i < 2 ? v + '/' : v;
    });
    value = output.join('').substr(0, 5);
    const fields = this.state.fields
    fields.date.value = value;
    this.setState({fields});
  };
  validFields = ()=>{
    let result = true;
    const {fields} = this.state;
    const defaultFields = this.getDefaultFields();
    fields.code.label = defaultFields.code.label;
    fields.name.label = defaultFields.name.label;
    fields.date.label = defaultFields.date.label;
    fields.code.valid = true;
    fields.name.valid = true;
    fields.date.valid = true;
    if(fields.code.value==''){
      fields.code.valid = false;
      fields.code.label = "Bạn chưa nhập số thẻ"
    }
    else if(fields.code.value.replace(/ /g, '').length<16){
      fields.code.valid = false;
      fields.code.label = "Số thẻ không hợp lệ";
      result = false;
    }
    if(fields.name.value==''){
      fields.name.valid = false;
      fields.name.label = "Bạn chưa nhập họ tên";
      result = false;
    }
    if(fields.date.value==''){
      fields.date.valid = false;
      fields.date.label = "Bạn chưa nhập ngày phát hành";
      result = false;
    }
    this.setState({fields})
     return result;
  }
  render() {
    let {code,name,date} = this.state.fields;
    name.value = name.value.toUpperCase()
    return <View style={styles.wrapper}>
        <Header title={'Thanh toán bằng ATM'} />
        <ScrollView showsVerticalScrollIndicator={false} style={styles.content}>
            <ImageBackground style={styles.boxATM} resizeMode={'contain'} source={images.atm} >
              <Text style={styles.code}>{Utils.formatCardNumberInput(code.value) }</Text>
              <Text style={styles.name}>{name.value}</Text>
              <View style={styles.boxDate}>
                <Text style={styles.labelDate}>Issue date</Text>
                <Text style={styles.date}>{date.value}</Text>
              </View>
            </ImageBackground>

          <View style={styles.item}>
            <FloatingLabelInput  containerStyles={styles.boxInput}
                                customLabelStyles={code.valid?styles.label:styles.labelError}
                                label={code.label}
                                onChangeText={value => {
                                    this.updateField('code',value)
                                }}
                                inputStyles={styles.input}
                                value={Utils.formatCardNumber(code.value)}
                                keyboardType={'numeric'}
                                maxLength={19}
            />
          </View>
          <View style={styles.item}>
            <FloatingLabelInput  containerStyles={styles.boxInput}
                                 customLabelStyles={name.valid?styles.label:styles.labelError}
                                 label={name.label}
                                 onChangeText={value => {
                                   this.updateField('name',value)
                                 }}
                                 inputStyles={styles.input}
                                 value={name.value}

                                 maxLength={16}
            />
          </View>
          <View style={styles.item}>
            <FloatingLabelInput  containerStyles={styles.boxInput}
                                 customLabelStyles={date.valid?styles.label:styles.labelError}
                                 label={date.label}
                                 onChangeText={val => this.handleDateOfBirth(val)}
                                 inputStyles={styles.input}
                                 value={date.value}
                                 maxLength={5}
            />
          </View>

          <View style={styles.boxBtn}>
            <TouchableOpacity onPress={() => {
              this.props.close();
            }} style={[ styles.btn, styles.btnCancel]}>
              <Text style={[styles.txtBtn, styles.txtBtnCancel]}>HỦY BỎ</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {
              if(this.validFields()==true){
                this.props.onSusccess();
              }
            }} style={[styles.btn]}>
              <Text style={styles.txtBtn}>THANH TOÁN</Text>
            </TouchableOpacity>

          </View>
        </ScrollView>
    </View>
  }
}
