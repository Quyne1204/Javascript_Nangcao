
console.log(`Bai tap 2`);


document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
    const text = document.querySelector('textarea').value;
    const rows = text.split('\n');

    for (const [i,row] of rows.entries()) {
        const [First, Second] =  row.toLowerCase().trim().split('_');
        const output = `${First}${Second.replace(
            Second[0],
            Second[0].toUpperCase()
        )}`
        console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
    }
});
