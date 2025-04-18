

// === Variables globales ===
let premierClic = false;     // Indicateur pour le premier clic
let premierIndex = null;     // Index de la première carte cliquée

// === Liste des images pour les cartes ===
const images = [
    'images/image1.jpg', 'images/image1.jpg',
    'images/image2.jpg', 'images/image2.jpg',
    'images/image3.jpg', 'images/image3.jpg',
    'images/image4.jpg', 'images/image4.jpg',
    'images/image5.jpg', 'images/image5.jpg',
    'images/image6.jpg', 'images/image6.jpg',
    'images/image7.jpg', 'images/image7.jpg',
    'images/image8.jpg', 'images/image8.jpg'
];

// Mélange aléatoire des images
let cartes = [...images].sort(() => 0.5 - Math.random());

// === Création des cartes et gestion des clics ===
cartes.forEach((image, index) => {
    // Création de la div représentant la carte
    const div = document.createElement('div');
    div.classList.add('carte', 'cachée'); // Carte initialement cachée
    div.id = `carte-${index}`;            // ID unique pour chaque carte
    div.dataset.image = image;            // Stocke l'image de la carte dans un attribut personnalisé

    // Gestion du clic sur la carte
    div.addEventListener('click', () => {
        // Ignore le clic si la carte est déjà découverte
        if (!div.classList.contains('cachée') || index === premierIndex) return;

        

        // Affiche l'image de la carte
        div.classList.remove('cachée');
        div.classList.add('découverte');
        const img = document.createElement('img');
        img.src = div.dataset.image;
        img.style.display = 'block'; // Assure que l'image est visible
        img.style.width = '100px';  // Ajustez les dimensions si nécessaire
        img.style.height = '100px'; 
        div.appendChild(img); // Ajoute l'image à la carte

         // Si c'est le premier clic
         if (premierIndex === null) {
            premierIndex = index; // Stocke l'index de la première carte cliquée
        } 
        else {
            // Si c'est le deuxième clic
            const index1 = premierIndex;
            const index2 = index;
            premierIndex = null; // Réinitialise l'index pour le prochain tour
         };

        }); 
         // Ajoute la carte à la grille
    document.getElementById('grille').appendChild(div);
});