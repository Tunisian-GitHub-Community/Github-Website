const getChallengeState = () => {
  const today = new Date();
  // date is between 1 and 15.
  if (today.getDate() <= 15)
    return {
      isOpen: true,
      formLink: process.env.REACT_APP_CHALLENGE_LINK,
    };
  return { isOpen: false };
};

export { getChallengeState };
