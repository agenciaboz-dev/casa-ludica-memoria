const images = {
    background: require('../assets/background.jpeg'),
    cloud_background: require('../assets/cloud_background.png'),
    cloud: require('../assets/cloud.png'),
    logo: require('../assets/logo.png'),
    jogo_da_memoria: require('../assets/jogo_da_memoria.png'),
    themes: {
        default: {
            game_mode: require('../assets/themes/default/game_mode.png'),
            cloud_background: require('../assets/themes/default/cloud_background.png'),
            card_background: require('../assets/themes/default/cards/background.png'),
            cards: [
                require(`../assets/themes/default/cards/card_1.png`),
                require(`../assets/themes/default/cards/card_2.png`),
                require(`../assets/themes/default/cards/card_3.png`),
                require(`../assets/themes/default/cards/card_4.png`),
                require(`../assets/themes/default/cards/card_5.png`),
                require(`../assets/themes/default/cards/card_6.png`),
                require(`../assets/themes/default/cards/card_7.png`),
                require(`../assets/themes/default/cards/card_8.png`),
            ]
        },
        xmas: {
            game_mode: require('../assets/themes/xmas/game_mode.png'),
            cloud_background: require('../assets/themes/xmas/cloud_background.png'),
            card_background: require('../assets/themes/xmas/cards/background.png'),
            cards: [
                require(`../assets/themes/xmas/cards/card_1.png`),
                require(`../assets/themes/xmas/cards/card_2.png`),
                require(`../assets/themes/xmas/cards/card_3.png`),
                require(`../assets/themes/xmas/cards/card_4.png`),
                require(`../assets/themes/xmas/cards/card_5.png`),
                require(`../assets/themes/xmas/cards/card_6.png`),
                require(`../assets/themes/xmas/cards/card_7.png`),
                require(`../assets/themes/xmas/cards/card_8.png`),
            ]
        },
    },
};
    
export default images;