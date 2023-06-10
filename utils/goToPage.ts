import Route from "next/router";

const goToPage = (path: string) => {
  Route.push(path);
};

export default goToPage;
