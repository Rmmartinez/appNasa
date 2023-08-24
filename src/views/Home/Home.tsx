import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import Header from "../../components/Header/Header";
import fetchApi from '../../utils/fetch';
import TodaysImage from "../../components/TodaysImage/TodaysImage";
import { PostImage } from "../../types";
import {format,sub} from 'date-fns';
import LastFiveDaysImages from "../../components/LastFiveDaysImages/LastFiveDaysImages";

export default function Home(){

    const [todaysImage, setTodaysImage] = useState<PostImage>({});
    const [lastFiveDaysImages, setLastFiveDaysImages] = useState<PostImage[]>([]);


    useEffect(() => {
        const loadTodaysImage = async () => {
            try{
                const todaysImageResponse = await fetchApi();
                setTodaysImage(todaysImageResponse);
            }catch(error){
                console.error(error);
                setTodaysImage({});
            }
        };
        
        const loadLast5DaysImages = async () => {
            try{
                const date = new Date();
                const todaysDate = format(date, 'yyyy-MM-dd');
                const fiveDaysAgoDate = format(sub(date,{days:5}),'yyyy-MM-dd');
            
                const lastFiveDays = await fetchApi(
                    //"&start_date="+fiveDaysAgoDate+"&end_date="+todaysDate,
                    `&start_date=${fiveDaysAgoDate}&end_date=${todaysDate}`
                    );

                setLastFiveDaysImages(lastFiveDays);
            }catch (error){
                console.error(error);
            } 
        }

        loadTodaysImage().catch(null);
        loadLast5DaysImages().catch(null);
    }, []);

    //console.log(lastFiveDaysImages);
    

    return(
        <View style={styles.container}>
            <Header/>
            <TodaysImage {...todaysImage}/>
            <LastFiveDaysImages postImages = {lastFiveDaysImages}/>
        </View>

        
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "rgba(7, 26, 93, 255)",
        flex:1,
        paddingHorizontal:16
    }
})