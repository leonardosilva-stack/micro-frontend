const API_URL = import.meta.env.VITE_API_URL;

export function USER_GET(username: string) {
  return {
    url: `${API_URL}/partners?search=${username}`,
    options: {
      method: "GET",
    },
  };
}
