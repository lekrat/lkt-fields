import vue from '@vitejs/plugin-vue';
import {resolve} from 'path';

const src = resolve(__dirname, 'src');
const outDir = resolve(__dirname, 'dist');
const test = resolve(__dirname, 'test');
const snapshots = resolve(__dirname, 'snapshots');

export default {
    plugins: [vue()],
    resolve: {
        alias: {'@': src, '@test': test}
    },
    build: {
        lib: {
            entry: `${src}/index.ts`,
            name: 'LktFields',
            fileName: (format) => `lkt-fields.${format}.js`
        },
        outDir,
        minify: true,
        rollupOptions: {
            external: [
                'vue',
                '@vuepic/vue-datepicker',
                'suneditor',
                'katex',
                'lkt-http-client',
                'lkt-tools',
                'lkt-string-tools',
                'lkt-vue-tools',
                'lkt-control-tools',
                'lkt-events'
            ],
            output: {
                globals: {
                    vue: 'Vue',
                    '@vuepic/vue-datepicker': 'Datepicker',
                    'suneditor': 'suneditor',
                    'katex': 'katex',
                    'lkt-tools': 'LktTools',
                    'lkt-http-client': 'LktHTTPClient',
                    'lkt-string-tools': 'LktStringTools',
                    'lkt-vue-tools': 'LktVueTools',
                    'lkt-events': 'LktEvents',
                },
                sourcemapExcludeSources: true
            }
        }
    },
    test: {
        coverage: {
            reporter: ['text', 'lcov']
        },
        resolveSnapshotPath: (testPath, snapExtension) => {
            const path = testPath.split('/').splice(-2);
            return `${snapshots}/${path[0]}/${path[1]}${snapExtension}`;
        }
    }
};