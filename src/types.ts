import type { FidusNode, JSONValue } from "@fiduswriter/document";

/** Map of CSL citation style identifiers to human-readable titles. */
export type CitationStyleMap = Record<string, string>;

/** A single contributor ID type with an optional validation regex. */
export interface ContributorIdType {
  label: string;
  regex?: string;
}

/** Code-block category configuration stored on a template. */
export interface CodeCategory {
  counter: number;
  enabled: boolean;
}

export type CodeCategoryMap = Record<string, CodeCategory>;

/** Bibliography header translations keyed by language code. */
export type BibliographyHeaderMap = Record<string, string>;

/** Base attributes shared by every configurable document part. */
export interface PartAttrs {
  id: string;
  title?: string;
  locking?: "false" | "fixed" | "start" | "header";
  optional?: "false" | "shown" | "hidden";
  hidden?: boolean;
  help?: FidusNode[];
  initial?: FidusNode[];
  metadata?: string | false;
  deleted?: boolean;
  elements?: string[];
  marks?: string[];
  language?: string | false;
  item_title?: string;
}

/** A document part node as stored in a template's `content` array. */
export interface DocPart {
  type: string;
  attrs?: PartAttrs;
  content?: FidusNode[];
}

/** Template-level settings stored on the root `doc` node. */
export interface TemplateAttrs {
  import_id: string;
  template: string;
  footnote_elements: string[];
  footnote_marks: string[];
  language: string | false;
  languages: string[];
  citationstyle: string | false;
  citationstyles: string[];
  papersizes: string[];
  papersize?: string;
  code_languages: string[];
  code_categories: CodeCategoryMap;
  bibliography_header: BibliographyHeaderMap;
  id_types: ContributorIdType[];
  documentstyle?: string | false;
}

/** Full JSON value of a document template as used by the designer. */
export interface DocumentTemplateValue {
  type: "doc";
  attrs: TemplateAttrs;
  content: FidusNode[];
}

/** A Django-backed document style referenced by a template. */
export interface DocumentStyle {
  pk: number;
  fields: {
    title: string;
    slug: string;
    contents: string;
    documentstylefile_set: Array<[string, string]>;
  };
}

/** A Django-backed export template referenced by a document template. */
export interface ExportTemplate {
  pk: number;
  fields: {
    title: string;
    file_type: string;
    template_file: string;
  };
}

/** Shape of the result returned by {@link DocumentTemplateDesigner.getCurrentValue}. */
export interface TemplateCurrentValue {
  valid: boolean;
  title: string;
  value: FidusNode;
  errors: Record<string, string>;
  import_id: string;
}

/** A file embedded in a FIDUSTEMPLATE zip as binary content. */
export interface BinaryTemplateFile {
  filename: string;
  content: Blob;
}

/** A text file embedded in a FIDUSTEMPLATE zip. */
export interface TextTemplateFile {
  filename: string;
  contents: string;
}

/** An HTTP-referenced file embedded in a FIDUSTEMPLATE zip. */
export interface HttpTemplateFile {
  filename: string;
  url: string;
}

/** Backend response shape for a successfully imported template. */
export interface ImportedTemplate {
  id: number;
  title: string;
  added: number;
  updated: number;
}

/** Result of updating a template file to the current document version. */
export interface TemplateDefinition {
  title: string;
  content: DocumentTemplateValue;
  exportTemplates: ExportTemplate[];
  documentStyles: DocumentStyle[];
}

/** Options accepted by the {@link DocumentTemplateListAdmin} constructor. */
export type ListAdminSettings = Record<string, JSONValue>;
