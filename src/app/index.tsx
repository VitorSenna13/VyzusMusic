import { ContextMedia } from "@/context/Media";
import { ContextThemes } from "@/context/Themes";
import { TabRoutes } from "@/routes/BottomTabs";
import * as MediaLibrary from "expo-media-library";
import { useEffect, useState } from "react";
import { Alert } from "react-native";

export default function Index() {
    const [audio, setAudio] = useState<MediaLibrary.Asset[]>([]);

    const [choiceTheme, setChoiceTheme] = useState('dark');

    const permissionMedia = async () => {
        const { status } = await MediaLibrary.requestPermissionsAsync();

        if (status !== "granted") {
            Alert.alert(
                'Permissão Negada',
                "Não é possivel continuar no app sem a permissão de acesso!",
                [
                    {
                        text: "Permitir",
                        onPress: () => permissionMedia()
                    }
                ]
            )
        } else {
            loadAudios();
        }
    }

    const loadAudios = async () => {
        const media = await MediaLibrary.getAssetsAsync();

        setAudio(media.assets);
        console.log(audio)
    }

    useEffect(() => {
        permissionMedia();
    }, []);


    return (
        <ContextThemes.Provider value={{ choiceTheme, setChoiceTheme }}>
            <ContextMedia.Provider value={{ audio }}>
                <TabRoutes />
            </ContextMedia.Provider>
        </ContextThemes.Provider>
    )
}