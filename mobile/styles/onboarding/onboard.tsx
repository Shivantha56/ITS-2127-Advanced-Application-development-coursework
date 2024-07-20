import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp,} from 'react-native-responsive-screen';


export const style = StyleSheet.create({
    firstContainer:{
        alignItems:"center",
        marginTop:5
    },
    logo:{
        width:wp('23%'),
        height:hp('10%'),
    },
    titileWrapper:{
        flexDirection:"row"
    },
    titileTextShape1:{
        position:"absolute",
        left:-20,
        top:-20
    },
    titleText:{
        fontSize: hp("4%"),
        textAlign:"center"
    },
    titileTextShape2:{
        position:"absolute",
        left:-40,
        top:-20
    },
    titileTextShape3:{
        position:"absolute",
        left:60
    },
    dscWrapper:{
        marginTop:30
    },
    dscpText:{
        textAlign:"center",
        color:"#575757",
        fontSize:hp("2%")
    },
    buttonWrapper:{
        backgroundColor:"#2467EC",
        width:wp("92%"),
        paddingVertical:18,
        borderRadius:4,
        marginTop:40
    },
    buttonText:{
        color:"white",
        textAlign:"center"
    }
});
