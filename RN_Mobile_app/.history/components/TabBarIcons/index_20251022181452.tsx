import { images } from "@/constants/images";
import { Image, ImageBackground } from "react-native";



export default function TabBarIcon(title: String) {
    return (
        <>  
            <ImageBackground source={images.highlight}>
                <Image source={images.home}
                />
            </ImageBackground>
        </>
    )
}