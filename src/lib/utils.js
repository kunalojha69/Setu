export const formatMessageTime = (time) => {
  return new Date(time).toLocaleTimeString('en-Us', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: 'true',
  });
};
