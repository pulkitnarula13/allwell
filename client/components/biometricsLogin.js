import * as LocalAuthentication from 'expo-local-authentication'


// wherever the useState is located 
const [isBiometricSupported, setIsBiometricSupported] = React.useState(false);
const [isAuthenticated, setIsAuthenticated] = React.useState(false)

// Check if hardware supports biometrics
  useEffect(() => {
    (async () => {
      const compatible = await LocalAuthentication.hasHardwareAsync();
      setIsBiometricSupported(compatible);
    })();
  });

// In our JSX we conditionally render a text to see inform users if their device supports
 <Text> {isBiometricSupported ? 'Your device is compatible with Biometrics' 
    : 'Face or Fingerprint scanner is available on this device'}
        </Text>

const handleBiometricAuth = async () => {
    const savedBiometrics = await LocalAuthentication.isEnrolledAsync();
      if (!savedBiometrics)
      return Alert.alert(
        'Biometric record not found',
        'Please verify your identity with your password',
        'OK',
        () => fallBackToDefaultAuth()
      );
}

function onAuthenticate () {
    const auth = LocalAuthentication.authenticateAsync({
        promptMessage: 'Authenticate',
        fallbackLabel: 'Enter Password'
    });
    auth.then(result => {
        setIsAuthenticated(result.screen);
        console.log(result);
    }
    );
}