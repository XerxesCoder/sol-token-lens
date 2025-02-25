import TokenSection from "@/components/TokenSection";

export default async function TokenPage({ params }) {
    const { address } = await params;
    const tokenInfo = await fetch(`https://api.rugcheck.xyz/v1/tokens/${address}/report`);
    const tokenData = await tokenInfo.json();
    const tokenPriceData = await fetch(`https://data.fluxbeam.xyz/tokens/${address}/price`);
    const tokenPrice = await tokenPriceData.json();


    return (
        <main className="min-h-screen bg-gradient-to-b from-background to-secondary  p-6  w-full max-w-7xl mx-auto ">
            <TokenSection tokenData={tokenData} tokenPrice={tokenPrice} />
        </main>
    );
}