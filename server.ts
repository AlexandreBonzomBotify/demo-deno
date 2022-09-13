import { serve } from "./dependency.ts";
console.log(Deno.env.get("PORT"));
const port = Number(Deno.env.get("PORT") ?? "8000");

const listener = Deno.listen({ port });
console.log(port);
serve(listener, () => {
  const now = new Date().toISOString();
  return new Response(
    `
    <html>
      <main>
        <img src="https://deno.land/logo.svg" style="height: 48px;" alt="bun logo" />
        <h1>Basic example of Deno</h1>
        <div>Rendered at: ${now}</div>
      </main>
    </html>`,
    {
      headers: {
        "Content-Type": "text/html",
      },
    }
  );
});
