// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBJdpVQ_mQVwmrCPlaSRTnnVE1aLIL9r4s',
    authDomain: 'hinkelstein-e8c3a.firebaseapp.com',
    databaseURL: 'https://hinkelstein-e8c3a.firebaseio.com',
    projectId: 'hinkelstein-e8c3a',
    storageBucket: 'hinkelstein-e8c3a.appspot.com',
    messagingSenderId: '153172999551'
  }
};
