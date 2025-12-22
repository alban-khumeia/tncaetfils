export const slugify = (text: string) => {
    return text
        .toString()
        .toLowerCase()
        .normalize('NFD').replace(/[\u0300-\u036f]/g, '') // Enlève les accents
        .replace(/\s+/g, '-')     // Remplace les espaces par -
        .replace(/[^\w\-]+/g, '') // Enlève les caractères non alphanumériques
        .replace(/\-\-+/g, '-')   // Remplace les tirets multiples
        .replace(/^-+/, '')       // Coupe au début
        .replace(/-+$/, '');      // Coupe à la fin
}