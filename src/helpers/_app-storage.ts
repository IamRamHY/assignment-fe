export const appStorage = {
  getItem: (key: string) => {
    const stringifiedData = localStorage.getItem(`${key}`);
    if (!stringifiedData) return "";
    return JSON.parse(stringifiedData || "");
  },
  setItem: (key: string, data: any) => {
    if (!data) return;
    localStorage.setItem(key, JSON.stringify(data));
  },
  clear: () => {
    localStorage.clear();
  },
};
