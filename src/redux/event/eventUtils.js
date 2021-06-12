const getEventState = () => {
  return {
    isOpen: false,
    formLink: process.env.REACT_APP_EVENT_LINK,
  };
};

export { getEventState };
