import { RenderEventSubscriber } from "../interfaces/RenderEventSubscriber";
import { RenderContext } from "../interfaces/RenderContext";

export class RenderLoggerSubscriber implements RenderEventSubscriber {
  update(context: RenderContext): void {
    let message = `[Log] Rendered ${context.type}`;

    if (context.type === "Section") {
      message += ` ("${context.content}", level ${context.level})`;
    } else if (context.type === "Paragraph") {
      message += ` (${context.content.length} chars)`;
    } else if (context.type === "List") {
      message += ` (${context.items?.length || 0} items)`;
    }

    console.log(message);
  }
}
