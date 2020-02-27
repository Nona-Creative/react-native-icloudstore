# react-native-icloud-key-value-store 📱☁️📱

This is a fork of https://github.com/manicakes/react-native-icloudstore

## Usage

In your target's "capabilities" tab in Xcode, make sure that iCloud is switched on as well as make sure that the "Key-value storage" option is checked.

`react-native-icloudstore` mimicks the same promise-based API as [AsyncStorage](https://facebook.github.io/react-native/docs/asyncstorage.html). In addition to all of the `AsyncStorage` methods, there is one additional feature: a native event (`iCloudStoreDidChangeRemotely`) that lets you know when your store changed due to a remote change (i.e. from another device on the same iCloud account). See the example below for a *very* basic way to make use of that in your React Native application. For apps that use [redux](http://redux.js.org), you may want to call an appropriate [action creator](http://redux.js.org/docs/basics/Actions.html) upon receiving the event.

```javascript
import { NativeEventEmitter } from 'react-native';
import iCloudStorage from 'react-native-icloud-key-value-store';

...

  componentWillMount() {
    this.eventEmitter = new NativeEventEmitter(iCloudStorage);
    this.eventEmitter.addListener('iCloudStoreDidChangeRemotely', this.loadData);
  }

  componentWillUnmount() {
    this.eventEmitter.remove();
  }

  loadData = (userInfo) => {
    const changedKeys = userInfo.changedKeys;
    if (changedKeys != null && changedKeys.includes('MY_STORAGE_KEY')) {
      iCloudStorage.getItem('MY_STORAGE_KEY').then(result => this.setState({ storage: result }));
    }
  }
  
...
  
```

## Install

```shell
npm install --save react-native-icloud-key-value-store
```
