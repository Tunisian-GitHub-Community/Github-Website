const getChallengeState = () => {
    const today = new Date();
    // date is between 1 and 15. 
    if (today.getDate() <= 15) return { isOpen: true, reviewTime: false, formLink: "https://form.typeform.com/to/l8JESrOz?typeform-medium=embed-snippet" }

    // date is between 25. 
    if (today.getDate() >= 25) return { isOpen: false, reviewTime: true, formLink: "https://form.typeform.com/to/sVxFigO6?typeform-medium=embed-snippet" }

    // date is between 26 and 31. 
    else return { isOpen: false, reviewTime: false }
}

export { getChallengeState };