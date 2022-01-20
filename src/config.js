export const config = {
    RPC_URL: 'https://rpc-fetchhub.fetch.ai:443',
    REST_URL: 'https://rest-fetchhub.fetch.ai:443',
    EXPLORER_URL: 'https://explore-fetchhub.fetch.ai',
    STAKING_URL: 'https://fetch.omniflix.co/stake',
    NETWORK_NAME: 'FetchHub',
    NETWORK_TYPE: 'mainnet',
    CHAIN_ID: 'fetchhub-2',
    CHAIN_NAME: 'Fetch Hub',
    COIN_DENOM: 'FET',
    COIN_MINIMAL_DENOM: 'afet',
    COIN_DECIMALS: 18,
    PREFIX: 'fetch',
    COIN_TYPE: 118,
    COINGECKO_ID: 'fetch-ai',
    DEFAULT_GAS: 200000,
    GAS_PRICE_STEP_LOW: 0.01,
    GAS_PRICE_STEP_AVERAGE: 0.025,
    GAS_PRICE_STEP_HIGH: 0.04,
    FEATURES: ['stargate', 'ibc-transfer', 'no-legacy-stdTx', 'ibc-go'],
};
