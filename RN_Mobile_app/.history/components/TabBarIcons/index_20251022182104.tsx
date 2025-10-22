import { images } from "@/constants/images";
import { Image, ImageBackground, Text } from "react-native";

export default funtion TabBarIcon = (title: String): any => {
    return (
        <>  
            <ImageBackground source={images.highlight}>
                <Image 
                    source={images.home}
                    tintColor={"#151312"}
                    className="size-5"
                />
                <Text>
                    {title}
                </Text>
            </ImageBackground>
        </>
    )
}