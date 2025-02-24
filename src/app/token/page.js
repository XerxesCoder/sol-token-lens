'use client';
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Token() {
    const router = useRouter();
    return (
        <main className="min-h-screen bg-gradient-to-b from-background to-secondary  flex flex-col justify-center items-center space-y-6 max-w-7xl w-full mx-auto p-6">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Solana Token Lens
            </h1>
            <Link
                href={'/'}
                className="w-fit flex justify-center items-center hover:border-gray-700 border-slate-500 border text-lg hover:bg-gray-300 p-3 transition-all ease-in-out rounded-xl"

            >
                <Home className="w-6 h-6 mr-2" />
                Back to Home
            </Link>
        </main>
    );
}