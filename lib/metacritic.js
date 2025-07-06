export async function getLatestGames() {
  const LATEST_GAMES =
    "https://backend.metacritic.com/finder/metacritic/web?apiKey=1MOZgmNFxvmljaQR1X9KAij9Mo4xAY3u&componentName=games-carousel&componentDisplayName=Games&componentType=ProductList&sortBy=-metaScore&metaScoreMin=1&offset=0&limit=20&mcoTypeId=13";

  const rawData = await fetch(LATEST_GAMES);
  const json = await rawData.json();

  const {
    data: { items },
  } = json;

  return items.map((item) => {
    const { description, slug, releaseDate, image, criticScoreSummary, title } =
      item;
    const { score } = criticScoreSummary;

    // crea la imagen
    const { bucketType, bucketPath } = image;
    const img = `https://www.metacritic.com/a/img/${bucketType}${bucketPath}`;

    return {
      description,
      releaseDate,
      score,
      slug,
      title,
      image: img,
    };
  });
}

export async function getGameDetails(slug) {
  const GAME_DETAILS = `https://backend.metacritic.com/composer/metacritic/pages/games/${slug}/web?&apiKey=1MOZgmNFxvmljaQR1X9KAij9Mo4xAY3u`;
  const rawData = await fetch(GAME_DETAILS);
  const json = await rawData.json();

  const { title, description, images, criticScoreSummary } =
    json?.components?.[0]?.data?.item || {};

  const cardImage = images.find((image) => image.typeName === "cardImage");
  const { bucketType, bucketPath } = cardImage;
  const img = `https://www.metacritic.com/a/img/${bucketType}${bucketPath}`;

  return {
    img,
    title,
    slug,
    description,
    score: criticScoreSummary.score,
    reviews: criticScoreSummary.reviewCount,
  };
}
