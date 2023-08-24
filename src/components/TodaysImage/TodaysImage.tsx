import React, { FC } from "react";
import { Text, View , StyleSheet, Image, Button} from "react-native";
import { PostImage, RootStackParams } from "../../types";
import {useNavigation} from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type PostImageNavigationProps = NativeStackNavigationProp<RootStackParams, 'Detail'>;

const TodaysImage: FC<PostImage> = ({date, title, url, explanation}) => {

    const {navigate} = useNavigation<PostImageNavigationProps>();

    const handleViewPress = () => {
        navigate('Detail', {title, date,url, explanation});
    };

    return(
        <View style={styles.container}>
            <View>
                <Image source={{uri: url}} style={styles.image}/>
            </View>
            <Text style={styles.title}>
                {title}
            </Text>
            <Text style={styles.date}>
                {date}
            </Text>
            <View style={styles.buttonContainer}>
                <Button title="View" onPress={handleViewPress}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#2c449d",
        marginVertical:16,
        borderRadius:32,
        padding:16,
        marginHorizontal:24
    },
    image:{
        width:"100%",
        height:190,
        borderWidth:2,
        borderColor:"#fff",
        borderRadius:32
    },
    title:{
        color: "#fff",
        fontSize:20,
        marginVertical:12,
        fontWeight:"bold"
    },
    date:{
        color:"#fff",
        fontSize:16,
    },
    buttonContainer:{
        alignItems: "flex-end",
    },
});


export default TodaysImage