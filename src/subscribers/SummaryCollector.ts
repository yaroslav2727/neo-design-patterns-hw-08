import { RenderEventSubscriber } from "../interfaces/RenderEventSubscriber";
import { RenderContext } from "../interfaces/RenderContext";

export class SummaryCollector implements RenderEventSubscriber {
  private sectionCount = 0;
  private paragraphCount = 0;
  private listCount = 0;

  update(context: RenderContext): void {
    switch (context.type) {
      case "Section":
        this.sectionCount += 1;
        break;
      case "Paragraph":
        this.paragraphCount += 1;
        break;
      case "List":
        this.listCount += 1;
        break;
    }
  }

  printSummary(): void {
    console.log(
      `[Summary] Rendered ${this.sectionCount} sections, ${this.paragraphCount} paragraphs, ${this.listCount} lists`
    );
  }
}
