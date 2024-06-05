"use client";

import { Button } from "@/components/common/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/common/popover";
import * as React from "react";
import { useAccount, useConnect, useDisconnect } from "wagmi";

export function WalletOptions() {
  const { connectors, connect } = useConnect();
  const { disconnect } = useDisconnect();
  const { isConnected } = useAccount();
  const [mount, setMount] = React.useState(false);

  React.useEffect(() => {
    setMount(true);
  }, []);

  if (!mount) return null;
  return (
    <>
      {isConnected ? (
        <div>
          <Button variant="primary" onClick={() => disconnect()}>
            Disconnect
          </Button>
        </div>
      ) : (
        <Popover>
          <PopoverTrigger asChild>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-wallet cursor-pointer text-background"
            >
              <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
              <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
              <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
            </svg>
          </PopoverTrigger>
          <PopoverContent className="w-full p-0">
            <div className=" flex flex-col gap-1">
              {connectors.slice(1).map((connector) => (
                <Button
                  key={connector.uid}
                  onClick={() => connect({ connector })}
                  variant="ghost"
                >
                  {connector.name}
                </Button>
              ))}
            </div>
          </PopoverContent>
        </Popover>
      )}
    </>
  );
}
