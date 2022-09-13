FROM jarredsumner/bun:edge
WORKDIR /app
COPY package.json package.json
RUN bun install
COPY . .
EXPOSE 3000
ENTRYPOINT ["bun", "index.js"]
