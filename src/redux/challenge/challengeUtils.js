require('dotenv').config()


const getChallengeState = () => {
  const today = new Date();
  // date is between 1 and 15.
  if (today.getDate() <= 15) return { isOpen: true, reviewTime: false, formLink: process.env.CHALLENGE_LINK };

  // date is more 25.
  if ((today.getDate() >= 25) && (today.getDate() <= 31)) return { isOpen: false, reviewTime: true, formLink: process.env.REVIEW_LINK };

  // date is between 16 and 24.
  return { isOpen: false, reviewTime: false };
};

export { getChallengeState };
