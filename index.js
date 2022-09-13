import moment from 'moment';

export default {
  port: 3000,
  fetch(req) {
    const url = new URL(req.url);
    const now = moment().format('YYYY-MM-DD HH:mm:ss');
    return new Response(
      `
      <html>
        <main>
          <img src="https://bun.sh/logo@2x.png" style="height: 48px;" alt="bun logo" />
          <h1>Basic example of Bun</h1>
          <div>Rendered at: ${now}</div>
        </main>
      </html>`,
      {
        headers: {
          "Content-Type": "text/html",
        },
      }
    );
  },
  }
};
