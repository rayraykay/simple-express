
const doFetch = async () => {
    const result = await (await fetch(`${window.location.origin}/data`)).text();


    const resultElement = document.getElementById('result');
    resultElement.innerHTML = result;
};

doFetch();