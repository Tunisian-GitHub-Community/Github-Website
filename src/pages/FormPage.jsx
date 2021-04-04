import React from 'react'

function FormPage() {
    React.useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://embed.typeform.com/embed.js";
        script.type = 'text/javascript';
        script.async = true;
    }, [])
    return (
        <div className="Survey" id="survey">
            <iframe title='challenge' id="typeform-full" width="100%" height="100%" frameborder="0" allow="camera; microphone; autoplay; encrypted-media;" src="https://form.typeform.com/to/l8JESrOz?typeform-medium=embed-snippet"></iframe>
        </div>
    )
}

export default FormPage
