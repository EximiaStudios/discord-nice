# Discord Nice

Nice.

## Setup

1. Follow the instructions in [create-discord-bot](https://github.com/peterthehan/create-discord-bot).

2. Download this widget and move it into the [src/widgets](https://github.com/peterthehan/create-discord-bot/blob/master/src/widgets/) folder.

3. Open [config.js](https://github.com/EximiaStudios/discord-nice/blob/master/config.js) to configure your own settings:

```js
module.exports = {
    // List of channels to ignore
    ignoredChannel: [
        "215442075011907584"
    ],
    // List of triggers
    trigger: [
        "69",
        "sixty nine",
        "sixty-nine",
        "sixty 9",
        "六十九",
    ],
    // List of response (randomly chosen)
    response: [
        "Nice.",
        "Naisu.",
    ]
};
```
