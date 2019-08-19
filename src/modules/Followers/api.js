export const getFollowersInfo = (apiKey, user) =>
  fetch(
    `https://api.github.com/users/${user}/followers?pages=1&per_page=100?access_token=${apiKey}`
  ).then(response => {
    if (response.status === 404)
      throw new Error('Информация о подписчиках не найдена');
    if (response.status !== 200)
      throw new Error(`Ошибка ${response.status} сетевого запроса`);
    return response.json();
  });
