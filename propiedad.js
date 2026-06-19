// Property Detail Page JavaScript

const SUPABASE_URL = 'https://bjzwbpkkazhczwtsxtey.supabase.co';

// Datos completos de propiedades con coordenadas y descripciones
const propiedadesData = {
    
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
    },'bodega-san-diego': {
    id: 'bodega-san-diego',
    tipo: 'renta',
    categoria: 'Bodega',
    titulo: 'Bodega San Diego',
    ubicacion: 'San Diego, Tehuacán, Puebla',
    precio: 60000,
    precioTexto: '$60,000/mes (negociable)',
    
    // 📍 COORDENADAS (aproximadas para San Diego, Tehuacán)
    coordenadas: { 
        lat: 18.451667,    // Aproximado - San Diego
        lng: -97.394444    // Aproximado - San Diego
    },
    
    // 📝 DESCRIPCIÓN: Solo texto narrativo (sin datos repetidos)
    descripcion: `🏭 Impresionante bodega industrial en renta en la zona de San Diego, uno de los polos de desarrollo industrial más importantes de Tehuacán.

📐 Con 900 m² de espacio, esta propiedad ofrece la versatilidad y capacidad necesaria para proyectos de gran envergadura, desde operaciones logísticas hasta producción manufacturera.

🏢 Cuenta con áreas de oficinas integradas, lo que permite centralizar la administración y las operaciones en un mismo lugar, optimizando la eficiencia de tu negocio.

💼 Ideal para corporativos, grandes empresas de logística o fábricas que buscan un espacio funcional y bien ubicado.

⚡ ¡Excelente oportunidad con precio negociable! Aprovecha este espacio único para impulsar tu negocio al siguiente nivel.`,
    
    // 📊 CARACTERÍSTICAS: Solo datos medibles
    caracteristicas: [
        { icon: 'fa-ruler-combined', label: 'Superficie', value: '900 m²' },
        { icon: 'fa-building', label: 'Oficinas', value: 'Integradas' },
        { icon: 'fa-warehouse', label: 'Uso', value: 'Industrial/Corporativo' },
        { icon: 'fa-truck', label: 'Acceso', value: 'Carga pesada' }
    ],
    
    amenidades: [   
        'Oficinas integradas',
        'Zona industrial',
        'Estacionamiento',
        'Fácil acceso',
        'Patio de maniobras',
        'Precio negociable'],
    
    fotos: 10,
    folder: 'propiedades-renta/bodega-san-diego',
    zip: `${SUPABASE_URL}/storage/v1/object/public/fotos-propiedades/propiedades-renta/bodega-san-diego/fotos-bodega-san-diego.zip`
},
     'bodega-av-cuauhtemoc': {
    id: 'bodega-av-cuauhtemoc',
    tipo: 'renta',
    categoria: 'Bodega',
    titulo: 'Bodega Av. Cuauhtémoc',
    ubicacion: 'Av. Cuauhtémoc (atrás del Oxxo, casi llegando a Las Palmas), Tehuacán, Puebla',
    precio: 35000,
    precioTexto: '$35,000/mes',
    coordenadas: { 
        lat: 18.481806,  
        lng: -97.397444  
    },
    
    // 📝 DESCRIPCIÓN: SOLO TEXTO NARRATIVO
    descripcion: `🏭 Excelente bodega en renta en Av. Cuauhtémoc, una de las zonas con mayor movimiento comercial de Tehuacán.
    💡 Cuenta con conexión eléctrica bifásica, ideal para negocios que requieren mayor capacidad de energía.
    📍 Ubicación estratégica: atrás del Oxxo, casi llegando a Las Palmas, con fácil acceso para carga y descarga.
    🚛 Perfecta para almacenamiento comercial, punto de venta mayorista o logística urbana.`,
    
    // 📊 CARACTERÍSTICAS: DATOS MEDIBLES
    caracteristicas: [
        { icon: 'fa-ruler-combined', label: 'Superficie', value: '720 m²' },
        { icon: 'fa-bolt', label: 'Tipo de luz', value: 'Bifásica' },
        { icon: 'fa-door-open', label: 'Acceso', value: 'Calle principal' }
    ],
    amenidades: [],
    fotos: 1,
    folder: 'propiedades-renta/bodega-av-cuauhtemoc',
    zip: `${SUPABASE_URL}/storage/v1/object/public/fotos-propiedades/propiedades-renta/bodega-av-cuauctemoc/fotos-bodega-cuauctemoc.zip`
},
    'bodega-san-lorenzo': {
        id: 'bodega-san-lorenzo',
        tipo: 'renta',
        categoria: 'Bodega',
        titulo: 'Bodega San Lorenzo',
        ubicacion: 'San Lorenzo, Tehuacán, Puebla',
        precio: 23000,
        precioTexto: '$23,000/mes',
        coordenadas: { 
            lat: 18.456389, 
            lng: -97.400556 
        },
        descripcion: ` 🏭 Excelente bodega industrial en renta en la zona de San Lorenzo, una de las áreas con mayor crecimiento comercial e industrial de Tehuacán.

        📍 Ubicación estratégica con amplios accesos para maniobras de carga y descarga, perfecta para actividades logísticas y de producción
        🚛 Espacio versátil que se adapta a las necesidades de tu negocio, ya sea almacenamiento, taller mecánico, producción o distribución.
        ⚡ Cuenta con instalación eléctrica trifásica, ideal para operaciones que requieren maquinaria pesada y alto consumo energético.`,

      
        caracteristicas: [
            { icon: 'fa-ruler-combined', label: 'Superficie', value: '400 m²' },
            { icon: 'fa-bolt', label: 'Tipo de luz', value: 'Trifásica' },
            { icon: 'fa-warehouse', label: 'Uso', value: 'Industrial/Logístico' },
            { icon: 'fa-truck', label: 'Maniobras', value: 'Amplio espacio' }
        ],
        amenidades: [],
        fotos: 3,
        folder: 'propiedades-renta/bodega-san-lorenzo400',
        zip: `${SUPABASE_URL}/storage/v1/object/public/fotos-propiedades/propiedades-renta/bodega-san-lorenzo400/fotos-bodega-san-lorenzo400.zip`
    },
    'oficina-2-norte': {
    id: 'oficina-2-norte',
    tipo: 'renta',
    categoria: 'Oficina',
    titulo: 'Oficinas/Consultorios Col. Zaragoza',
    ubicacion: 'Privada de 2 Norte #233, Colonia Zaragoza, Tehuacán, Puebla',
    precio: 5000,
    precioTexto: '$5,000/mes',
    
    
    coordenadas: { 
        lat: 18.463056,   
        lng: -97.391667    
    },
    
    // 📝 DESCRIPCIÓN: Solo texto narrativo (sin datos repetidos)
    descripcion: `💼 Espacios diseñados especialmente para atención profesional, con distribución funcional que permite recibir pacientes y clientes con comodidad y privacidad.
📍 Ubicación estratégica a solo una cuadra del Centro Escolar, con fácil acceso y alta visibilidad para tu consulta u oficina.
👨‍⚕️ Perfecto para especialistas médicos, arquitectos, contadores, constructoras, psicólogos, fisioterapeutas y cualquier profesional que busque un espacio de trabajo de primer nivel.

✨ Servicios incluidos:
• Recepcionista profesional en áreas comunes
• Ambiente profesional y seguro
• Excelente ubicación cerca de escuelas y comercios`,
    
    // 📊 CARACTERÍSTICAS: Solo datos medibles
    caracteristicas: [
        { icon: 'fa-building', label: 'Tipo', value: 'Consultorio Oficina' },
        { icon: 'fa-user-md', label: 'Ideal para', value: 'Profesionales' },
        { icon: 'fa-door-open', label: 'Acceso', value: 'Privado' },
        { icon: 'fa-clock', label: 'Horario', value: 'Flexible' }
    ],
    
    // ✨ AMENIDADES: Servicios y comodidades
    amenidades: [
        'Agua incluida',
        'Luz incluida',
        'Internet incluido',
        'Recepcionista',
        'Áreas comunes',
        'Cerca de escuelas',
        'Zona transitada'
    ],
    
    fotos: 1,
    folder: 'propiedades-renta/consultorios-2-norte',
    zip: `${SUPABASE_URL}/storage/v1/object/public/fotos-propiedades/propiedades-renta/consultorios-2-norte/fotos-consultorios-2-norte.zip`
},
'departamento-privada-1-poniente': {
    id: 'departamento-privada-1-poniente',
    tipo: 'renta',
    categoria: 'Departamento',
    titulo: 'Departamento Privada de la 1 Poniente',
    ubicacion: 'Privada de la 1 Poniente, Tehuacán, Puebla',
    precio: 8500,
    precioTexto: '$8,500/mes',
    
    coordenadas: { 
        lat: 18.462722,    
        lng: -97.398750    
    },
    
    descripcion: `🏢 Excelente departamento en renta en la exclusiva Privada de la 1 Poniente, una de las zonas más cotizadas de Tehuacán.
    
    ✨ ¡Haz de este espacio tu próximo hogar! ✨
    📍 Ubicación estratégica en pleno corazón de la ciudad, a solo dos calles del histórico Parque Juárez y a una calle de la terminal ADO, lo que te brinda acceso inmejorable a todos los servicios y transportes.
    🏡 Zona privada y tranquila, ideal para disfrutar de la paz y seguridad que tu familia merece, sin sacrificar la cercanía a comercios, escuelas y centros de entretenimiento.
    🌟 Un espacio pensado para tu comodidad y bienestar, donde cada detalle ha sido cuidado para ofrecerte la mejor experiencia de vida urbana.`,
    
    caracteristicas: [
        { icon: 'fa-bed', label: 'Recámaras', value: '3' },
        { icon: 'fa-bath', label: 'Baños', value: '2 completos' },
        { icon: 'fa-car', label: 'Estacionamiento', value: '1' },
        { icon: 'fa-building', label: 'Planta', value: 'Alta' }
    ],
    
    amenidades: [
        'Zona privada',
        'Tranquilidad',
        'Céntrico',
    
    ],
    
    fotos: 9,
    folder: 'propiedades-renta/departamento-privada-1-poniente',
    zip: `${SUPABASE_URL}/storage/v1/object/public/fotos-propiedades/propiedades-renta/departamento-priv-1poniente/compressed.zip`
},
    'local-oficina-centro': {
    id: 'local-oficina-centro',
    tipo: 'renta',
    categoria: 'Oficina',
    titulo: 'Local para Oficina Col. Centro',
    ubicacion: '1 Poniente No. 135, Col. Centro, Tehuacán, Puebla',
    precio: 8000,
    precioTexto: '$8,000/mes',
    coordenadas: { 
        lat: 18.462083, 
        lng: -97.395722 
    },
    descripcion: `📍 Este local en planta baja, ubicado sobre la transitada 1 Poniente, te ofrece la visibilidad y accesibilidad que tu negocio necesita para recibir clientes con total comodidad.
🌡️ Disfruta de un espacio perfectamente climatizado que te permitirá trabajar en un ambiente agradable sin importar la temporada del año.
💼 Su distribución funcional y ubicación estratégica lo convierten en el lugar ideal para profesionales que valoran la practicidad y la buena ubicación.
🌟 Aprovecha los servicios básicos ya cubiertos y enfócate en lo que realmente importa: hacer crecer tu proyecto profesional.

🚀 ¡Un espacio listo para que llegues y empieces a trabajar!`,

    caracteristicas: [
    { icon: 'fa-building', label: 'Tipo', value: 'Local/Oficina' },
    { icon: 'fa-map-pin', label: 'Zona', value: 'Col. Centro' },
    ],

    amenidades: [
    'Agua incluida',
    'Internet incluido',
    'Clima incluido',
    'Fácil acceso',
    'Céntrico',
    'Zona transitada'
    ],
    fotos: 2,
    folder: '/propiedades-renta/oficina-royal-place/',
    zip: `${SUPABASE_URL}/storage/v1/object/public/fotos-propiedades/propiedades-renta/oficina-royal-place/fotos-oficina-royal-place.zip`
},
'bodega-santa-cruz-buenavista': {
    id: 'bodega-santa-cruz-buenavista',
    tipo: 'renta',
    categoria: 'Bodega',
    titulo: 'Bodega Comercial Santa Cruz Buenavista',
    ubicacion: 'Calzada Zavaleta, Santa Cruz Buenavista, Puebla',
    precio: 670000,
    precioTexto: '$670,000/mes',
    
    // 📍 COORDENADAS (aproximadas - Santa Cruz Buenavista, Puebla)
    coordenadas: { 
        lat: 19.028333,    
        lng: -98.205278    
    },
    
    // 📝 DESCRIPCIÓN: Texto narrativo sin repetir datos
    descripcion: `🏭 Impresionante bodega comercial en renta en la exclusiva Calzada Zavaleta, uno de los corredores industriales y logísticos más importantes de Puebla.

📐 Con una superficie operativa de 2,750 m² y posibilidad de expansión a 3,000 m², este inmueble está diseñado para albergar operaciones de gran escala.
🏗️ Su estructura de 3 plantas con alturas de 6 a 7 metros ofrece versatilidad para almacenamiento, distribución y áreas operativas, todo iluminado con tecnología 100% LED para máxima eficiencia energética.
🛗 Cuenta con un elevador Mitsubishi para 8 personas con mantenimiento incluido, además de espacio estructural disponible para un segundo elevador, brindando una excelente movilidad vertical.
💧 La propiedad está equipada con 2 pozos de agua y servicio de agua potable, garantizando el suministro para todo tipo de operaciones.
⚡ Transformador de 75 kVA que asegura la capacidad energética necesaria para maquinaria y equipos industriales.
🏢 La oficina privada premium incluye puerta de seguridad, baño independiente y una espectacular terraza privada de 100 m², ideal para reuniones ejecutivas o áreas de descanso.
🚚 Con estacionamiento para 12 vehículos y la posibilidad de expandir a 40+ espacios con el lote aledaño, más servicio de valet parking fijo cubierto por el propietario, la logística de tu personal y visitas está completamente resuelta.

🎯 El espacio perfecto para corporativos, grandes centros de distribución o centros operativos que buscan eficiencia y crecimiento.`,
    
    // 📊 CARACTERÍSTICAS: Datos medibles (se pueden contar)
    caracteristicas: [
        { icon: 'fa-ruler-combined', label: 'Superficie', value: '2,750 m²' },
        { icon: 'fa-layer-group', label: 'Plantas', value: '3' },
        { icon: 'fa-arrows-alt-v', label: 'Altura', value: '6-7 m' },
        { icon: 'fa-arrows-alt-h', label: 'Frente x Fondo', value: '17m x 79m' },
        { icon: 'fa-toilet', label: 'Baños', value: '5' },
        { icon: 'fa-car', label: 'Estacionamiento', value: '12' },
        { icon: 'fa-elevator', label: 'Elevador', value: 'Mitsubishi 8 pers.' },
        { icon: 'fa-bolt', label: 'Transformador', value: '75 kVA' }
        
    ],
    
    // ✨ AMENIDADES: Servicios extras
    amenidades: [
        'Pozos de agua',
        'Agua potable',
        'Elevador',
        'Oficina premium',
        'Terraza privada',
        'Bodegas de servicio'
    ],
    
    fotos: 13,
    folder: 'propiedades-renta/bodega-santa-cruz-buenavista',
    zip: `${SUPABASE_URL}/storage/v1/object/public/fotos-propiedades/propiedades-renta/bodega-santa-cruz-buenavista/fotos-bodega-santa-cruz.zip`
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
        'Área de juegos infantiles': 'fa-child',
        'Agua incluida': 'fa-tint',
        'Luz incluida': 'fa-bolt',
        'Internet incluido': 'fa-wifi',
        'Recepcionista': 'fa-user-tie',
        'Áreas comunes': 'fa-people-arrows',
        'Cerca de escuelas': 'fa-school',
        'Zona transitada': 'fa-route',
        'Zona privada': 'fa-lock',
        'Tranquilidad': 'fa-spa',
        'Céntrico': 'fa-map-pin',
        'Oficinas integradas': 'fa-building',
        'Zona industrial': 'fa-industry',
        'Patio de maniobras': 'fa-rotate',
        'Precio negociable': 'fa-handshake',
        'Estacionamiento': 'fa-parking',
        'Fácil acceso': 'fa-door-open',
        'Terraza exterior': 'fa-umbrella-beach',
        'Licencia de licores incluida': 'fa-wine-bottle',
        'Medidor de luz independiente': 'fa-bolt',
        'Clima incluido': 'fa-snowflake',
        'Pozos de agua': 'fa-water',
        'Agua potable': 'fa-tint',       
        'Elevador': 'fa-elevator',
        'Oficina premium': 'fa-briefcase', 
        'Terraza privada': 'fa-sun',       
        'Bodegas de servicio': 'fa-warehouse',
        'Puerta calle': 'fa-door-open',
        'Excelente ubicación': 'fa-map-pin'
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
