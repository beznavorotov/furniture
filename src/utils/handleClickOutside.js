export const handleClickOutside = (event, ref) => {
  if (ref.current && !ref.current.contains(event.target)) {
    return true;
  }
};
