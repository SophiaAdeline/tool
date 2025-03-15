document.getElementById('convertButton').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;
    const outputHtml = convertToHtml(inputText);
    document.getElementById('outputHtml').innerHTML = outputHtml;
});

function convertToHtml(text) {
    // Mengganti #, ##, ###, dan ** dengan tag HTML yang sesuai
    let html = text
        .replace(/^(#{1})\s*(.+)$/gm, '<h1>$2</h1>') // H1
        .replace(/^(#{2})\s*(.+)$/gm, '<h2 style="text-align:left;">$2</h2>') // H2
        .replace(/^(#{3})\s*(.+)$/gm, '<h3 style="text-align:left;">$2</h3>') // H3
        .replace(/\*\*(.+?)\*\*/g, '<b>$1</b>') // Bold
        .replace(/^\s*[-\d]+\.\s*(.+)$/gm, '<details><summary>$&</summary>$1</details>') // Toggle
        .replace(/^(?!<h[1-3]>|<b>|<details>)(.+)$/gm, '<p>$1</p>'); // Paragraf

    return html.trim();
}
