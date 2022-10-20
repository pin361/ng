// Топ-100 слов
// Дан текст. Необходимо найти топ-100 слов
export const findTop100 = (text) => {
  const words = text.split(' ');
  const wordsCountMap = words.reduce((map, word) => {
      map[word] = (map[word] ?? 0) + 1;
      return map;
  }, {});

  return Object.keys(wordsCountMap)
      .sort((a, b) => wordsCountMap[b] - wordsCountMap[a])
      .slice(0, 100);
}
