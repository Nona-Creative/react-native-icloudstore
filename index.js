/**
 * @providesModule react-native-icloud-key-value-store
 */

import { AsyncStorage, NativeModules, Platform } from 'react-native';

const iCloudStorage = Platform.OS === 'ios' ? NativeModules.RNICloudKeyValueStore : AsyncStorage;

export default iCloudStorage;

