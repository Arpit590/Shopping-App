import React from 'react'
import { Animated, Dimensions, StyleSheet,  View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import ImageItem from './ImageItem'

const {width, height} = Dimensions.get("window")

const images = [
    {
    id: "m1",
    imageUrl: require("../assets/ad1.jpg")
    },
    {
    id: "m2",
    imageUrl: require("../assets/ad2.png")
    },
    {
    id: "m3",
    imageUrl: require("../assets/ad3.jpg")
    },
    {
    id: "m4",
    imageUrl: require("../assets/ad4.jpeg")
    },
]


const ImageSlider = () => {

    const scrollX = new Animated.Value(0);
    let position = Animated.divide(scrollX, width);


    return (
        <View style={styles.slider}>
            <FlatList
            data={images}
            scrollEnabled
            horizontal
            showsHorizontalScrollIndicator={false}
            decelerationRate="fast"
            pagingEnabled
            snapToAlignment="center"
            scrollEventThrottle={16}
            keyExtractor={(item,index)=>"key"+ index}
            renderItem={({item})=>(
                <ImageItem
                imageUrl={item.imageUrl}
                />
            )}
            onScroll={
                Animated.event(
                    [{nativeEvent: {contentOffset: {x : scrollX}}}],  {useNativeDriver: false}
                )
            }
            />
            <View style={styles.dotView}>
                {images.map((_, i) => {
                    let opacity = position.interpolate({
                        inputRange: [i - 1, i, i + 1],
                        outputRange: [0.3, 1, 0.3],
                        extrapolate: 'clamp'
                    })
                    return (
                        <Animated.View
                            key={i}
                            style={{ opacity, height: 10, width: 10, backgroundColor: '#595959', margin: 8, borderRadius: 5 }}
                        />
                    )
                })}
                </View>
        </View>
    )
}

export default ImageSlider

const styles = StyleSheet.create({
    slider:{
        backgroundColor: "#fff"
    },
    dotView:{
        flexDirection:"row",
        alignItems: "center",
        justifyContent: "center"
    }
})
