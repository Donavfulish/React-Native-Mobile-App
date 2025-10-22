import { images } from "@/constants/images";
import { ImageBackground } from "react-native";



export default function TabBarIcon(title: String) {
    return (
        <>  
            <ImageBackground source={images}></ImageBackground>
        </>
    )
}