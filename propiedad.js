// Property Detail Page JavaScript

const SUPABASE_URL = 'https://bjzwbpkkazhczwtsxtey.supabase.co';

// Datos completos de propiedades con coordenadas y descripciones
const propiedadesData = {
    '16norte-cuartos': {
        id: '16norte-cuartos',
        tipo: 'renta',
        categoria: 'Cuarto',
        titulo: 'Cuartos 16 Norte',
        ubicacion: 'Calle 16 Norte #127, Col. Aquiles Serdán, Tehuacán',
        precio: 2500,
        precioTexto: '$2,500/mes',
        coordenadas: { lat: 18.464861, lng: -97.406222 },
        descripcion: `✨ 𝗘𝘀𝗽𝗮𝗰𝗶𝗼 𝗳𝘂𝗻𝗰𝗶𝗼𝗻𝗮𝗹 𝘆 𝗰𝗼́𝗺𝗼𝗱𝗼 en Calle 16 Norte #127 🏠 Col. Aquiles Serdán, Tehuacán.📍
💰 Renta mensual: $2,500 MXN

Si buscas un espacio 𝗮𝗰𝗰𝗲𝘀𝗶𝗯𝗹𝗲, 𝘀𝗲𝗴𝘂𝗿𝗼 𝘆 𝗯𝗶𝗲𝗻 𝘂𝗯𝗶𝗰𝗮𝗱𝗼, este cuarto independiente es tu mejor opción.`,
        caracteristicas: [
            { icon: 'fa-bed', label: 'Recámaras', value: '1' },
            { icon: 'fa-bath', label: 'Baños', value: '1' },
            { icon: 'fa-ruler-combined', label: 'Construcción', value: '30 m²' },
            { icon: 'fa-car', label: 'Estacionamiento', value: '0' }
        ],
        amenidades: ['Cisterna', 'Mascotas permitidas'],
        fotos: 5,
        folder: 'propiedades-renta/16norte-cuartos',
        zip: `${SUPABASE_URL}/storage/v1/object/public/fotos-propiedades/propiedades-renta/16norte-cuartos/fotos-16-norte-cuartos.zip`
    },
    'departamento-valsequillo': {
        id: 'departamento-valsequillo',
        tipo: 'renta',
        categoria: 'Departamento',
        titulo: 'Departamento Valsequillo',
        ubicacion: 'Boulevard Valsequillo, Edificio 145 #7, Tehuacán, Puebla',
        precio: 5000,
        precioTexto: '$5,000/mes',
        coordenadas: { lat: 18.460639, lng: -97.416389 },
        descripcion: `🏢✨ ¡Haz de este espacio tu próximo hogar! Departamento en Renta en Tehuacán ✨🏢

📍 Boulevard Valsequillo, Edificio 145 #7, Tehuacán, Puebla
💲 Renta mensual: $5,000

Si buscas comodidad, buena iluminación y una distribución práctica que te permita adaptar el espacio a tus necesidades, este departamento es ideal para ti.`,
        caracteristicas: [
            { icon: 'fa-bed', label: 'Recámaras', value: '2' },
            { icon: 'fa-bath', label: 'Baños', value: '1' },
            { icon: 'fa-ruler-combined', label: 'Construcción', value: '60 m²' },
            { icon: 'fa-car', label: 'Estacionamiento', value: '1' }
        ],
        amenidades: ['Cisterna', 'Patio', 'Cocina', 'Mascotas permitidas', 'Permitido fumar'],
        fotos: 8,
        folder: 'propiedades-renta/departamento-valsequillo',
        zip: `${SUPABASE_URL}/storage/v1/object/public/fotos-propiedades/propiedades-renta/departamento-valsequillo/fotos-valsequillo.zip`
    },
    'jazmin': {
        id: 'jazmin',
        tipo: 'renta',
        categoria: 'Casa',
        titulo: 'Casa Jazmín',
        ubicacion: 'Colonia Jacarandas, Tehuacán, Puebla',
        precio: 5300,
        precioTexto: '$5,300/mes',
        coordenadas: { lat: 18.468611, lng: -97.395194 },
        descripcion: `✨ 𝗩𝗲𝗿𝘀𝗮𝘁𝗶𝗹 𝗰𝗮𝘀𝗮 𝗲𝗻 𝗿𝗲𝗻𝘁𝗮 en Colonia Jacarandas 🌸 Tehuacán, Puebla.📍
💰 Renta mensual: $5,300 MXN

Si buscas un espacio con 𝗽𝗼𝘁𝗲𝗻𝗰𝗶𝗮𝗹 𝗶𝗻𝗳𝗶𝗻𝗶𝘁𝗼, 𝘂𝗯𝗶𝗰𝗮𝗰𝗶𝗼́𝗻 𝗲𝘀𝘁𝗿𝗮𝘁𝗲́𝗴𝗶𝗰𝗮 𝘆 𝘃𝗲𝗿𝘀𝗮𝘁𝗶𝗹𝗶𝗱𝗮𝗱, esta propiedad es para ti.`,
        caracteristicas: [
            { icon: 'fa-bed', label: 'Recámaras', value: '2' },
            { icon: 'fa-bath', label: 'Baños', value: '1' },
            { icon: 'fa-ruler-combined', label: 'Terreno', value: '92 m²' },
            { icon: 'fa-home', label: 'Construcción', value: '92 m²' }
        ],
        amenidades: ['Una planta', 'Interior y exterior'],
        fotos: 10,
        folder: 'propiedades-renta/jazmin',
        zip: `${SUPABASE_URL}/storage/v1/object/public/fotos-propiedades/propiedades-renta/jazmin/fotos-jazmin.zip`
    },
    'casa-cinco-bosques': {
        id: 'casa-cinco-bosques',
        tipo: 'venta',
        categoria: 'Casa',
        titulo: 'Casa Cinco Bosques',
        ubicacion: 'Fraccionamiento Cinco Bosques, Tehuacán, Puebla',
        precio: 8000000,
        precioTexto: '$8,000,000',
        coordenadas: { lat: 18.483472, lng: -97.420028 },
        descripcion: `✨ 𝗘𝘀𝗽𝗲𝗰𝘁𝗮𝗰𝘂𝗹𝗮𝗿 𝗿𝗲𝘀𝗶𝗱𝗲𝗻𝗰𝗶𝗮 en Fraccionamiento Cinco Bosques 🌳 Tehuacán, Puebla.📍
💰 Precio: $8,000,000 MXN

Si buscas una casa con 𝗲𝗹𝗲𝗴𝗮𝗻𝗰𝗶𝗮, 𝗰𝗼𝗻𝗳𝗼𝗿𝘁 𝘆 𝗮𝗰𝗮𝗯𝗮𝗱𝗼𝘀 𝗱𝗲 𝗮𝗹𝘁𝗮 𝗰𝗮𝗹𝗶𝗱𝗮𝗱, esta propiedad de 2 plantas en exclusivo fraccionamiento es tu mejor opción.`,
        caracteristicas: [
            { icon: 'fa-bed', label: 'Recámaras', value: '4' },
            { icon: 'fa-bath', label: 'Baños', value: '4' },
            { icon: 'fa-toilet', label: 'Medios baños', value: '1' },
            { icon: 'fa-ruler-combined', label: 'Terreno', value: '400 m²' },
            { icon: 'fa-home', label: 'Construcción', value: '600 m²' },
            { icon: 'fa-car', label: 'Estacionamiento', value: '2' },
            { icon: 'fa-calendar', label: 'Año construcción', value: '2019' }
        ],
        amenidades: ['Cisterna', 'Estacionamiento techado', 'Garaje', 'Jardín', 'Patio', 'Terraza', 'Alarma', 'Cocina', 'Cuarto de servicio', 'Dos plantas', 'Fraccionamiento privado', 'Oficina'],
        fotos: 37,
        folder: 'propiedades-venta/casa-cinco-bosques',
        zip: `${SUPABASE_URL}/storage/v1/object/public/fotos-propiedades/propiedades-venta/casa-cinco-bosques/fotos-cinco-bosques.zip`
    },
    'casa-francisco-sarabia': {
        id: 'casa-francisco-sarabia',
        tipo: 'venta',
        categoria: 'Casa',
        titulo: 'Casa Francisco Sarabia',
        ubicacion: 'Francisco Sarabia, Tehuacán, Puebla',
        precio: 14000000,
        precioTexto: '$14,000,000',
        coordenadas: { lat: 18.472278, lng: -97.393194 },
        descripcion: `✨ 𝗘𝘅𝗰𝗲𝗽𝗰𝗶𝗼𝗻𝗮𝗹 𝗿𝗲𝘀𝗶𝗱𝗲𝗻𝗰𝗶𝗮 𝗰𝗼𝗻 𝗮𝗺𝗽𝗹𝗶𝗼 𝘁𝗲𝗿𝗿𝗲𝗻𝗼 𝘆 𝗮𝗹𝗯𝗲𝗿𝗰𝗮 🏊‍♂️ Francisco Sarabia, Tehuacán.📍
💰 Precio: $14,000,000 MXN

Si buscas una propiedad con 𝗽𝗼𝘁𝗲𝗻𝗰𝗶𝗮𝗹 𝗶𝗻𝗳𝗶𝗻𝗶𝘁𝗼, 𝗲𝘀𝗽𝗮𝗰𝗶𝗼𝘀 𝗴𝗲𝗻𝗲𝗿𝗼𝘀𝗼𝘀 𝘆 𝘇𝗼𝗻𝗮𝘀 𝗱𝗲 𝗿𝗲𝗰𝗿𝗲𝗮𝗰𝗶𝗼́𝗻, esta es tu oportunidad.`,
        caracteristicas: [
            { icon: 'fa-bed', label: 'Recámaras', value: '4' },
            { icon: 'fa-bath', label: 'Baños', value: '2' },
            { icon: 'fa-toilet', label: 'Medios baños', value: '1' },
            { icon: 'fa-ruler-combined', label: 'Terreno', value: '1,430 m²' },
            { icon: 'fa-home', label: 'Construcción', value: '404 m²' },
            { icon: 'fa-car', label: 'Estacionamiento', value: '6' }
        ],
        amenidades: ['Cisterna', 'Estacionamiento techado', 'Jardín', 'Patio', 'Chimenea', 'Cocina', 'Cuarto de servicio', 'Estudio', 'Oficina', 'Alberca', 'Jacuzzi'],
        fotos: 14,
        folder: 'propiedades-venta/casa-francisco-sarabia',
        zip: `${SUPABASE_URL}/storage/v1/object/public/fotos-propiedades/propiedades-venta/casa-francisco-sarabia/fotos-sarabia.zip`
    },
    'casa-valle-luna': {
        id: 'casa-valle-luna',
        tipo: 'venta',
        categoria: 'Casa',
        titulo: 'Casa Valle de la Luna',
        ubicacion: 'Fraccionamiento Valle de la Luna, Tehuacán, Puebla',
        precio: 5200000,
        precioTexto: '$5,200,000',
        coordenadas: { lat: 18.478111, lng: -97.422917 },
        descripcion: `✨ Residencia con carácter en Valle de la Luna ✨
💰 Precio: $5,200,000 MXN

Si buscas una casa con personalidad, espacios generosos y un ambiente cálido, esta propiedad en Fraccionamiento Valle de la Luna puede convertirse en tu próximo hogar. 🏡

Su arquitectura y distribución la hacen ideal para familias que valoran el confort y la seguridad.`,
        caracteristicas: [
            { icon: 'fa-bed', label: 'Recámaras', value: '3' },
            { icon: 'fa-bath', label: 'Baños', value: '3' },
            { icon: 'fa-toilet', label: 'Medios baños', value: '1' },
            { icon: 'fa-ruler-combined', label: 'Terreno', value: '276.59 m²' },
            { icon: 'fa-home', label: 'Construcción', value: '186 m²' },
            { icon: 'fa-car', label: 'Estacionamiento', value: '6' },
            { icon: 'fa-calendar', label: 'Año construcción', value: '2010' }
        ],
        amenidades: ['Balcón', 'Cisterna', 'Jardín', 'Patio', 'Terraza', 'Circuito cerrado', 'Cocina equipada', 'Cuarto de servicio', 'Dos plantas', 'Estudio', 'Fraccionamiento privado', 'Hidroneumático', 'Portero', 'Seguridad 24 horas', 'Mascotas permitidas'],
        fotos: 13,
        folder: 'propiedades-venta/casa-valle-luna',
        zip: `${SUPABASE_URL}/storage/v1/object/public/fotos-propiedades/propiedades-venta/casa-valle-luna/fosos-valle-luna.zip`
    },
    'terreno-bicentenarios': {
        id: 'terreno-bicentenarios',
        tipo: 'venta',
        categoria: 'Terreno',
        titulo: 'Terreno Bicentenarios',
        ubicacion: 'Fraccionamiento Bicentenario, Tehuacán, Puebla',
        precio: 588000,
        precioTexto: '$588,000',
        coordenadas: { lat: 18.439861, lng: -97.402972 },
        descripcion: `✨ 𝗘𝘅𝗰𝗲𝗹𝗲𝗻𝘁𝗲 𝗼𝗽𝗼𝗿𝘁𝘂𝗻𝗶𝗱𝗮𝗱 𝗱𝗲 𝗶𝗻𝘃𝗲𝗿𝘀𝗶𝗼́𝗻 en Fracc. Bicentenario 🏗️ Tehuacán, Puebla.📍
💰 Precio: $588,000 MXN

Si buscas un terreno con 𝘂𝗯𝗶𝗰𝗮𝗰𝗶𝗼́𝗻 𝗲𝘀𝘁𝗿𝗮𝘁𝗲́𝗴𝗶𝗰𝗮, 𝘀𝗲𝗴𝘂𝗿𝗶𝗱𝗮𝗱 𝘆 𝗮𝗺𝗲𝗻𝗶𝗱𝗮𝗱𝗲𝘀, esta es tu oportunidad.`,
        caracteristicas: [
            { icon: 'fa-ruler-combined', label: 'Terreno', value: '98 m²' },
            { icon: 'fa-arrows-alt-h', label: 'Frente', value: '7 m' },
            { icon: 'fa-arrows-alt-v', label: 'Largo', value: '14 m' }
        ],
        amenidades: ['Fraccionamiento privado', 'Portero', 'Área de juegos infantiles'],
        fotos: 4,
        folder: 'propiedades-venta/terreno-bicentenarios',
        zip: `${SUPABASE_URL}/storage/v1/object/public/fotos-propiedades/propiedades-venta/terreno-bicentenarios/fotosBicentenario.zip`
    },
    'terreno-parque-industrial2': {
        id: 'terreno-parque-industrial2',
        tipo: 'venta',
        categoria: 'Terreno',
        titulo: 'Terreno Parque Industrial II',
        ubicacion: 'Parque Industrial II, Manzana 3, Lote L-33, Tehuacán, Puebla',
        precio: 300000,
        precioTexto: '$300,000',
        coordenadas: { lat: 18.512417, lng: -97.432889 },
        descripcion: `📍 UBICACIÓN:
Parque Industrial II, Manzana 3, Lote L-33
Tehuacán, Puebla

📐 CARACTERÍSTICAS:
• Superficie: 120 m²
• Frente: 7.50 metros
• Fondo: 16.00 metros
• Forma: Regular
• Uso de suelo: Habitacional

⚠️ CONDICIONES:
• Vía de acceso: Terracería
• Sin servicios (luz, agua, drenaje)`,
        caracteristicas: [
            { icon: 'fa-ruler-combined', label: 'Terreno', value: '120 m²' },
            { icon: 'fa-arrows-alt-h', label: 'Frente', value: '7.5 m' },
            { icon: 'fa-arrows-alt-v', label: 'Largo', value: '16 m' }
        ],
        amenidades: [],
        fotos: 7,
        folder: 'propiedades-venta/terreno-parque-industrial2',
        zip: `${SUPABASE_URL}/storage/v1/object/public/fotos-propiedades/propiedades-venta/terreno-parque-industrial2/fotos-parque-industrial2.zip`
    }
};

