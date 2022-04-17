import { NativeStackNavigationProp  } from "@react-navigation/native-stack";

export type propsNavigationStack = {
    Home:undefined
    Login?:{
        name:string
    }
    Principal:undefined
}

export type propsStack = NativeStackNavigationProp<propsNavigationStack>