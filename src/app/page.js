'use client';

import { useState } from 'react';
import { SearchIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
export default function Home() {

  const [address, setAddress] = useState('');
  const router = useRouter();

  
  function checkToken() {
    if(address.length === 0) {
      toast.warning('Please enter an address');
      return;
    }
    if(address.length < 44) {
      toast.warning('Please enter a valid address');
      return;
    }
    router.push('/token/' + address);
  }


  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary ">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="text-center space-y-6 mb-12">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            Solana Token Lens
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your crystal-clear view into Solana tokens. Get comprehensive token information
            and reliability scores with our advanced analysis tools.
          </p>
        </div>

        <Card className="p-6 md:p-8 backdrop-blur-sm bg-card/50">
          <div className="space-y-6">
            <div className="space-y-2">
              <label
                htmlFor="token-address"
                className="text-sm font-medium text-foreground"
              >
                Token Address
              </label>
              <div className="flex sm:flex-row flex-col gap-2">
                <Input
                  id="token-address"
                  name="address"
                  placeholder="Enter Solana token address..."
                  value={address}
                  maxLength={44}
                  onChange={(e) => setAddress(e.target.value)}
                  className="flex-1"
                />
                <Button onClick={() => checkToken()} className="gap-2">
                  <SearchIcon className="w-4 h-4" />
                  Analyze
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="p-4 rounded-lg bg-card">
              <h3 className="font-semibold mb-2">Deep Analysis</h3>
              <p className="text-sm text-muted-foreground">
                Comprehensive token metrics and market data analysis
              </p>
            </div>
            <div className="p-4 rounded-lg bg-card">
              <h3 className="font-semibold mb-2">Risk Score</h3>
              <p className="text-sm text-muted-foreground">
                Advanced risk assessment and reliability scoring
              </p>
            </div>
            <div className="p-4 rounded-lg bg-card">
              <h3 className="font-semibold mb-2">Real-time Data</h3>
              <p className="text-sm text-muted-foreground">
                Up-to-the-minute token information and metrics
              </p>
            </div>
          </div>
        </Card>
      </div>
    </main>
  );
}