let currentProperty = null;
let currentImageIndex = 0;
let propertyImages = [];

// Obtener ID de propiedad de la URL
function getPropertyId() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}

// Generar URLs de imágenes
function generateImageUrls(folder, count) {
    const urls = [];
    for (let i = 1; i <= count; i++) {
        urls.push(`${SUPABASE_URL}/storage/v1/object/public/fotos-propiedades/${folder}/${i}.webp`);
    }
    return urls;
}

// Cambiar imagen principal
function changeImage(direction) {
    currentImageIndex += direction;
    if (currentImageIndex < 0) currentImageIndex = propertyImages.length - 1;
    if (currentImageIndex >= propertyImages.length) currentImageIndex = 0;
    updateGallery();
}

// Seleccionar imagen específica
function selectImage(index) {
    currentImageIndex = index;
    updateGallery();
}

// Actualizar galería
function updateGallery() {
    const mainImage = document.getElementById('main-image');
    const currentSpan = document.getElementById('current-image');
    const thumbs = document.querySelectorAll('.gallery-thumb');
    
    mainImage.src = propertyImages[currentImageIndex];
    currentSpan.textContent = currentImageIndex + 1;
    
    thumbs.forEach((thumb, index) => {
        thumb.classList.toggle('active', index === currentImageIndex);
    });
}

