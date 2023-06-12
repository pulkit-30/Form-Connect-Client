const getFormPublicUrl = (token: string) => {
  return `http://localhost:3000/form/${token}/response`;
};
export default getFormPublicUrl;
