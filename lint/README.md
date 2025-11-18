# Lint Auto-Fixers

## Shell Scripts

Lint all shell scripts (including those without extensions) recursively:
```bash
docker run --rm -v "$PWD:/scripts" ghcr.io/montehurd/mediawiki-docker-images/lint shell-fix
```

- Finds all executable bash and POSIX shell scripts (with or without extensions)
- Formats them with `shfmt -i 2 -w` (2-space indentation, write in-place)
- Excludes hidden directories (those starting with `.`)
- Files are modified in-place

## JavaScript / Vue

Lint all JavaScript and Vue files recursively:
```bash
docker run --rm -v "$PWD:/scripts" ghcr.io/montehurd/mediawiki-docker-images/lint eslint-fix
```

- Finds all `.js`, `.mjs`, `.cjs` and `.vue` files
- Applies ESLint with auto-fix enabled
- Uses 2-space indentation
- Enforces single quotes, semicolons, and consistent spacing
- Checks for unused variables and undefined references
- Excludes `node_modules` and hidden directories
- Files are modified in-place