// Renderizar características
function renderCharacteristics(caracteristicas) {
    const container = document.getElementById('characteristics-grid');
    container.innerHTML = caracteristicas.map(c => `
        <div class="characteristic-item">
            <i class="fas ${c.icon}"></i>
            <div>
                <span class="label">${c.label}</span>
                <span class="value">${c.value}</span>
            </div>
        </div>
    `).join('');
}

// Renderizar amenidades
function renderAmenities(amenidades) {
    const section = document.getElementById('amenities-section');
    const container = document.getElementById('amenities-grid');
    
    if (amenidades.length === 0) {
        section.style.display = 'none';
        return;
    }
    
    const iconMap = {
        'Cisterna': 'fa-water',
        'Mascotas permitidas': 'fa-paw',
        'Permitido fumar': 'fa-smoking',
        'Patio': 'fa-tree',
        'Cocina': 'fa-utensils',
        'Estacionamiento techado': 'fa-warehouse',
        'Garaje': 'fa-warehouse',
        'Jardín': 'fa-leaf',
        'Terraza': 'fa-sun',
        'Alarma': 'fa-bell',
        'Cuarto de servicio': 'fa-user',
        'Dos plantas': 'fa-building',
        'Fraccionamiento privado': 'fa-lock',
        'Oficina': 'fa-briefcase',
        'Chimenea': 'fa-fire',
        'Estudio': 'fa-book',
        'Una sola planta': 'fa-home',
        'Alberca': 'fa-swimming-pool',
        'Jacuzzi': 'fa-hot-tub',
        'Balcón': 'fa-columns',
        'Circuito cerrado': 'fa-video',
        'Cocina equipada': 'fa-blender',
        'Hidroneumático': 'fa-tint',
        'Portero': 'fa-user-shield',
        'Seguridad 24 horas': 'fa-shield-alt',
        'Facilidad para estacionarse': 'fa-parking',
        'Área de juegos infantiles': 'fa-child'
    };
    
    container.innerHTML = amenidades.map(a => `
        <div class="amenity-tag">
            <i class="fas ${iconMap[a] || 'fa-check'}"></i>
            ${a}
        </div>
    `).join('');
}

