const getChallengeState = () => {
  const today = new Date();
  // date is between 1 and 15.
  if (today.getDate() <= 15)
    return {
      isOpen: true,
      reviewTime: false,
      formLink: process.env.REACT_APP_CHALLENGE_LINK,
    };

  // date is between 16 and 31.
  return { isOpen: false };
};

export { getChallengeState };
