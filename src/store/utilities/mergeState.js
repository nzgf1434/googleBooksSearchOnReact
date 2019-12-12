// todo: review это что за наркомания? полифил для Object.assign

const mergeState = (oldObject, updatedValues) => {
  return {
    ...oldObject,
    ...updatedValues
  };
};

export default mergeState;
