import { View, Text, Platform, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context"; 
import { StatusBar } from 'expo-status-bar';
import { Bars3CenterLeftIcon,  MagnifyingGlassIcon} from 'react-native-heroicons/outline';
import { styles } from '../theme/index';
import TrendingMovies from "../components/trendingMovies";

const ios : Boolean = Platform.OS == 'ios';
export default function HomeScreen(){
    /* A estrutura abaixo é um hook. uma função React que me permite usar recuros massinha do react
    Agora posso usar state(estado de um componente) sem precisar utilizar classes
    trending = variavel de estado
    setTrending = funcão para alterar a variável de estado
    useState(valor) = setando o valor inicial da variavel de estado
    */
    const [trending, setTrending] : any = useState([1 ,2 ,3]);
    return(
        <View className="flex-1 bg-neutral-800">
           <SafeAreaView className={ios ? "-mb-2" : "mb-3"}>
                <StatusBar style="light" />
                <View className="flex-row justify-between items-center mx-4">
                    <Bars3CenterLeftIcon size="30" strokeWidth={2} color="white" />
                    <Text className="text-white text-3xl font-bold">
                        <Text style={styles.text}>M</Text>ovies
                    </Text>
                    <TouchableOpacity>
                        <MagnifyingGlassIcon size="30" strokeWidth={2} color="white">

                        </MagnifyingGlassIcon>
                    </TouchableOpacity>
                </View>
           </SafeAreaView>

           <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom: 10}}>
                {/* trending movies carousel */}
                <TrendingMovies />
           </ScrollView>
        </View>
    );
}