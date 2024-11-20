// const upload = document.getElementById('upload');
// const canvas = document.getElementById('imageDaltonnisme');
// const ctx = canvas.getContext('2d');

// // let img = new Image();
// // let originalImageData; // Variable pour stocker l'image d'origine

// // upload.addEventListener('change', (event) => {
// //     const file = event.target.files[0];
// //     const reader = new FileReader();

// //     reader.onload = (e) => {
// //         img.src = e.target.result;
// //     };

// //     if (file) {
// //         reader.readAsDataURL(file);
// //     }
// // });

// // img.onload = () => {
// //     canvas.width = img.width;
// //     canvas.height = img.height;
// //     ctx.drawImage(img, 0, 0);
// //     originalImageData = ctx.getImageData(0, 0, canvas.width, canvas.height); // Stocke l'image originale
// // };

// function applyFilter(filter) {
//     // Réinitialise l'image avec les données originales
//     ctx.putImageData(originalImageData, 0, 0);
    
//     let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
//     const data = imageData.data;

//     for (let i = 0; i < data.length; i += 4) {
//         const r = data[i];     // Rouge
//         const g = data[i + 1]; // Vert
//         const b = data[i + 2]; // Bleu

//         // Filtres de vision
//         if (filter === 'btnProtanope') {
//             data[i] = 0.152286 * r + 1.052583 * g + -0.204868 * b;          // R
//             data[i + 1] = 0.114503 * r + 0.786281 * g + 0.099216 * b;       // G
//             data[i + 2] = -0.003882 * r + -0.048116 * g + 1.051998 * b;     // B
//         } else if (filter === 'btnDeutéranope') {
//             data[i] = 0.367322 * r + 0.860646 * g + -0.227968 * b;          // R
//             data[i + 1] = 0.280085 * r + 0.672501 * g + 0.047413 * b;       // G
//             data[i + 2] = 0.011820 * r + 0.042940 * g + 0.968881 * b;       // B
//         } else if (filter === 'btnTritanope') {
//             data[i] = 1.255528 * r + -0.076749 * g + -0.178779 * b;         // R
//             data[i + 1] = -0.078411 * r + 0.930809 * g + 0.147602 * b;      // G
//             data[i + 2] = 0.004733 * r + 0.691367 * g + 0.303900 * b;       // B
//         }
//     }

//     ctx.putImageData(imageData, 0, 0);
// }

// // Événements pour appliquer les filtres
// document.getElementById('btnProtanope').addEventListener('click', () => applyFilter('btnProtanope'));
// document.getElementById('btnDeutéranope').addEventListener('click', () => applyFilter('btnDeutéranope'));
// document.getElementById('btnTritanope').addEventListener('click', () => applyFilter('btnTritanope'));


const upload = document.getElementById('upload');
const imageElement = document.getElementById('imageDaltonnisme');

// Lorsque l'utilisateur télécharge une image
upload.addEventListener('change', (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
        imageElement.src = e.target.result;
    };

    if (file) {
        reader.readAsDataURL(file);  // Lire le fichier comme une URL de données
    }
});

function applyFilter(filter) {
    // Applique un filtre CSS en fonction du type de daltonisme sélectionné
    if (filter === 'btnProtanope') {
        // Protanope : Simule la difficulté à distinguer les rouges
        imageElement.style.filter = 'sepia(1) saturate(0.5) contrast(1.2)';
    } else if (filter === 'btnDeutéranope') {
        // Deutéranope : Simule la difficulté à distinguer les verts
        imageElement.style.filter = 'sepia(1) saturate(0.7) contrast(1.3)';
    } else if (filter === 'btnTritanope') {
        // Tritanope : Simule la difficulté à distinguer les bleus
        imageElement.style.filter = 'sepia(1) saturate(0.8) contrast(1.5)';
    } else {
        // Réinitialise le filtre si aucun bouton n'est cliqué
        imageElement.style.filter = 'none';
    }
}
