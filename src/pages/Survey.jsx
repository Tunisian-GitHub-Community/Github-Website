import React from 'react'

function Survey() {
    React.useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://embed.typeform.com/embed.js";
        script.type = 'text/javascript';
        script.async = true;
    }, [])
    return (
        <div className="Survey" id="survey">
            <iframe title="survey" id="typeform-full" width="100%" height="100%" frameBorder="0" allow="camera; microphone; autoplay; encrypted-media;" src="https://form.typeform.com/to/sVxFigO6?typeform-medium=embed-snippet"></iframe>
        </div>
    )
}

export default Survey
