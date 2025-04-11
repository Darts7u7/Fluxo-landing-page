declare module 'canvas-confetti' {
  interface ConfettiOptions {
    particleCount?: number;
    angle?: number;
    spread?: number;
    startVelocity?: number;
    decay?: number;
    gravity?: number;
    drift?: number;
    ticks?: number;
    origin?: { x: number; y: number };
    colors?: string[];
    shapes?: string[];
    scalar?: number;
    zIndex?: number;
    disableForReducedMotion?: boolean;
    useWorker?: boolean;
    resize?: boolean;
  }

  type ConfettiCallback = () => void;

  interface ConfettiFunction {
    (options?: ConfettiOptions): Promise<ConfettiCallback> | null;
    reset: () => void;
    create: (canvas: HTMLCanvasElement, options?: { resize?: boolean; useWorker?: boolean }) => ConfettiFunction;
  }

  const confetti: ConfettiFunction;
  export default confetti;
} 