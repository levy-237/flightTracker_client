import { useEffect, useState } from "react";
import { Client } from "@stomp/stompjs";
import { apiResponseBroadcastSchema } from "../schemas/apiresponse";
import type { ApiResponseBroadcast } from "../types/apiresponse";

export function useAircraftWebSocket() {
  const [aircraft, setAircraft] = useState<ApiResponseBroadcast>([]);

  useEffect(() => {
    const client = new Client({
      brokerURL: import.meta.env.VITE_BROKER_URL,
      onConnect: () => {
        client.subscribe("/topic/flights", (message) => {
          try {
            const aircraft = apiResponseBroadcastSchema.parse(
              JSON.parse(message.body),
            );
            console.log(aircraft);
            setAircraft(aircraft);
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
      void client.deactivate();
    };
  }, []);

  return aircraft;
}