// Encontrar propiedades similares
function findSimilarProperties(currentProp) {
    return Object.values(propiedadesData)
        .filter(p => p.id !== currentProp.id && p.tipo === currentProp.tipo)
        .slice(0, 3);
}

// Renderizar propiedades similares
function renderSimilarProperties(similar) {
    const container = document.getElementById('similar-properties');
    
    if (similar.length === 0) {
        container.innerHTML = '<p class="text-center">No hay propiedades similares disponibles.</p>';
        return;
    }
    
    container.innerHTML = similar.map(p => `
        <div class="property-card">
            <div class="property-image">
                <img src="${SUPABASE_URL}/storage/v1/object/public/fotos-propiedades/${p.folder}/1.webp" alt="${p.titulo}" loading="lazy">
                <span class="property-badge">${p.categoria}</span>
            </div>
            <div class="property-info">
                <div class="property-type">${p.tipo === 'venta' ? 'En Venta' : 'En Renta'}</div>
                <h3 class="property-title">${p.titulo}</h3>
                <div class="property-location">
                    <i class="fas fa-map-marker-alt"></i>
                    ${p.ubicacion.split(',')[0]}
                </div>
                <div class="property-price">${p.precioTexto}</div>
                <a href="propiedad.html?id=${p.id}" class="btn btn-primary btn-full">Ver detalles</a>
            </div>
        </div>
    `).join('');
}

