import path from 'node:path';
import { defineConfig } from 'tsup';

export default defineConfig((options) => {
  return {
    platform: 'node',
    entry: ['src/**/*.ts', '!src/**/*.spec.ts'],
    splitting: false,
    bundle: true,
    sourcemap: !!options.watch,
    clean: true,
    treeshake: true,
    minify: !options.watch,
    dts: true,
    format: ['esm', 'cjs'],
    outDir: 'dist',
    tsconfig: path.resolve(__dirname, './tsconfig.json'),
    external: ['viem', '@wagmi/core'],
  };
});
