'use client'

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { AlertTriangle, CheckCircle, Coins, Users, Activity, ArrowUpDown, Home, StoreIcon, LockIcon } from "lucide-react";
import { Badge } from "./ui/badge";
import Link from "next/link";
import Image from "next/image";
import RaydiumImage from '/public/assets/rd.png'
import MeteoraImage from '/public/assets/mt.png'
import PumpImage from '/public/assets/pump.png'
import { trucateAddress, formatNumber, scoreColor, overallColor, badgeColor, extractSolLP, pairName, getLockedPR } from "@/helpers/helpers";
import { getNameByAddress } from "@/lib/accounts";
export default function TokenSection({ tokenData }) {


    function getLockedLpValuePercentage(data) {
        const {
            supply,
            decimals,
            tokenSupply,
            baseUSD,
            quoteUSD,
            lpLockedUSD
        } = data;
        const tokenPrice = (baseUSD + quoteUSD) / tokenSupply;
        const normalizedSupply = supply / Math.pow(10, decimals);
        const tokenMarketCap = normalizedSupply * tokenPrice;
        const lockedLpValuePct = (tokenMarketCap / (tokenMarketCap + lpLockedUSD)) * 100;

        return lockedLpValuePct;
    }


    const tokenPrice = tokenData?.markets ? tokenData?.markets[0]?.lp?.quoteMint == "So11111111111111111111111111111111111111112" ? tokenData?.markets[0]?.lp?.basePrice?.toFixed(11) : tokenData?.markets[0]?.lp?.quotePrice?.toFixed(11) : 0
    const tokenSupplyForMC = tokenData.token?.supply / 10 ** tokenData.token?.decimals;
    const calculateLockedLP = (lpLocked, lpTotalSupply) => {
        const lpLockedPct = (lpLocked / lpTotalSupply) * 100;
        return parseFloat(lpLockedPct.toFixed());
    }
    const lpLocked = tokenData?.markets ? calculateLockedLP(tokenData?.markets[0]?.lp?.lpLocked, tokenData?.markets[0]?.lp?.lpTotalSupply) : 0;


    if (tokenData.error) {
        return (
            <div className="min-h-screen bg-gradient-to-b from-background to-secondary p-6">
                <div className="max-w-7xl mx-auto space-y-6">
                    <Link
                        href={'/'}
                        className="w-fit flex justify-center  font-bold items-center hover:border-gray-950 text-black border-slate-800 border text-xs hover:bg-gray-200 p-2 transition-all ease-in-out rounded-xl"

                    >
                        <Home className="w-4 h-4 mr-2 text-black" />
                        Back to Home
                    </Link>
                    <Card className="p-6 md:p-8 backdrop-blur-sm bg-card/50">
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <h1 className="text-2xl font-bold">
                                    Token Not Found
                                </h1>
                                <p className="text-muted-foreground">
                                    The token you are looking for does not exist.
                                </p>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        );
    }
    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <div className="space-y-6 w-full">
                <Link
                    href={'/'}
                    className="w-fit flex justify-center  font-bold items-center hover:border-gray-950 text-black border-slate-800 border text-xs hover:bg-gray-200 p-2 transition-all ease-in-out rounded-xl"

                >
                    <Home className="w-4 h-4 mr-2 text-black" />
                    Back to Home
                </Link>
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                        <h1 className="text-xl sm:text-3xl font-bold">{tokenData.tokenMeta.name}</h1>
                        <p className="text-foreground">{tokenData.tokenMeta.symbol}</p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <span>Token Address:</span>
                            <a href={`https://solscan.io/account/${tokenData.mint}`} target="_blank" className="text-slate-800 font-bold underline underline-offset-4 hover:opacity-50 transition-opacity ease-in-out duration-300">
                                {trucateAddress(tokenData.mint)}
                            </a>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1  lg:grid-cols-3 gap-6">
                    {/* Left Section */}
                    <div className="space-y-5 col-span-full lg:col-span-2">
                        <Card className="p-6  h-fit">
                            <div className="flex justify-between items-center mb-2">
                                <h2 className="text-base sm:text-xl font-semibold flex items-center gap-2">
                                    <AlertTriangle className="w-5 h-5" />
                                    Risk Analysis
                                </h2>
                                <p className={`text-base sm:text-2xl font-bold `}>
                                    {tokenData.score}
                                </p>
                            </div>
                            <Separator className="mb-4" />
                            <div className={`w-full p-3 rounded-md mb-3 ${overallColor(tokenData.score).bgColor}  flex justify-center items-center`}>
                                <h3 className="font-bold uppercase tracking-widest text-base sm:text-xl">
                                    {overallColor(tokenData.score).text}
                                </h3>
                            </div>
                            <div className="space-y-4">
                                {tokenData.risks.length > 0 && tokenData.risks.map((risk, index) => (
                                    <div key={index} className="space-y-2">
                                        <div className="flex justify-between">
                                            <span className="font-medium">{risk.name} {risk.value}</span>
                                            <Badge variant="outline" className={`${badgeColor(risk.level)} w-16 flex justify-center items-center text-white`}>{risk.level == 'danger' ? "Danger" : "Warning"}</Badge>
                                        </div>
                                        <p className="text-sm text-muted-foreground">{risk.description}</p>

                                    </div>
                                ))}
                            </div>
                        </Card>
                        <Card className="p-6 col-span-full lg:col-span-2 h-fit">
                            <div className="flex justify-between items-center mb-2">
                                <h2 className="text-base sm:text-xl font-semibold flex items-center gap-2">
                                    <StoreIcon className="w-5 h-5" />
                                    Markets
                                </h2>
                                <p className={`text-sm sm:text-base font-bold`}>
                                    {tokenData?.markets?.length}
                                </p>
                            </div>
                            <Separator className="mb-4" />
                            <table className="w-full border-collapse text-sm sm:text-base">
                                <thead>
                                    <tr className="border-b border-gray-200 dark:border-gray-700 text-sm">
                                        <th className="py-2 px-4 text-left font-medium">Market</th>
                                        <th className="py-2 px-4 text-left font-medium">Address</th>
                                        <th className="py-2 px-4 text-left font-medium">Pair</th>
                                        <th className="py-2 px-4 text-left font-medium">LP Mint</th>
                                        <th className="py-2 px-4 text-left font-medium">Liquidity</th>
                                        <th className="py-2 px-4 text-left font-medium">LP Locked</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tokenData?.markets?.length > 0 ? (
                                        tokenData.markets.map((market, index) => (
                                            <tr key={index} className="border-b border-gray-200 dark:border-gray-700">
                                                <td className="p-2">
                                                    <Image
                                                        src={market.marketType.includes("meteora") ? MeteoraImage : market.marketType.includes("pump") ? PumpImage : RaydiumImage}
                                                        alt={market.marketType}
                                                        width={20}
                                                        height={20}
                                                        className="w-5 h-5"
                                                    />

                                                </td>
                                                <td className="py-2 px-4">
                                                    <a href={`https://solscan.io/account/${market.pubkey}`} target="_blank" className="text-xs underline underline-offset-4 hover:opacity-50 transition-opacity ease-in-out duration-500">
                                                        {trucateAddress(market.pubkey)}
                                                    </a>
                                                </td>
                                                <td className="py-2 px-4 text-xs">{pairName(market, tokenData.tokenMeta.symbol)}</td>
                                                <td className="py-2 px-4 text-xs">{market.mintLP == "11111111111111111111111111111111" ? "-" : (
                                                    <a href={`https://solscan.io/account/${market.mintLP}`} target="_blank" className="text-xs underline underline-offset-4 hover:opacity-50 transition-opacity ease-in-out duration-500">
                                                        {trucateAddress(market.mintLP)}
                                                    </a>
                                                )}</td>
                                                <td className="py-2 px-4">{extractSolLP(market)} <span className="text-[10px]">SOL</span></td>
                                                <td className="py-2 px-4 text-xs">{calculateLockedLP(market.lp.lpLocked, market.lp.lpTotalSupply) || 0}%</td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="6" className="py-4 text-center text-gray-500">
                                                No markets available
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </Card>
                    </div>
                    {/* Right Section */}
                    <div className="space-y-5">
                        <Card className="p-6">
                            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                                <Activity className="w-5 h-5" />
                                Token Overview
                            </h2>
                            <Separator className="mb-2" />
                            <div className="space-y-2">
                                <div>
                                    <h3 className="text-xs text-muted-foreground">Price</h3>
                                    <p className="text-xs sm:text-sm font-bold">
                                        ${tokenPrice}
                                    </p>
                                </div>
                                <Separator />
                                <div>
                                    <h3 className="text-xs text-muted-foreground">Supply</h3>
                                    <p className="text-xs sm:text-sm font-bold">
                                        {formatNumber(tokenData.token?.supply, tokenData.token?.decimals) || "N/A"}
                                    </p>
                                </div>
                                <Separator />
                                <div>
                                    <h3 className="text-xs text-muted-foreground">Market Cap</h3>
                                    <p className="text-xs sm:text-sm font-bold">
                                        ${tokenData?.markets && Number(tokenPrice * tokenSupplyForMC).toLocaleString("en-US") || "N/A"}
                                    </p>
                                </div>
                                <Separator />
                                <div>
                                    <h3 className="text-xs text-muted-foreground">Decimals</h3>
                                    <p className="text-xs sm:text-sm font-bold">
                                        {tokenData.token?.decimals || "N/A"}
                                    </p>
                                </div>
                                <Separator />
                                <div>
                                    <h3 className="text-xs text-muted-foreground">Creator</h3>
                                    {tokenData.creator ? (
                                        <a href={`https://solscan.io/account/${tokenData.creator}`} target="_blank" className="text-xs sm:text-sm font-bold underline underline-offset-4 hover:opacity-50 transition-opacity ease-in-out duration-500">
                                            {trucateAddress(tokenData.creator)}
                                        </a>
                                    ) : (
                                        <p className="text-xs sm:text-sm font-bold">N/A</p>
                                    )}

                                </div>
                                <Separator />

                                <div >
                                    <h3 className={`text-sm  ${tokenData.token?.mintAuthority ? "text-red-700 animate-pulse" : "text-muted-foreground"}`}>Mint Authority</h3>
                                    {tokenData.token?.mintAuthority ? (
                                        <a href={`https://solscan.io/account/${tokenData.token?.mintAuthority}`} target="_blank" className="text-xs sm:text-sm font-bold underline underline-offset-4 hover:opacity-50 transition-opacity ease-in-out duration-500">
                                            {trucateAddress(tokenData.token?.mintAuthority)}
                                        </a>
                                    ) : (
                                        <p className="text-xs sm:text-sm font-bold">N/A</p>
                                    )}

                                </div>
                                <Separator />
                                <div>
                                    <h3 className={`text-sm  ${tokenData.token?.freezeAuthority ? "text-red-700 animate-pulse" : "text-muted-foreground"}`}>Freeze Authority</h3>
                                    {tokenData.token?.freezeAuthority ? (
                                        <a href={`https://solscan.io/account/${tokenData.token?.freezeAuthority}`} target="_blank" className="text-xs sm:text-sm font-bold underline underline-offset-4 hover:opacity-50 transition-opacity ease-in-out duration-500">
                                            {trucateAddress(tokenData.token?.freezeAuthority)}
                                        </a>
                                    ) : (
                                        <p className="text-xs sm:text-sm font-bold">N/A</p>
                                    )}

                                </div>
                                <Separator />
                                <div>
                                    <h3 className="text-xs text-muted-foreground">LP Locked</h3>
                                    <p className="text-xs sm:text-sm font-bold">
                                        {lpLocked} %
                                    </p>
                                </div>


                            </div>
                        </Card>
                        {Object.keys(tokenData.lockers).length > 0 && (
                            <Card className="p-6">
                                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                                    <LockIcon className="w-5 h-5" />
                                    LP Lockers
                                </h2>
                                <Separator className="mb-2" />
                                <div className="space-y-4 max-h-48 overflow-y-auto p-3 scrollbar-thin">
                                    {Object.entries(tokenData.lockers).map(([address, details]) => (
                                        <div key={address} className="space-y-2 flex justify-between items-center">
                                            <a href={`https://solscan.io/account/${address}`} target="_blank" className="text-xs sm:text-sm font-bold underline underline-offset-4 hover:opacity-50 transition-opacity ease-in-out duration-500">
                                                {trucateAddress(address)}
                                            </a>

                                            <p className="text-sm font-bold">
                                                ${details.usdcLocked || 0}
                                            </p>

                                        </div>
                                    ))}
                                </div>
                            </Card>
                        )}

                        <Card className="p-6">
                            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                                <Users className="w-5 h-5" />
                                Top Holders
                            </h2>
                            <Separator className="mb-2" />
                            <div className=" max-h-48 overflow-y-auto scrollbar-thin">
                                <table className="w-full border-collapse text-sm sm:text-base">
                                    <thead>
                                        <tr className="border-b border-gray-200 dark:border-gray-700">
                                            <th className="py-2 px-4 text-left text-xs">Account</th>
                                            <th className="py-2 px-4 text-left text-xs">Amount</th>
                                            <th className="py-2 px-4 text-left text-xs">%</th>
                                        </tr>
                                    </thead>
                                    <tbody className="max-h-36 overflow-y-auto">
                                        {tokenData.topHolders.length > 0 ? (
                                            tokenData.topHolders.map((holder, index) => (
                                                <tr key={index} className="border-b border-gray-200 dark:border-gray-700">
                                                    <td className="py-2 px-4">
                                                        <a
                                                            href={`https://solscan.io/account/${holder.owner}`}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="text-xs sm:text-sm font-bold underline underline-offset-4 hover:opacity-50 transition-opacity ease-in-out duration-500"
                                                        >
                                                            {getNameByAddress(holder.owner, tokenData.creator)}
                                                        </a>
                                                    </td>
                                                    <td className="py-2 px-4">
                                                        <p className="text-xs sm:text-sm font-bold">
                                                            {formatNumber(holder.amount, holder.decimals)}
                                                        </p>
                                                    </td>
                                                    <td className="py-2 px-4">
                                                        <p className="text-xs sm:text-sm font-bold">
                                                            {getLockedPR(tokenData.token.supply, holder.amount)}%
                                                        </p>
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan="3" className="py-4 text-center text-gray-500">
                                                    No top holders available
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}