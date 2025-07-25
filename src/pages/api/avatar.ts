import type { APIRoute } from "astro";
import OpenAI from "openai";

export const prerender = false;

const openai = new OpenAI({
  apiKey: import.meta.env.OPENAI_API_KEY,
});

export const POST: APIRoute = async ({ request }) => {
  try {
    const { prompt } = await request.json();

    if (!prompt) {
      return new Response(JSON.stringify({ error: "Prompt vacío." }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const chat = await openai.chat.completions.create({
      model: "gpt-3.5-turbo", // cambia a "gpt-4" si tienes acceso
      messages: [
        {
          role: "system",
          content:
            "Eres un personaje IA simpático y misterioso que responde con frases breves.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.8,
      max_tokens: 100,
    });

    const reply = chat.choices[0].message.content?.trim() ?? "Sin respuesta.";

    return new Response(JSON.stringify({ reply }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Error en /api/chat:", err);
    return new Response(JSON.stringify({ error: "Error interno del servidor." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
