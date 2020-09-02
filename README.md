
# [Customizable Analog Clock](https://ajinkyabijwe.github.io/Customizable-Analog-Clock-Demo/ "Analog Clock")

Total CSS and JS Analog Clock with Maximum Customization with Neumorphic Designed Watchface. Including Emojis for Clock Indicators.

![emoji](https://user-images.githubusercontent.com/8812357/87088012-110cdc00-c202-11ea-874b-29e06a74ccb5.png)
![numbers](https://user-images.githubusercontent.com/8812357/87088015-110cdc00-c202-11ea-9ea8-35a7ba5577b4.png)
![date](https://user-images.githubusercontent.com/8812357/87088011-10744580-c202-11ea-88e1-63af0df4dea5.png)

## Demo
[Demo](https://ajinkyabijwe.github.io/Customizable-Analog-Clock-Demo/)

## NPM 
[NPM](https://www.npmjs.com/package/customizable-analog-clock/)

## Default Configuration Options
```javascript
const config = {
    htmlElement: '', //required
    showDate : false,
    showDigitalClock : false,
    showIndicators : false,
    clockIndicators : [],
    styleOptions : {
        fontSize: '30px',
        fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
        clockBackgroundColor: '#091921',
        clockBackgroundImage: '',
        clockBorderColor: '#132833',
        clockCenterBorderColor: '#fa9f22',
        clockCenterBackgroundColor: '#091921',
        clockSecondHandColor: '#fa9f22',
        clockMinuteHandColor: '#ffffff',
        clockHourHandColor: '#ffffff',
        clockIndicatorColor: '#607d8b',
        clockIndicatorIconColor: '#03a9f4',
        clockIndicatorMainColor: '#03a9f4',
        dateColor: '#c9c9c9',
        dateBackgroundColor: '#13222a',
        digitalClockColor: '#c9c9c9',
        digitalClockBackrground: '#13222a'
    }
}
```

## Example Usage
Analog Clock is appended to the element so first please define empty DIV with **fixed Height and Width**

```
npm i --save customizable-analog-clock
``` 

1. TS Usage
```HTML
<div id="my-clock" style="width: 200px; height: 200px;"></div>
```
```javascript
import { AnalogClock } from 'customizable-analog-clock'

const clock = new AnalogClock({
    htmlElement : 'my-clock',
    showDate: true,
    showDigitalClock: true,
    showIndicators: true,
    clockIndicators : ['😄', '🙂', '🥪' , '🦜', '🐊', '💻', '🐅', '🐼', '🐘', '🚴‍♂️', '🏂', '🧑']
    styleOptions : {
        fontSize: '35px',
        fontFamily: 'Roboto'
    }
});
```

2. Core JS Usage (ES5)
```HTML
<div id="my-clock" style="width: 200px; height: 200px;"></div>
<script>var exports = {};</script>
<script src="path/to/analog-clock.min.js"></script>
```
```javascript
const clock = new AnalogClock({
    htmlElement : 'my-clock',
    showDate: true,
    showDigitalClock: true,
    showIndicators: true,
    clockIndicators : ['😄', '🙂', '🥪' , '🦜', '🐊', '💻', '🐅', '🐼', '🐘', '🚴‍♂️', '🏂', '🧑']
    styleOptions : {
        fontSize: '35px',
        fontFamily: 'Roboto'
    }
});
```
