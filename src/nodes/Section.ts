import { DocNode } from "../interfaces/DocNode";
import { DocRenderer } from "../interfaces/DocRenderer";
import { RenderEventPublisher } from "../RenderEventPublisher";

export class Section implements DocNode {
  constructor(
    private title: string,
    private renderer: DocRenderer,
    private children: DocNode[] = [],
    private level: number = 1
  ) {}

  add(child: DocNode): void {
    this.children.push(child);
  }

  render(): string {
    const startTime = performance.now();
    const header = this.renderer.renderHeader(this.level, this.title);
    const childrenContent = this.children
      .map((child) => child.render())
      .join("");
    const content = header + childrenContent;
    const endTime = performance.now();

    RenderEventPublisher.notify({
      type: "Section",
      content: this.title,
      level: this.level,
      renderTime: endTime - startTime,
    });

    return content;
  }
}
