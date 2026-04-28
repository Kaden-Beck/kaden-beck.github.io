<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

<!-- BEGIN:other-agent-rules -->

# Other agent skill files are located in `agents/`

<!-- END:other-agent-rules -->

<!-- BEGIN:mcp-servers -->

## MCP Servers

The following MCP servers are available via `.vscode/mcp.json`. Claude Code launches them automatically — do not ask the user to start them manually.

- **mui-mcp** (`@mui/mcp@latest`) — MUI component docs and API reference. Use before writing or modifying any MUI component.
- **next-devtools** (`next-devtools-mcp@latest`) — Next.js dev tools integration. Use when diagnosing build or routing issues.
- **ESLint** (`@eslint/mcp@latest`) — Lint checking via MCP. Use to verify files are lint-clean before reporting a task done.
- **prettier** (`@prettier/mcp`) — Formatting via MCP. Use to format files instead of running `prettier` in the shell.

<!-- END:mcp-servers -->
