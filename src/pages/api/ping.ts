import type { APIRoute } from 'astro';

export const get: APIRoute = () => {
  return new Response(JSON.stringify({ pong: true }), {
    headers: { 'Content-Type': 'application/json' },
  });
};
