## Formatting Shell Scripts

Format all shell scripts (including those without extensions) recursively:
```bash
docker run --rm -v "$PWD:/scripts" ghcr.io/montehurd/mediawiki-docker-images/lint lint-shell
```

- Finds all executable bash and POSIX shell scripts (with or without extensions)
- Formats them with `shfmt -i 2 -w` (2-space indentation, write in-place)
- Excludes hidden directories (those starting with `.`)
- The formatter uses 2-space indentation by default
- Files are modified in-place
- Hidden directories (like `.git`) are automatically excluded