// Cargar propiedad
function loadProperty() {
    const propertyId = getPropertyId();
    
    if (!propertyId || !propiedadesData[propertyId]) {
        document.body.innerHTML = `
            <div class="container" style="padding: 100px 20px; text-align: center;">
                <h1>Propiedad no encontrada</h1>
                <p>La propiedad que buscas no existe o ha sido removida.</p>
                <a href="index.html" class="btn btn-primary">Volver al inicio</a>
            </div>
        `;
        return;
    }
    
    currentProperty = propiedadesData[propertyId];
    propertyImages = generateImageUrls(currentProperty.folder, currentProperty.fotos);
    
    // Actualizar título de página
    document.title = `${currentProperty.titulo} - IRE Inmobiliaria`;
    
    // Breadcrumb
    document.getElementById('breadcrumb-tipo').textContent = 
        currentProperty.tipo === 'venta' ? 'Venta' : 'Renta';
    document.getElementById('breadcrumb-nombre').textContent = currentProperty.titulo;
    
    // Galería
    document.getElementById('total-images').textContent = propertyImages.length;
    updateGallery();
    
    // Thumbnails
    const thumbsContainer = document.getElementById('gallery-thumbs');
    thumbsContainer.innerHTML = propertyImages.map((url, index) => `
        <div class="gallery-thumb ${index === 0 ? 'active' : ''}" onclick="selectImage(${index})">
            <img src="${url}" alt="Foto ${index + 1}">
        </div>
    `).join('');
    
    // Header
    document.getElementById('property-type').textContent = 
        currentProperty.tipo === 'venta' ? 'En Venta' : 'En Renta';
    document.getElementById('property-title').textContent = currentProperty.titulo;
    document.getElementById('property-location').textContent = currentProperty.ubicacion;
    document.getElementById('property-price').textContent = currentProperty.precioTexto;
    
    // Características
    renderCharacteristics(currentProperty.caracteristicas);
    
    // Descripción
    document.getElementById('property-description').textContent = currentProperty.descripcion;
    
    // Amenidades
    renderAmenities(currentProperty.amenidades);
    
    // Mapa
    const mapUrl = `https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1000!2d${currentProperty.coordenadas.lng}!3d${currentProperty.coordenadas.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2smx!4v1`;
    document.getElementById('property-map').src = mapUrl;
    
    // Link a Google Maps
    const mapsLink = `https://www.google.com/maps/search/?api=1&query=${currentProperty.coordenadas.lat},${currentProperty.coordenadas.lng}`;
    document.getElementById('maps-link').href = mapsLink;
    
    // WhatsApp
    const whatsappText = `Hola, estoy interesado en ${currentProperty.titulo} (${currentProperty.precioTexto})`;
    document.getElementById('whatsapp-btn').href = 
        `https://wa.me/522228515440?text=${encodeURIComponent(whatsappText)}`;
    
    // Propiedades similares
    const similar = findSimilarProperties(currentProperty);
    renderSimilarProperties(similar);
}

// Inicializar
document.addEventListener('DOMContentLoaded', loadProperty);