## Formatting Shell Scripts

Format all shell scripts (including those without extensions) recursively:
```bash
docker run --rm -v "$PWD:/scripts" ghcr.io/montehurd/mediawiki-docker-images/lint shell
```

- Finds all executable bash and POSIX shell scripts (with or without extensions)
- Formats them with `shfmt -i 2 -w` (2-space indentation, write in-place)
- Excludes hidden directories (those starting with `.`)
- Files are modified in-place

## Formatting JavaScript

Format and lint all JavaScript files recursively:
```bash
docker run --rm -v "$PWD:/scripts" ghcr.io/montehurd/mediawiki-docker-images/lint javascript
```

- Finds all `.js`, `.mjs`, and `.cjs` files
- Applies ESLint with auto-fix enabled
- Uses 2-space indentation
- Enforces single quotes, semicolons, and consistent spacing
- Checks for unused variables and undefined references
- Excludes `node_modules` and hidden directories
- Files are modified in-place