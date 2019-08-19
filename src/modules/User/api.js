export const getUserInfo = (apiKey, user) => {
  return fetch(
    `https://api.github.com/users/${user}?access_token=${apiKey}`
  ).then(response => {
    if (response.status === 404)
      throw new Error('Информация о пользователе не найдена');
    if (response.status !== 200)
      throw new Error(`Ошибка ${response.status} сетевого запроса`);
    return response.json();
  });
};
