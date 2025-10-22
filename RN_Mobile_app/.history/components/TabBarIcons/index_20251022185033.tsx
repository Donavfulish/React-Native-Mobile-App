import { images } from "@/constants/images";
import { Image, ImageBackground, Text, View } from "react-native";

export const TabBarIcon = ({ title, icon, focused }: any) => {
    if (focused)
        return (
                <ImageBackground
                    source={images.highlight}
                    >
                    <Image
                        source={icon}
                        tintColor="#151312"
                        className="size-5"
                    />
                    <Text className="text-primary text-base font-semibold ml-2">
                        {title}
                    </Text>
                </ImageBackground>
        )

    return (
        <View>
            <Image
                source={icon}
                tintColor={"#A8B5DB"}
                className="size-5"
            />
        </View>
    )
}