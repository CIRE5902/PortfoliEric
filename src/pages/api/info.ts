import type { APIRoute } from "astro";

const START_DATE = new Date("2025-08-01T09:00:00Z");

export const GET: APIRoute = async () => {
  const now = new Date();
  const diffMs = now.getTime() - START_DATE.getTime();

  const totalMinutes = Math.floor(diffMs / 60000);
  const days = Math.floor(totalMinutes / 1440);
  const hours = Math.floor((totalMinutes % 1440) / 60);
  const minutes = totalMinutes % 60;

  const uptime = `${days}d ${hours}h ${minutes}m`;

  return new Response(
    JSON.stringify({
      since: START_DATE.toISOString(),
      uptime
    }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" }
    }
  );
};
