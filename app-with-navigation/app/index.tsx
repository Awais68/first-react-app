import { ThemedButton } from "@/components/ThemedButton";
import { ThemedText } from "@/components/ThemedText";
import { View, Text } from "react-native-reanimated/lib/typescript/Animated";

import FontAwesome from '@expo/vector-icons/FontAwesome';


export default function WelcomScreen() {
    return (
        <View style={{ flex: 1, justifyContent: "center" }} >
            <ThemedText type="title" align="center" >Heading</ThemedText>
            <ThemedText type="subtitle" align="center" >Welcome To Our App</ThemedText>

            <ThemedButton
                onPress={() => Alert.alert("Clicked on Google Login")}
                bgColor="#fff"
                txtColor="#000"
                icon={<FontAwesome name="google" fontSize={20} color="blue" style={{
                    marginRight: 20
                }} />}
                style={{ elevation: 1 }}
                my={10} txt="Continue With Google" />
            <ThemedButton
                bgColor="#000"
                txtColor="#fff"
                style={{ elevation: 1 }}
                my={10} txt="Continue With Apple" />
            <ThemedButton
                bgColor="#000"
                txtColor="#fff"
                style={{ elevation: 1 }}
                my={10} txt="Continue With X" />


        </View>
    )
}