import { StyleSheet, Text, View } from 'react-native'
import React ,{useContext} from 'react'
import { AuthContext } from '../Context/AppwriteContext';
import { logout } from '../Service/Service';
import Snackbar from 'react-native-snackbar';



const Home = () => {
    const { setIsLoggedIn } = useContext(AuthContext);

    return (
        <View>
        <Text>Home</Text>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})