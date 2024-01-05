import { defineConfig } from 'vite';
import { execSync } from 'child_process';

export default defineConfig({
    logLevel: 'info',
    define: {
      __COMMIT_HASH__: `'${execSync('git rev-parse --short HEAD').toString().trim()}'`,
      __BUILD_DATE__: `'${new Date().toISOString()}'`
    },
});
