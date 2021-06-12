const getEventState = () => {
  return {
    isOpen: true,
    formLink: process.env.REACT_APP_EVENT_LINK,
  };
};

export { getEventState };
