import { useEffect, useState } from "react";
import { Client, ReconnectionTimeMode, TickerStrategy } from "@stomp/stompjs";
import { apiResponseBroadcastSchema } from "../schemas/apiresponse";
import type { ApiResponseBroadcast } from "../types/apiresponse";

export function useAircraftWebSocket() {
  const [aircraft, setAircraft] = useState<ApiResponseBroadcast>([]);

  useEffect(() => {
    let disposed = false;

    const client = new Client({
      brokerURL: import.meta.env.VITE_BROKER_URL,
      connectionTimeout: 30_000,
      reconnectDelay: 2_000,
      reconnectTimeMode: ReconnectionTimeMode.EXPONENTIAL,
      maxReconnectDelay: 30_000,
      heartbeatStrategy: TickerStrategy.Worker,
      discardWebsocketOnCommFailure: true,
      onConnect: () => {
        client.subscribe("/topic/flights", (message) => {
          try {
            const aircraft = apiResponseBroadcastSchema.parse(
              JSON.parse(message.body),
            );
            if (!disposed) setAircraft(aircraft);
          } catch (error) {
            console.error("Invalid aircraft broadcast:", message.body, error);
          }
        });
      },
      onStompError: (frame) => console.error("STOMP error:", frame),
      onWebSocketError: (event) => console.error("WebSocket error:", event),
    });

    client.activate();

    return () => {
      disposed = true;
      void client.deactivate({ force: true });
    };
  }, []);

  return aircraft;
}
