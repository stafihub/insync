inSync by StaFiHub (for Communities)
===

inSync is a collaborative interface for an entire community (or) blockchain network to:

- identify stakeholders such as validator node hosts (will expand to other types of node hosts depending on the network)
- discover proposals & more!

Currently, the aim of inSync is to be the default/defacto interface when bootstrapping community activities of a
specific chain (on testnet or mainnet).

# Requirements

yarn

# Instructions

1. clone repository and install packages

  ```sh
  git clone https://github.com/stafihub/insync
  cd insync
  yarn
  ```

2. update chain config

`NOTE:` below is the chain config for stafihub testnet

`src/config.js`

 ```js
export const config = {
    RPC_URL: 'https://test-rpc1.stafihub.io',
    REST_URL: 'https://test-rest-rpc1.stafihub.io',
    EXPLORER_URL: 'https://testnet-explorer.stafihub.io',
    STAKING_URL: 'https://test-staking.stafihub.io/stake',
    NETWORK_NAME: 'StaFiHub',
    NETWORK_TYPE: 'testnet',
    CHAIN_ID: 'stafihub-testnet-1',
    CHAIN_NAME: 'StaFiHub testnet-1',
    COIN_DENOM: 'FIS',
    COIN_MINIMAL_DENOM: 'ufis',
    COIN_DECIMALS: 6,
    PREFIX: 'stafi',
    COIN_TYPE: 118,
    COINGECKO_ID: '-',
    GAS_PRICE_STEP_LOW: 0.0025,
    GAS_PRICE_STEP_AVERAGE: 0.025,
    GAS_PRICE_STEP_HIGH: 0.04,
    FEATURES: ['stargate', 'ibc-transfer', 'no-legacy-stdTx', 'ibc-go'],
};
 ```

3. start app

 ```sh
 yarn start
 ```
