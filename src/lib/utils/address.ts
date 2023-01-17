export const suppressAddress = (address: string) => {
  return address
    ? `${address.substring(0, 6)}***${address.substring(address.length - 4)}`
    : "";
};