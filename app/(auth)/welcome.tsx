import { Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';

const WelcomePage = () => {
    return (
        <SafeAreaView className='flex flex-1 items-center justify-between bg-white'>
            <TouchableOpacity
                className='w-full flex items-end p-5 justify-end'
                onPress={() => {
                    router.replace('/(auth)/sign-up');
                }}>
                <Text className='text-black text-md font-JakartaBold'>Skip</Text>
            </TouchableOpacity>
            <Text>WelcomePage</Text>
            {/* <StatusBar style="auto" /> */}
        </SafeAreaView>
    );
};

export default WelcomePage;