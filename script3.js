const quotes = [
  "Le succès n’est pas la clé du bonheur. Le bonheur est la clé du succès.",
  "Fais de ta vie un rêve, et d’un rêve une réalité. — Antoine de Saint-Exupéry",
  "N’attends pas le moment parfait, saisis le moment et rends-le parfait.",
  "La meilleure façon de prédire l’avenir est de le créer.",
  "Crois en toi et tout deviendra possible."
];

window.onload = () => {
  const quoteElement = document.getElementById("quote");
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteElement.textContent = quotes[randomIndex];
};
