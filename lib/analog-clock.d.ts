interface Config {
    htmlElement: string;
    showDate?: boolean;
    showDigitalClock?: boolean;
    showIndicators?: boolean;
    clockIndicators?: Array<String>;
    styleOptions?: {
        fontSize?: string;
        fontFamily?: string;
        clockBackgroundColor?: string;
        clockBackgroundImage?: string;
        clockBorderColor?: string;
        clockCenterBorderColor?: string;
        clockCenterBackgroundColor?: string;
        clockSecondHandColor?: string;
        clockMinuteHandColor?: string;
        clockHourHandColor?: string;
        clockIndicatorColor?: string;
        clockIndicatorIconColor?: string;
        clockIndicatorMainColor?: string;
        dateColor?: string;
        dateBackgroundColor?: string;
        digitalClockColor?: string;
        digitalClockBackgroundColor?: string;
    };
}
export declare class AnalogClock {
    config: Config;
    /**
    * htmlElement: '#myDiv',
    *
    * showDate: true, Optional
    *
    * showDigitalClock: true, Optional
    *
    * showIndicators: true, Optional
    *
    * clockIndicators: Array, Optional
    *
    * Emoji ['😄', '🙂', '🥪' , '🦜', '🐊', '👨🏽‍💻', '🐅', '🐼', '🐘', '🚴‍♂️', '🏂', '🧑' ]
    *
    * OR
    *
    * Numbers ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
    *
    * styleOptions : {
    *
    *   fontSize?: string, Optional
    *
    *   fontFamily?: string, Optional
    *
    *   clockBackgroundColor?: string, Optional
    *
    *   clockBackgroundImage?: string, Optional
    *
    *   clockBorderColor?: string, Optional
    *
    *   clockCenterBorderColor?: string, Optional
    *
    *   clockCenterBackgroundColor?: string, Optional
    *
    *   clockSecondHandColor?: string, Optional
    *
    *   clockMinuteHandColor?: string, Optional
    *
    *   clockHourHandColor?: string, Optional
    *
    *   clockIndicatorColor?: string, Optional
    *
    *   clockIndicatorIconColor?: string, Optional
    *
    *   clockIndicatorMainColor?: string, Optional
    *
    *   dateColor?: string, Optional
    *
    *   dateBackground?: string, Optional
    *
    *   digitalClockColor?: string, Optional
    *
    *   digitalClockBackgroundColor?: string, Optional
    *
    * }
    */
    constructor(config: Config);
    initializeClock: () => void;
    setHandsTime: (left: any, hand: any) => void;
    setClockIcons: () => void;
    setDateAndDigitalTime: () => void;
    appendStyleSheet: () => void;
    getStyles: () => string;
}
export {};
