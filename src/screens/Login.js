import { React, useState } from 'react';
import { Image, StyleSheet, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';

const Login = () => {
    const users = [
        { name: "Dani Fahdlu", userID: "danifahdlu", password: "12345"},
        { name: "Ucok Baba", userID: "ucokbaba", password: "54321"},
        { name: "Anak Konda", userID: "anakkonda", password: "67890"},
        { name: "Manus Minus", userID: "manusminus", password: "09876"},
        { name: "Badrus", userID: "badrus", password: "11111"}
    ]

    const [userID, setUserID] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleLogin = () => {
        const user = users.find(user => user.userID === userID)

        if (userID === '') {
            setMessage('User ID cannot be empty')
        } else {
            if (!user) {
                setMessage('User ID not found')
            } else {
                if (user.password === password) {
                    setMessage('Welcome, ' + user.name + '\nLets ngoding...')
                } else {
                    setMessage('Username and password not valid')
                }
            }
        }

        Alert.alert(message)
    }

    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <View style={styles.imgContainer}>
                    <Image source={require('../../assets/developer.png')} style={styles.imgdev} />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.titleText}>Let's happy code</Text>
                    <Image source={require('../../assets/confetti.png')} style={styles.confetti} />
                </View>
            </View>
            <View style={styles.form}>
                <Text style={styles.label}>User ID</Text>
                <TextInput style={styles.input} onChangeText={setUserID} />
                <Text style={[styles.label, { marginTop: 20 }]}>Password</Text>
                <TextInput style={styles.input} onChangeText={setPassword} secureTextEntry />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Sign In</Text>
                </TouchableOpacity>
                <View style={styles.orContainer}>
                    <Text style={styles.orText}>or</Text>
                </View>
                <TouchableOpacity style={[styles.button, { backgroundColor: '#f29a02', marginTop: 7 }]}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginBottom: 50,
    },
    imgContainer: {
        alignItems: 'center',
    },
    imgdev: {
        width: 115,
        height: 115,
    },
    textContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    titleText: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#333',
    },
    confetti: {
        width: 25,
        height: 25,
        marginLeft: 5,
    },
    form: {
        marginTop: 40,
    },
    label: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#333',
    },
    input: {
        borderColor: '#ccc',
        borderWidth: 2,
        borderRadius: 5,
        height: 40,
        marginTop: 5,
        paddingLeft: 10,
        fontSize: 16,
        width: 320
    },
    buttonContainer: {
        width: 320,
        marginTop: 30,
        alignItems: 'center',
    },
    button: {
        width: '100%',
        backgroundColor: '#b804b5',
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'semibold',
        textTransform: 'none',
    },
    orContainer: {
        marginTop: 7,
        alignItems: 'center',
    },
    orText: {
        color: '#636363',
    },
});

export default Login;
