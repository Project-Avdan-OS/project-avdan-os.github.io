// log only if it is dev environment
export default function log(...args) {
    if (process.env.NODE_ENV === 'development') {
        console.log(...args);
    }
}