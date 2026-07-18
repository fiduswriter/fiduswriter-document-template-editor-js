# AGENTS.md — @fiduswriter/document-template-editor

## Project overview

`@fiduswriter/document-template-editor` is a TypeScript library that implements
the Fidus Writer document template designer and editor. It provides a visual
template designer, template extraction from existing documents, adjustment of
documents to conform to templates, and template import/export.

- Package name: `@fiduswriter/document-template-editor`
- License: `AGPL-3.0`
- Repository: `https://codeberg.org/fiduswriter/fiduswriter-document-template-editor.git`
- Author: Johannes Wilm

## Scope

Code in this repository should be limited to:

- Template designer (`src/designer.ts`).
- Template extraction from documents (`src/extract_template.ts`).
- Document adjustment to templates (`src/fix_doc.ts`).
- Template import/export (`src/importer.ts`, `src/exporter.ts`).
- Template admin UI (`src/change_admin.ts`, `src/list_admin.ts`).
- Template help schema (`src/schema.ts`).
- Template utilities (`src/tools.ts`, `src/update.ts`).

Do **not** put in this repository:

- Generic UI primitives (those belong in `fwtoolkit`).
- Document model code (use `@fiduswriter/document`).
- Bibliography manager UI (use `@fiduswriter/bibliography-manager`).

## Technology stack

- **Language:** TypeScript 6.0+.
- **Module system:** ESM (`"type": "module"`).
- **Build tool:** `tsc` only; no bundler is used.
- **Test runner:** Jest with `ts-jest` and `--experimental-vm-modules`.

## Directory layout

```
.
├── src/                  # TypeScript source files
│   ├── index.ts          # Public barrel export
│   ├── designer.ts       # Visual template designer
│   ├── extract_template.ts
│   ├── fix_doc.ts
│   ├── exporter.ts
│   ├── importer.ts
│   ├── change_admin.ts
│   ├── list_admin.ts
│   ├── schema.ts
│   ├── tools.ts
│   ├── templates.ts
│   ├── types.ts
│   └── update.ts
├── dist/                 # Compiled JS, .d.ts and source maps (generated)
├── test/                 # Jest tests
├── package.json
├── tsconfig.json
├── jest.config.js
└── README.md
```

## Build and test commands

```bash
npm install          # Install dependencies
npm run build        # Compile TypeScript to dist/
npm run typecheck    # Check types without emitting
npm test             # Run test suite
npm run lint         # Lint with ESLint
npm run format:check # Check formatting with Prettier
```

## Consumers

- `fiduswriter/` (the main Fidus Writer Django app).
- `@fiduswriter/document` for the document model.
