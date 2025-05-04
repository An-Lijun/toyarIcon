export default function (compName) {
        defineAsyncComponent(() => import('./index.js').then((module) => module[compName]));
    }