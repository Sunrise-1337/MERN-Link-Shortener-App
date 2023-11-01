export const setCookie = (name: string, value: string, hoursToExpire: number): void => {
  const date = new Date();
  date.setTime(date.getTime() + hoursToExpire * 60 * 60 * 1000);

  document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
};


export const getCookie = (cookieName: string): string => {
  const name = cookieName + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(";");

  const cookie = ca.find((c) => c.trim().startsWith(name));
  if (cookie) {
    return cookie.substring(name.length).slice(1);
  }

  return "";
};

export const deleteCookie = (name: string): void => {
  document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
};
