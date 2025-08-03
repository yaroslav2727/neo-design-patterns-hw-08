import { BaseRenderer } from "./BaseRenderer";

export class MarkdownRenderer extends BaseRenderer {
  renderHeader(level: number, text: string): string {
    const hashes = "#".repeat(level);
    return `${hashes} ${text}\n\n`;
  }

  renderParagraph(text: string): string {
    return `${text}\n\n`;
  }

  renderList(items: string[]): string {
    const listItems = items.map((item) => `- ${item}`).join("\n");
    return `${listItems}\n\n`;
  }
}
