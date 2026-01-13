import { dark, light } from "@/api/themes";
import { ContextThemes } from "@/context/Themes";
import { useContext } from "react";
import { StyleSheet } from "react-native";

export default function useStyled() {

    const { choiceTheme } = useContext(ContextThemes);

    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: choiceTheme == 'dark' ? dark.background : light.background
        }
    })
}