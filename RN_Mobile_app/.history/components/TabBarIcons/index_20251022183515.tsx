import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Image, ImageBackground, Text } from "react-native";

export const TabBarIcon = ({ title, icon, focused }: any) => {
    if (focused)
        return (
            <>
                <ImageBackground
                    source={images.highlight}
                    className="flex flex-row w-full flex-1 min-w-[112px] min-h-14 mt-4 justify-center items-center rounded-full ">
                    <Image
                        source={icon}
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