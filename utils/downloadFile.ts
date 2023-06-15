// Helper function to download text
function download(filename: string, data: any) {
  const pom: any = document.createElement("a");
  pom.setAttribute(
    "href",
    `data:text/plain;charset=utf-8,${encodeURIComponent(data)}`
  );
  pom.setAttribute("download", filename);

  if (document.createEvent) {
    const event = document.createEvent("MouseEvents");
    event.initEvent("click", true, true);
    pom.dispatchEvent(event);
  } else {
    pom.click();
  }
}

export default download;
