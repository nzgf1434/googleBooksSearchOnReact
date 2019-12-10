const mergeState = (oldObject, updatedValues) => {
  return {
    ...oldObject,
    ...updatedValues
  };
};

export default mergeState;
