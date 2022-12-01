import { firebaseEnv } from './environment.prod';

export const environment = {
  firebase: {
    apiKey: firebaseEnv.firebase.apiKey,
    authDomain: firebaseEnv.firebase.authDomain,
    projectId: firebaseEnv.firebase.projectId,
    storageBucket: firebaseEnv.firebase.storageBucket,
    messagingSenderId: firebaseEnv.firebase.messagingSenderId,
    appId: firebaseEnv.firebase.appId,
    measurementId: firebaseEnv.firebase.measurementId,
  },
  production: false,
};
