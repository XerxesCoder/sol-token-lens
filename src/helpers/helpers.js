export const trucateAddress = (address) => {
    return address.slice(0, 4) + "..." + address.slice(-4);
};

export const overallColor = (score) => {

    if (score >= 8000) return {
        bgColor: "bg-red-500",
        text: "Danger",

    }
    if (score >= 2000) return {
        bgColor: "bg-orange-500",
        text: "Warning",

    }
    if (score <= 2000) return {
        bgColor: "bg-green-500",
        text: "Good",

    }

};
export const scoreColor = (score) => {
    if (score >= 8000) return "text-red-500";
    if (score >= 5000) return "text-yellow-500";
    if (score <= 5000) return "text-green-500";
    return "text-red-500";
};
export const badgeColor = (level) => {

    switch (level) {
        case "danger":
            return "bg-red-500";
            break;
        case "warn":
            return "bg-orange-500";
            break;

    }
}


export const formatNumber = (num, dec) => {
    if (typeof num !== 'number' || isNaN(num)) {
        throw new Error("Input must be a valid number");
    }
    const base = num / 10 ** dec;
    let rounded, suffix = "";

    if (Math.abs(base) >= 1e12) {
        rounded = Math.round(base / 1e12);
        suffix = "T";
    } else if (Math.abs(base) >= 1e9) {
        rounded = Math.round(base / 1e9);
        suffix = "B";
    } else if (Math.abs(base) >= 1e6) {
        const millions = base / 1e6;
        if (Math.round(millions) === 1000) {
            rounded = Math.round(base / 1e9);
            suffix = "B";
        } else {
            rounded = Math.round(millions);
            suffix = "M";
        }
    } else {
        return base.toFixed(0);
    }

    return `${rounded}${suffix}`;
}


export const extractSolLP = (data) => {
    const solAddr = "So11111111111111111111111111111111111111112";
    let solanaLp;
    if (data.mintA == solAddr) {
        solanaLp = data.liquidityAAccount.amount / 1e9;
    } else {
        solanaLp = data.liquidityBAccount.amount / 1e9;
    }

    return solanaLp.toFixed(2);
}

export const pairName = (data, symbol) => {
    const solAddr = "So11111111111111111111111111111111111111112";
    if (data.mintA == solAddr) {
        return `SOL / ${symbol}`;
    } else {
        return `${symbol} / SOL`;
    }
}

export const getLockedPR = (supply, amount) => {
    const divided = amount / supply;
    const toETH = divided * 100;
    return toETH.toFixed()
}