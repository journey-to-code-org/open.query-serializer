# open.query-serializer

Dependency-free object-to-query-string serialization and query-string parsing built on URLSearchParams.

## Install

```bash
npm install @journey-to-code/open-query-serializer
```

## Usage

```js
stringifyQuery({ tag: ["js", "web"], page: 2 });
// "tag=js&tag=web&page=2"
parseQuery("?tag=js&tag=web");
```

## Runtime

- Node.js 18+
- modern ESM-capable tooling
- zero runtime dependencies

## Development

```bash
npm test
```

## Scope

This package intentionally focuses on one small, reusable responsibility.
Application-specific behavior belongs in higher-level packages.

## License

MIT
