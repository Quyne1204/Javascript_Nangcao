console.log(`Bai tap 4`);

(function () {
    const header = document.querySelector('h1');
    header.style.color = 'red';
    document.body.append(document.createElement('button'));
    document.querySelector('body').addEventListener('click', function () {
        header.style.color = 'blue';
    });
});