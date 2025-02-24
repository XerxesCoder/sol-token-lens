'use client';

import { Card } from "@/components/ui/card";
import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary flex items-center justify-center p-6">
      <Card className="p-8 max-w-md w-full backdrop-blur-sm bg-card/50">
        <div className="flex flex-col items-center space-y-6">
          <Loader2 className="w-16 h-16 animate-spin  " />

          <div className="space-y-2 text-center">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent animate-pulse">
              Analyzing Token
            </h2>
            <p className="text-muted-foreground">
              Fetching  token information...
            </p>
          </div>


        </div>
      </Card>
    </div>
  );
}