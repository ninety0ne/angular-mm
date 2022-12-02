import { environmentProd } from './environment.prod';

export const environment = {
  firebase: {
    apiKey: environmentProd.firebase.apiKey,
    authDomain: environmentProd.firebase.authDomain,
    projectId: environmentProd.firebase.projectId,
    storageBucket: environmentProd.firebase.storageBucket,
    messagingSenderId: environmentProd.firebase.messagingSenderId,
    appId: environmentProd.firebase.appId,
    measurementId: environmentProd.firebase.measurementId,
  },
  production: false,
};
