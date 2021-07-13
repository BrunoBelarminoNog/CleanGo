const limitServiceCards = (): number => {
  const width: number = window.innerWidth;

  if (width <= 425) {
    return 4;
  }
  if (width >= 768) {
    return 9;
  }
  if (width >= 1024) {
    return 12;
  }
  if (width >= 1440) {
    return 18;
  }
  if (width >= 1920) {
    return 27;
  }
  return 6;
};

export default limitServiceCards;
