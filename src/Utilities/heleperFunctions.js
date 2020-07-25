export const dayDate = (time, options={}) => (
    new Date(time * 1000).toLocaleDateString('en', options)
);