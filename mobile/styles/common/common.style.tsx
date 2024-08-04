import { StyleSheet } from "react-native";
import {responsiveWidth} from 'react-native-responsive-dimensions'
import {widthPercentageToDP as wp, heightPercentageToDP as hp,} from 'react-native-responsive-screen';


export const commonStyles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    buttonContainer:{
        backgroundColor:"#2467EC",
        width: responsiveWidth(88),
        height: responsiveWidth(12),
        alignSelf:"center",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:5,
        marginHorizontal:5
    },
    dotStyle:{
        backgroundColor: "#2467EC",
        width: responsiveWidth(2.5),
        height: responsiveWidth(2.5),
        borderRadius:5,
        marginHorizontal:5
    },
    activeDotStyle:{
        backgroundColor: "#2467Ec",
        width: responsiveWidth(2.5),
        height: responsiveWidth(2.5),
        borderRadius:5,
        marginHorizontal:5
    },
    titile:{
        fontSize:hp("3.5%"),
        textAlign:"center"
    }
});