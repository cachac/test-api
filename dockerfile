#----------------BUILD-----------------
FROM oven/bun:1.0.23-slim as base
WORKDIR /app

COPY ./src ./src
COPY package*.json ./
COPY jsconfig.json ./

RUN bun install

#----------------RELEASE-----------------
FROM oven/bun:1.0.23-slim as release
COPY --from=base /app/ ./

ARG NODE_ENV
ENV NODE_ENV=${NODE_ENV}

ARG NODE_PORT
ENV NODE_PORT=${NODE_PORT}

EXPOSE 3001

CMD ["bun", "start" ]


