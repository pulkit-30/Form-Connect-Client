const getFormPublicUrl = (token: string) => {
  return `https://form-connect-client.vercel.app/form/${token}/response`;
};
export default getFormPublicUrl;
