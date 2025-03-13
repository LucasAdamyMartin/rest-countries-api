export const slugify = (str : string) =>
    str
      .normalize("NFD") // Enlève les accents
      .replace(/[\u0300-\u036f]/g, "") // Supprime les caractères spéciaux
      .replace(/\s+/g, "-") // Remplace les espaces par des tirets
      .toLowerCase();
  