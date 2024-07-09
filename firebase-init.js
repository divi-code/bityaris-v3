const firebaseConfig = {
  apiKey: 'AIzaSyDxuoY3iXPGFo4Xi3ZrjKLmqRYTVuVy9vU',
  authDomain: 'phemex-app-34807.firebaseapp.com',
  databaseURL: 'https://phemex-app-34807.firebaseio.com',
  projectId: 'phemex-app-34807',
  storageBucket: 'phemex-app-34807.appspot.com',
  messagingSenderId: '449082483406',
  appId: '1:449082483406:web:367791836ea68e3579a69f',
  measurementId: 'G-3WQ8CBFR04',
};

const testConfig = {
  apiKey: 'AIzaSyBQg1NUTPHRUK3S-hTN1z1YLzmRFtbrebQ',
  authDomain: 'test-8a773.firebaseapp.com',
  projectId: 'test-8a773',
  storageBucket: 'test-8a773.appspot.com',
  messagingSenderId: '696088808922',
  appId: '1:696088808922:web:291b8a64b54b59742cc4e3',
  measurementId: 'G-1GTGTMWV27',
};

firebase.initializeApp(checkProduction() ? firebaseConfig : testConfig);

const firebaseMessaging = firebase.messaging();

function checkProduction() {
  if (location.hostname.indexOf('testnet') > -1 || location.protocol !== 'https:') {
    return false;
  }

  const segments = location.hostname.split('.');
  if (segments.length === 3 && segments[0] === 'www') {
    return true;
  }

  if (segments.length === 2) {
    return true;
  }

  return false;
}
