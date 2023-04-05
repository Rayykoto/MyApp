const mainColors = {
    green1: '#0BCAD4',
    green2: '#EDFCFD',
    dark1: '#112340',
    dark2: '#495a75',
    dark3: '#8092AF',
    grey1: '#7D8797',
    grey2: '#E9E9E9',
    blue1: '#0066CB',
};

export const colors = {
    primary: mainColors.green1,
    secondary: mainColors.dark1,
    tertiary: mainColors.blue1,

    white: 'white',
    black: 'black',
    text: {
        primary: mainColors.dark1,
        secondary: mainColors.grey1,
        MenuInactive: mainColors.dark2,
        MenuActive: mainColors.green1,
        subTitle: mainColors.dark3
    },
    button: {
        primary: {
            backgorund: mainColors.green1,
            text: 'white'
        },
        secondary: {
            backgorund: 'white',
            text: mainColors.dark1
        },

    },
    border: mainColors.grey2,
    cardLight: mainColors.green2,
    disable: mainColors.grey2
};