document.addEventListener("DOMContentLoaded", () => {
    const submitButton = document.getElementById('submitButton');
    const output = document.getElementById('output');
    submitButton.addEventListener('click', getResponse);
});

async function getResponse() {
    try {
        const response = await fetch('https://backendservertrial-052e435048ae.herokuapp.com/');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const string_response = await response.text();
        console.log(string_response);
        output.textContent = string_response;
    } catch (error) {
        console.error('Error:', error);
    }
}