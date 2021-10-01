import {Dimensions} from "react-native";

const {width, height} = Dimensions.get('window');
// const percentSize = width >= 1024 ? 0.03 : 0.05;
// const sz20 = Math.round(width * 0.052);
// let sz19 = Math.round(Math.sqrt(width * width + height * height) * 0.05);
let sz19 = Math.round(width * 0.048);
sz19 = sz19 > 22 ? 22 : sz19;
sz19 = sz19 < 18 ? 18 : sz19;

export default {
    sz31: sz19 + 10,
    sz30: sz19 + 9,
    sz29: sz19 + 8,
    sz28: sz19 + 7,
    sz25: sz19 + 6,
    sz24: sz19 + 5,
    sz23: sz19 + 4,
    sz22: sz19 + 3,
    sz21: sz19 + 2,
    sz20: sz19 + 1,
    sz19,
    sz18: sz19 - 1,
    sz17: sz19 - 2,
    sz16: sz19 - 3,
    sz15: sz19 - 4,
    sz14: sz19 - 5,
    sz13: sz19 - 6,
    sz12: sz19 - 7,
    sz11: sz19 - 8,
    sz10: sz19 - 9,
    sz9: sz19 - 10,
    sz8: sz19 - 11,
    sz7: sz19 - 12,
    sz6: sz19 - 13,
    sz5: sz19 - 14,
    sz4: sz19 - 15,
};
