import { StyleSheet, Text, View } from 'react-native'
import { SiderBar } from '@/components/TabBar'
import React from 'react'
import { Image } from 'react-native'
import { images } from '@/constants/images'
import { icons } from '@/constants/icons'

const _layout = () => {
    return (
        <View className="flex-1 bg-primary">
            <Image
                source={images.bg}
                className="absolute w-full h-[50%] z-0"
                resizeMode="cover"
            />
            <Image
                source={icons.logo}
                className='absolute top-20 left-1/2 mx-auto -translate-x-1/2 w-15 h-15'
            />
            <SiderBar />
        </View>
    )
}

export default _layout

const styles = StyleSheet.create({})