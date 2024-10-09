import { createTextureWithData } from "@std/webgpu";

const adapter = await navigator.gpu.requestAdapter();
const device = await adapter?.requestDevice()!;

createTextureWithData(device, {
  format: "bgra8unorm-srgb",
  size: {
    width: 3,
    height: 2,
  },
  usage: GPUTextureUsage.COPY_SRC,
}, new Uint8Array([1, 1, 1, 1, 1, 1, 1]));

