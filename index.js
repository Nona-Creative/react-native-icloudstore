/**
 * @providesModule react-native-icloud-key-value-store
 */

import { NativeModules, Platform } from 'react-native';
import { AsyncStorage } from '@react-native-community/async-storage';

const iCloudStorage = Platform.OS === 'ios' ? NativeModules.RNICloudStorage : AsyncStorage;

export default iCloudStorage;

