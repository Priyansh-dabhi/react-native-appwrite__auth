import { StyleSheet, Text, View, Pressable } from 'react-native'
import React ,{useContext} from 'react'
import { AuthContext } from '../Context/AppwriteContext';
import { logout } from '../Service/Service';
import Snackbar from 'react-native-snackbar';



const Home = () => {
    const { setIsLoggedIn } = useContext(AuthContext);
    const handleLogout = async () => {
        try {
        await logout();
        setIsLoggedIn(false);
        Snackbar.show({
            text: 'Logged out successfully!',
            duration: Snackbar.LENGTH_SHORT,
        });
        } catch (err) {
        console.log('Logout Error:', err);
        Snackbar.show({
            text: 'Logout failed',
            duration: Snackbar.LENGTH_SHORT,
        });
        }
    };
    return (
        <View style={styles.container}>
      <Text style={styles.title}>Welcome to Home Screen 🎉</Text>

      <Pressable style={styles.logoutBtn} onPress={handleLogout}>
        <Text style={styles.logoutText}>Logout</Text>
      </Pressable>
    </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        marginBottom: 30,
        color: '#333',
    },
    logoutBtn: {
        backgroundColor: '#f02e65',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 5,
    },
    logoutText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
})