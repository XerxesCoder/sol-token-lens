const knownAccounts = {
    "6H5FviRpcZr363sxKcfdzjP98gdVHMXKz8x8JfomWvqp": {
        "name": "PumpFun AMM",
        "type": "AMM"
    },
    "5Q544fKrFoe6tsEbD7S8EmxGTJYAKtTVhAW5Q5pge4j1": {
        "name": "Raydium AMM V4",
        "type": "AMM"
    },
    "675kPX9MHTjS2zt1qfr1NYHuzeLXfQM9H24wFSUt1Mp8": {
        "name": "Raydium AMM V4",
        "type": "AMM"
    },
    "CAMMCzo5YL8w4VFF8KVHrK22GGUsp5VTaW7grrKgrWqK": {
        "name": "Raydium CLAMM",
        "type": "AMM"
    },
    "CPMMoo8L3F4NbTegBCKVNunggL7H1ZpdTHKxQB5qKP1C": {
        "name": "Raydium CPMM",
        "type": "AMM"
    },
    "CPK8fQYShAmERZmysQRAGWPvV5qs3AvazQsiR9ctC6ED": {
        "name": "Raydium CLAMM LP",
        "type": "AMM"
    },
    "FLUXubRmkEi2q6K3Y9kBPg9248ggaZVsoSFhtJHSrm1X": {
        "name": "FluxBeam",
        "type": "AMM"
    },
    "24Uqj9JCLxUeoC3hGfh5W3s9FM9uCHDS2SG3LYwBpyTi": {
        "name": "Meteora Vault",
        "type": "AMM"
    },
    "Eo7WjKq67rjJQSZxS6z3YkapzY3eMj6Xy8X5EQVn5UaB": {
        "name": "Meteora Pools",
        "type": "AMM"
    },
    "LBUZKhRxPF3XUpBCjp4YzTKgLccjZhTSDM9YuVaPwxo": {
        "name": "Meteora DLMM",
        "type": "AMM"
    },
    "PhoeNiXZ8ByJGLkxNfZRnkUfjvmuYqLR89jjFHGqdXY": {
        "name": "Phoenix",
        "type": "AMM"
    },
    "2wT8Yq49kHgDzXuPxZSaeLaH1qbmGXtEyPy64bL7aD3c": {
        "name": "Lifinity v2",
        "type": "AMM"
    },
    "opnb2LAfJYbRMAHHvqjCwQxanZn7ReEHp1k81EohpZb": {
        "name": "OpenBook v2",
        "type": "AMM"
    },
    "Gswppe6ERWKpUTXvRPfXdzHhiCyJvLadVvXGfdpBqcE1": {
        "name": "Guac Swap",
        "type": "AMM"
    },
    "61aq585V8cR2sZBeawJFt2NPqmN7zDi1sws4KLs5xHXV": {
        "name": "Jupiter Team (Cold)",
        "type": "AMM"
    },
    "CbU4oSFCk8SVgW23NLvb5BwctvWcZZHfxRD6HudP8gAo": {
        "name": "Jupiter Team (Hot)",
        "type": "AMM"
    },
    "EXJHiMkj6NRFDfhWBMKccHNwdSpCT7tdvQeRf87yHm6T": {
        "name": "Jupiter Community (Cold)",
        "type": "AMM"
    },
    "FVhQ3QHvXudWSdGix2sdcG47YmrmUxRhf3KCBmiKfekf": {
        "name": "Jupiter Community (Hot)",
        "type": "AMM"
    },
    "whirLbMiicVdio4qvUfM5KAg6Ct8VwpYzGff3uctyCc": {
        "name": "Orca Whirlpool",
        "type": "AMM"
    },
    "obriQD1zbpyLz95G5n7nJe6a4DPjpFwa5XYPoNm113y": {
        "name": "Obric V2",
        "type": "AMM"
    },
    "swapNyd8XiQwJ6ianp9snpu4brUqFxadzvHebnAXjJZ": {
        "name": "Stabble Swap",
        "type": "AMM"
    },
    "HyaB3W9q6XdA5xwpU4XnSZV94htfmbmqJXZcEbRaJutt": {
        "name": "Invariant",
        "type": "AMM"
    },
    "SSwpkEEcbUqx4vtoEByFjSkhKdCT862DNVb52nZg1UZ": {
        "name": "Saber Swap",
        "type": "AMM"
    },
    "SoLFiHG9TfgtdUXUjWAxi3LtvYuFyDLVhBWxdMZxyCe": {
        "name": "SolFi",
        "type": "AMM"
    },
    "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v": {
        "name": "USDC",
        "type": "token"
    },
    "USDH1SM1ojwWUga67PGrgFWUHibbjqMvuMaDkRJTgkX": {
        "name": "USDH",
        "type": "token"
    },
    "So11111111111111111111111111111111111111112": {
        "name": "SOL",
        "type": "token"
    },
    "4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R": {
        "name": "Raydium",
        "type": "token"
    },
    "beamazjPnFT3JQoe16HjUxkpmHFfsHY6dTqf3VwBXzq": {
        "name": "FluxBeam LP",
        "type": "AMM"
    },
    "USRfPB8M8pfbrFnEt3FDf3Y8ZmU4G17wcRsWBUK416m": {
        "name": "FluxBot User Rewards",
        "type": "AMM"
    },
    "RESWbt45deYa8F7mQ53pGGJ3XECYC15EGK7cM738mrN": {
        "name": "FluxBot Reserves",
        "type": "AMM"
    },
    "oPYwFwKPcjLVKwtoER8SJt9JfkDAS8GfJKL8yQGX22W": {
        "name": "FluxBot Operations",
        "type": "AMM"
    },
    "BNZPZfmuoWFjvnPRasn6oxWF326Mq2jXv6JpY2AdcqbU": {
        "name": "FluxBeam Pool",
        "type": "AMM"
    },
    "Cook4kWjNd33iXUys8GZRcFNDuwm2ZRqPKU2qBrrQ7pB": {
        "name": "Lets Cook Escrow",
        "type": "AMM"
    },
    "EXqYZtA1d4Nx2WjYuQ1GvdeujFM8VbvmjfdmJBJj7guc": {
        "name": "LibrePlex Escrow",
        "type": "AMM"
    },
    "8bvPnYE5Pvz2Z9dE6RAqWr1rzLknTndZ9hwvRE6kPDXP": {
        "name": "LibrePlex Fair Launch",
        "type": "AMM"
    },
    "CChTq6PthWU82YZkbveA3WDf7s97BWhBK4Vx9bmsT743": {
        "name": "Bonfida Locker",
        "type": "LOCKER"
    },
    "RhoN4PDAVG19bziREMQDsUigqPyWk1wb5hABQ9fFLDC": {
        "name": "Rho Escrow",
        "type": "AMM"
    },
    "LocpQgucEQHbqNABEYvBvwoxCPsSbG91A1QaQhQQqjn": {
        "name": "Jupiter Locker",
        "type": "LOCKER"
    },
    "Lock1zcQFoaZmTk59sr9pB5daFE6Cs1K5eWyRLF1eju": {
        "name": "FluxBeam Locker",
        "type": "LOCKER"
    },
    "6EF8rrecthR5Dkzon8Nwu78hRvfCKubJ14M5uBEwF6P": {
        "name": "Pump.Fun",
        "type": "AMM"
    },
    "FEESuLjQRGWbnBQMS25oo84UfZkZM4rrnuez6L3EMDu6": {
        "name": "Nuts.Fun",
        "type": "AMM"
    },
    "4piDe6pZkCo3E6aYVd8ZAyNfcT4T11bZauj5VpmTVXdF": {
        "name": "Nuts.Fun Farming",
        "type": "WALLET"
    },
    "MoonCVVNZFSYkqNXP6bxHLPL6QQJiMagDL3qcqUQTrG": {
        "name": "Moonshot",
        "type": "AMM"
    },
    "MPL4o4wMzndgh8T1NVDxELQCj5UQfYTYEkabX3wNKtb": {
        "name": "MPL Hybrid Escrow",
        "type": "AMM"
    },
    "TSLvdd1pWpHVjahSpsvCXUbgwsL3JAcvokwaKt1eokM": {
        "name": "Pump.Fun Authority",
        "type": "WALLET"
    },
    "39azUYFWPz3VHgKCf3VChUwbpURdCHRxjWVowf5jUJjg": {
        "name": "Pump.fun: Raydium Migration",
        "type": "AMM"
    },
    "HWEoBxYs7ssKuudEjzjmpfJVX7Dvi7wescFsVx2L5yoY": {
        "name": "bloxroute",
        "type": "WALLET"
    },
    "ZG98FUCjb8mJ824Gbs6RsgVmr1FhXb2oNiJHa2dwmPd": {
        "name": "BonkBot Platform Fee",
        "type": "WALLET"
    },
    "9yMwSPk9mrXSN7yDHUuZurAh1sjbJsfpUqjZ7SvVtdco": {
        "name": "Trojan Platform Fee",
        "type": "WALLET"
    },
    "4o9p5PaYQcfNiLZCCN5ZsZckdtj6Up3xzLvSoZx8GufA": {
        "name": "BullX Platform Fee",
        "type": "WALLET"
    },
    "BB5dnY55FXS1e1NXqZDwCzgdYJdMCj3B92PU6Q5Fb6DT": {
        "name": "GMGN Platform Fee",
        "type": "WALLET"
    },
    "4uks6GfvhLaqJxWrZZYYxfbU24Kz7318VLXQozKQav6V": {
        "name": "Photon Platform Fee",
        "type": "WALLET"
    },
    "45ruCyfdRkWpRNGEqWzjCiXRHkZs8WXCLQ67Pnpye7Hp": {
        "name": "Jupiter Platform Fee",
        "type": "WALLET"
    },
    "8pFhUqCU7Fkxfg2DLytRDf7a9oK4XGtN92PrYwtVQc6G": {
        "name": "Raydium Treasury",
        "type": "WALLET"
    },
    "A77HErqtfN1hLLpvZ9pCtu66FEtM8BveoaKbbMoZ4RiR": {
        "name": "Bitget Exchange",
        "type": "EXCHANGE"
    },
    "ASTyfSima4LLAdDgoFGkgqoKowG1LZFDr9fAQrg7iaJZ": {
        "name": "MEXC",
        "type": "EXCHANGE"
    },
    "Cw8CFyM9FkoMi7K7Crf6HNQqf4uEMzpKw6QNghXLvLkY": {
        "name": "Jito Tip 3",
        "type": "WALLET"
    },
    "2ojv9BAiHUrvsm9gxDe7fJSzbNZSJcxZvf8dqmWGHG8S": {
        "name": "Binance 1",
        "type": "WALLET"
    },
    "5tzFkiKscXHK5ZXCGbXZxdw7gTjjD1mBwuoFbhUvuAi9": {
        "name": "Binance 2",
        "type": "WALLET"
    },
    "9WzDXwBbmkg8ZTbNMqUxvQRAyrZzDsGYdLVL9zYtAWWM": {
        "name": "Binance 3",
        "type": "WALLET"
    },
    "5PAhQiYdLBd6SVdjzBQDxUAEFyDdF5ExNPQfcscnPRj5": {
        "name": "MEXC 2",
        "type": "WALLET"
    },
    "BbHG9GvPActFGogv3iNrpDAj4qpXr8t3jF16uGxXcKci": {
        "name": "Backpack Exchange 1",
        "type": "WALLET"
    },
    "43DbAvKxhXh1oSxkJSqGosNw3HpBnmsWiak6tB5wpecN": {
        "name": "Backpack Exchange 2",
        "type": "WALLET"
    },
    "GXtd2izAiMJPwMEjfgTRH3d7k9mjn4Jq3JrWFv9gySYy": {
        "name": "Helius ZK Escrow",
        "type": "WALLET"
    },
    "FFMZMjyE6C5GQdok9PWPgXWeiz9arXGC4KvajLakeWEh": {
        "name": "Streamflow Community Growth",
        "type": "LOCKER"
    },
    "AqGsNsKyUAP7AMjW8yL31HEqEYGATmRA9HTChiJqVnsh": {
        "name": "Streamflow Ecosystem Growth",
        "type": "LOCKER"
    },
    "4NfStDkdst2Cp6rfsowmrSte2cGfdadjtjeEwbZXLukA": {
        "name": "Streamflow Core Contributors",
        "type": "LOCKER"
    },
    "Ds559Hq3qT7f6eTTT427B6t1471iBjcWTwJpgJcFC913": {
        "name": "Streamflow Future Rewards",
        "type": "LOCKER"
    },
    "4o3qAErcapJ6gRLh1m1x4saoLLieWDu7Rx3wpwLc7Zk9": {
        "name": "Adrena Protocol",
        "type": "LOCKER"
    },
    "5YET3YapxD6to6rqPqTWB3R9pSbURy6yduuUtoZkzoPX": {
        "name": "Jupiter Ape",
        "type": "WALLET"
    }
}


export const getNameByAddress = (address, creator) => {
    if (!address || typeof address !== 'string') {
        return null;
    }
    if(address == creator) {
        return "Creator";
    }

    const account = knownAccounts[address];
    return account ? account.name : address.slice(0, 4) + "..." + address.slice(-4);
}