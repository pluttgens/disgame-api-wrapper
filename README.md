DisGame API Wrapper Library
===========================

A simple wrapper library around DisGame's server API.

Example :

```
const disgame = require('disgame-api');

disgame
    .connect('my_api_key', 'my_secret')
    .then((myApp) => {
        console.log('Successfully connected to DisGame servers!');
        console.log(myApp);
        
        // Do stuff...
    })
    .catch((err) => console.log('Could not connect to DisGame servers : ' + err));
```