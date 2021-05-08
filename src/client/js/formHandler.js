
function handleSubmit(event) {
    event.preventDefault()
    let formText = document.getElementById('name').value
    console.log(formText)
    Client.checkForName(formText)
    
    async function post_Data() {
        const req = await fetch('http://localhost:8081/test', {
            method: "POST",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json;charset=UTF-8"
            },
            body: JSON.stringify({
                ul: document.getElementById('name').value
            })
        });
        try {
            const api_data = await req.json();
            (() => {
                document.getElementById('results').innerHTML = `
                    <div> <span>text: </span>  ${api_data.text}</div>
                    <div> <span>score_tag: </span>  ${api_data.score_tag}</div>
                    <div> <span>agreement: </span>  ${api_data.agreement}</div>
                    <div> <span>subjectivity: </span>  ${api_data.subjectivity}</div>
                    <div> <span>confidence: </span>  ${api_data.confidence}</div>
                    <div> <span>irony: </span>  ${api_data.irony}</div>
                `
            })();
        } catch (error) {
            console.log(error);
        }
    };
    post_Data();
    console.log("::: Form Submitted :::")
}

export { handleSubmit }