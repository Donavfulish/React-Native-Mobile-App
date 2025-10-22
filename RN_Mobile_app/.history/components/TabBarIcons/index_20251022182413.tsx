import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Image, ImageBackground, Text } from "react-native";

export const TabBarIcon = ({ title, icon,  }: any) => {
    return (
        <>
            <ImageBackground
                source={images.highlight}>
                <Image
                    source={icons.home}
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