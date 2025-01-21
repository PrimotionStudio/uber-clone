import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Redirect } from 'expo-router';

const IndexPage = () => {
    return <Redirect href={'/(auth)/welcome'} />;
};

export default IndexPage;