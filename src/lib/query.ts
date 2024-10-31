const API_GITHUB_TOKEN = import.meta.env.API_GITHUB_TOKEN;

const GITHUB_API_ENDPOINT = "https://api.github.com";

export const query = async(path: string) => {
  const url = `${GITHUB_API_ENDPOINT}${path}`;
  return fetch(url, {
    headers: {
      Authorization: `token ${API_GITHUB_TOKEN}`,
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .catch((error) => console.error("Error:", error));
};

