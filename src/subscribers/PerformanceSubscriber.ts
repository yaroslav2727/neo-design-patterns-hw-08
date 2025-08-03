import { RenderEventSubscriber } from "../interfaces/RenderEventSubscriber";
import { RenderContext } from "../interfaces/RenderContext";

export class PerformanceSubscriber implements RenderEventSubscriber {
  private totalRenderTime = 0;

  update(context: RenderContext): void {
    if (context.renderTime) {
      this.totalRenderTime += context.renderTime;
    }
  }

  printPerformance(): void {
    console.log(`[Performance] Total render time: ${this.totalRenderTime}ms`);
  }
}
