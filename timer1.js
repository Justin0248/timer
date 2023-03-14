let arg = process.argv.slice(2);
for (let i = 0; i < process.argv.length; i++) {
    if (arg[i] > 0) {
setTimeout(() => {
    process.stdout.write('\x07');
},(arg[i] * 1000));
}
}
