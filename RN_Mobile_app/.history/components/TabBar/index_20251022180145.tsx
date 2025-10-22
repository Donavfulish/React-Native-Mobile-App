import { Tabs } from "expo-router"

export default SiderBar = () => {
    return (
        <Tabs>
            <Tabs.Screen
                name="index"
                options={{
                    title: "home",
                    headerShown: false,
                }
                }
            />
        </Tabs>
    )
}