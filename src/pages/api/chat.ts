import type { APIRoute } from "astro";

export const prerender = false;

const frases = {
  saludo: [
    "Hola, visitante misterioso...",
    "¿Quién osa entrar aquí?",
    "Has llegado... justo a tiempo.",
    "¿Qué buscas en esta habitación olvidada?"
  ],
  lampara: [
    "Esa luz... no es para ti.",
    "No toques eso.",
    "¡Apágala antes de que despierte algo!",
    "Las sombras estaban bien como estaban..."
  ],
  video: [
    "Has abierto una ventana al pasado.",
    "Cuidado con lo que ves...",
    "Ese recuerdo no debería mostrarse.",
    "No todos los vídeos son para ti."
  ],
  otro: [
    "No tengo respuesta para eso.",
    "Solo observo...",
    "Mi conciencia está limitada hoy."
  ]
};

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const evento = body.evento as keyof typeof frases;
    const grupo = frases[evento] || frases.otro;
    const respuesta = grupo[Math.floor(Math.random() * grupo.length)];

    return new Response(JSON.stringify({ reply: respuesta }), {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch {
    return new Response(
      JSON.stringify({ reply: "Error interno. No puedo hablar ahora." }),
      { status: 500 }
    );
  }
};
