export const getColor = (colorSlip) => {
  return (opacity) => {
    return `${opacity ? `${colorSlip}${opacity * 100}` : `${colorSlip}`}`;
  };
};
