// https://blog.logrocket.com/implementing-react-native-biometric-authentication-expo/s
import ReactNativeBiometrics from 'react-native-biometrics';

// interface IsSensorAvailableResult {
//     available: boolean;
//     biometryType?: 'TouchID' | 'FaceID' | 'Biometrics';
//     error?: string;
// }

// const isBiometricSupport = async () => {
//     let {available, biometryType} =
//       await ReactNativeBiometrics.isSensorAvailable();
//     if (available && biometryType === ReactNativeBiometrics.Biometrics) {
//       console.log('Biometrics is supported', biometryType);
//     }
//   };
//   useEffect(() => {
//     isBiometricSupport();
//   }, []);


const isBiometricSupport = async () => {
    let {available, biometryType} =
      await ReactNativeBiometrics.isSensorAvailable();
    if (available && biometryType === ReactNativeBiometrics.TouchID) {
      console.log('TouchID is supported', biometryType);
    } else if (available && biometryType === ReactNativeBiometrics.FaceID) {
      console.log('FaceID is supported', biometryType);
    } else if (available && biometryType === ReactNativeBiometrics.Biometrics) {
      console.log('Biometrics is supported', biometryType);
    } else {
      console.log('Biometrics not supported', biometryType);
    }
};
useEffect(() => {
    isBiometricSupport();
}, []);