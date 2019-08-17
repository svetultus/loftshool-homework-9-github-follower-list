export const getUserInfo = (apiKey, user) => {
  return fetch(
    `https://api.github.com/users/${user}?access_token=${apiKey}`
  ).then(response => {
    if (response.status !== 200) throw new Error('Ошибка сетевого запроса');
    return response.json();
  });
};
