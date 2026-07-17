// Property Detail Page JavaScript

const SUPABASE_URL = 'https://bjzwbpkkazhczwtsxtey.supabase.co';

// Datos completos de propiedades con coordenadas y descripciones
const propiedadesData = {
   'loft-comercial-escamilla': {
    id: 'loft-comercial-escamilla',
    tipo: 'renta',
    categoria: 'Local Comercial',
    titulo: 'Loft Comercial Escamilla',
    ubicacion: 'Edificio Escamilla, Tres Oriente esquina con Segunda de Morelos, Centro, Tehuacán, Puebla',
    precio: 10000,
    precioTexto: '$10,000/mes',
    coordenadas: { 
        lat: 18.460833,    // Aproximado - Centro de Tehuacán (Catedral)
        lng: -97.391944    // Aproximado - Centro de Tehuacán (Catedral)
    },
    
    descripcion: `🏢 Excelente loft comercial en renta en el exclusivo Edificio Escamilla, ubicado en Tres Oriente esquina con Segunda de Morelos, en el corazón del Centro de Tehuacán.

📍 Ubicación inmejorable en el primer cuadro de la ciudad, justo atrás de la Catedral, ofreciendo una vista privilegiada y una presencia comercial de alto prestigio en la zona más emblemática de Tehuacán.

🏢 Este loft comercial (Loft 1) se encuentra en la planta alta del edificio, arriba de Megaempeños, brindando privacidad y exclusividad para tu negocio o consultorio.

✨ Cuenta con calentador eléctrico, garantizando confort térmico durante todo el año, y una práctica media barra de cocina que añade funcionalidad y versatilidad al espacio.

🎯 Ideal para oficinas, consultorios o negocios que buscan una ubicación premium en el corazón de la ciudad, con fácil acceso y alta visibilidad para tus clientes.

💼 ¡Establece tu negocio en una de las ubicaciones más cotizadas de Tehuacán y ofrece a tus clientes una experiencia de primer nivel!`,
    
    caracteristicas: [
        { icon: 'fa-building', label: 'Edificio', value: 'Escamilla' },
        { icon: 'fa-toilet', label: 'Baños', value: '1' },
        { icon: 'fa-bolt', label: 'Calentador', value: 'Eléctrico' },
        { icon: 'fa-utensils', label: 'Cocina', value: 'Media barra' },
        { icon: 'fa-arrow-up', label: 'Ubicación', value: 'Planta alta' }
    ],
    
    amenidades: [
        'Excelente ubicación',
        'Céntrico',
        'Fácil acceso',
        'Zona transitada',
        'Vista privilegiada',
        'Calentador eléctrico',
        'Media barra de cocina',
        'Zona comercial'
    ],
    
    fotos: 8,  
    folder: 'propiedades-renta/loft_centro',
    zip: `${SUPABASE_URL}/storage/v1/object/public/fotos-propiedades/propiedades-renta/loft_centro/loft_centro.zip`
}, 
   'cuarto-aquiles-serdan': {
    id: 'cuarto-aquiles-serdan',
    tipo: 'renta',
    categoria: 'Cuarto',
    titulo: 'Cuarto Aquiles Serdán',
    ubicacion: 'Calle 16 Norte, Aquiles Serdán, Tehuacán, Puebla',
    precio: 2500,
    precioTexto: '$2,500/mes',
    coordenadas: { 
        lat: 18.464806,    // 18°27'53.3"N - Aquiles Serdán
        lng: -97.406194    // 97°24'22.3"W - Aquiles Serdán
    },
    
    descripcion: `🏠 Excelente cuarto en renta en la transitada Calle 16 Norte, en la zona de Aquiles Serdán, una ubicación accesible y bien comunicada dentro de Tehuacán.

📍 Este espacio ha sido diseñado para ofrecer funcionalidad y comodidad en un formato práctico, ideal para quienes buscan un lugar independiente y bien ubicado.

🛏️ Cuenta con 1 recámara y 1 baño completo, distribuidos en un espacio de 30 m² que aprovecha cada rincón para brindar calidez y privacidad.

🍳 Incluye un área de cocina, permitiéndote preparar tus alimentos con total independencia y comodidad en tu día a día.

💧 Una de sus principales ventajas es que el servicio de agua ya está incluido en la renta, simplificando tus gastos mensuales y brindándote tranquilidad.

🐶 ¡Se aceptan mascotas! Este espacio es perfecto para ti y tu compañero peludo, ofreciéndoles un hogar cómodo y acogedor.

✨ ¡Haz de este espacio tu próximo hogar! Un lugar donde la funcionalidad, la ubicación y la comodidad se unen para ofrecerte una excelente opción de vivienda en Tehuacán.`,
    
    caracteristicas: [
        { icon: 'fa-bed', label: 'Recámara', value: '1' },
        { icon: 'fa-bath', label: 'Baños', value: '1' },
        { icon: 'fa-ruler-combined', label: 'Superficie', value: '30 m²' },
        { icon: 'fa-utensils', label: 'Cocina', value: 'Área incluida' }
    ],
    
    amenidades: [
        'Mascotas permitidas',
        'Agua incluida',
        'Excelente ubicación',
        'Fácil acceso',
        'Zona transitada',
        'Cocina equipada'
    ],
    
    fotos: 5, 
    folder: 'propiedades-renta/16norte-cuartos',
    zip: `${SUPABASE_URL}/storage/v1/object/public/fotos-propiedades/propiedades-renta/16norte-cuartos/fotos-16-norte-cuartos.zip`
},
    'oficina-1-poniente': {
    id: 'oficina-1-poniente',
    tipo: 'renta',
    categoria: 'Oficina',
    titulo: 'Oficina 1 Poniente',
    ubicacion: '1 Poniente No. 135, Col. Centro, Tehuacán, Puebla',
    precio: 7500,
    precioTexto: '$7,500/mes',
    coordenadas: { 
        lat: 18.461667,    // Aproximado - Centro de Tehuacán
        lng: -97.395278    // Aproximado - Centro de Tehuacán
    },
    
    descripcion: `🏢 Excelente local para oficina en renta en el corazón del Centro de Tehuacán, una ubicación privilegiada que combina prestigio, accesibilidad y funcionalidad para tu negocio.

    📍 Ubicado en 1 Poniente No. 135, en planta baja, este espacio ha sido diseñado para facilitar el acceso de tus clientes y colaboradores, eliminando barreras y ofreciendo comodidad desde el primer momento.

    ❄️ Equipado con clima, podrás trabajar con la mayor comodidad durante todo el año, manteniendo un ambiente agradable y profesional para tus reuniones y actividades diarias.

    💡 Una de sus principales ventajas es el excelente ahorro operativo: el servicio de agua y la conexión Wi-Fi ya están cubiertos por el arrendador, por lo que solo pagas tu recibo de luz, simplificando tus gastos mensuales y permitiéndote enfocarte en lo que realmente importa: hacer crecer tu negocio.

    🎯 Ideal para despachos corporativos, consultorios o profesionales independientes que buscan una ubicación céntrica con todos los servicios necesarios para operar con eficiencia y profesionalismo.

    ✨ ¡Establece tu oficina en el corazón de Tehuacán y brinda a tus clientes la experiencia que merecen!`,
        
        caracteristicas: [
            { icon: 'fa-building', label: 'Tipo', value: 'Oficina Local' },
            { icon: 'fa-door-open', label: 'Acceso', value: 'Planta baja' },
            { icon: 'fa-snowflake', label: 'Clima', value: 'Incluido' },
            { icon: 'fa-wifi', label: 'Wi-Fi', value: 'Incluido' },
            { icon: 'fa-tint', label: 'Agua', value: 'Incluida' }
        ],
        
        amenidades: [
            'Excelente ubicación',
            'Céntrico',
            'Fácil acceso',
            'Clima incluido',
            'Agua incluida',
            'Internet incluido',
            'Zona transitada',
            'Planta baja'
        ],
        
        fotos: 2,  
        folder: 'propiedades-renta/oficina-royal-place',
        zip: `${SUPABASE_URL}/storage/v1/object/public/fotos-propiedades/propiedades-renta/oficina-royal-place/fotos-oficina-royal-place.zip`
    },
        'casa-francisco-sarabia-renta': {
    id: 'casa-francisco-sarabia-renta',
    tipo: 'renta',
    categoria: 'Casa',
    titulo: 'Casa Francisco Sarabia',
    ubicacion: 'Calle 6 Ote. esquina con 5 Nte., Col. Francisco Sarabia, Tehuacán, Puebla',
    precio: 16000,
    precioTexto: '$16,000/mes',
    coordenadas: { 
        lat: 18.472278,    // Aproximado - Francisco Sarabia
        lng: -97.393194    // Aproximado - Francisco Sarabia
    },
    
    descripcion: `🏠 Excelente casa en renta en la tranquila y bien establecida Colonia Francisco Sarabia, una de las zonas residenciales más cotizadas de Tehuacán por su ubicación y accesibilidad.

    📍 Ubicada en Calle 6 Ote. esquina con 5 Nte., esta propiedad combina la tranquilidad de un entorno residencial con la cercanía a los principales accesos y servicios de la ciudad.

    🛏️ Cuenta con 3 recámaras espaciosas y 2 baños completos, distribuidos en un diseño funcional pensado para el bienestar y comodidad de toda la familia.

    🚗 Dispone de estacionamiento para 4 vehículos, brindando amplitud y seguridad para tu flotilla vehicular y la de tus visitas.

    ☀️ Equipada con calentador solar y tanque estacionario, esta casa no solo ofrece confort térmico, sino también un importante ahorro energético y autonomía en el suministro de gas.

    🍳 La cocina integral ha sido diseñada para facilitar la preparación de alimentos, ofreciendo un espacio práctico y funcional para el día a día.

    🔐 La seguridad es una prioridad: cuenta con portón eléctrico e interphone, brindándote tranquilidad y control total sobre el acceso a tu hogar.

    🐶 ¡Se aceptan mascotas! El amplio espacio exterior permite que tus animales disfruten de su propio lugar al aire libre, convirtiendo esta propiedad en el hogar perfecto para toda la familia, incluidos los peludos.

    ✨ ¡Haz de este espacio tu próximo hogar! Un lugar donde la comodidad, la seguridad y el espacio se unen para ofrecerte la mejor experiencia de vida en Francisco Sarabia.`,
        
        caracteristicas: [
            { icon: 'fa-bed', label: 'Recámaras', value: '3' },
            { icon: 'fa-bath', label: 'Baños', value: '2 ' },
            { icon: 'fa-car', label: 'Estacionamiento', value: '4' }
        ],
        
        amenidades: [
            'Mascotas permitidas',
            'Excelente ubicación',
            'Fácil acceso',
            'Cocina equipada',
            'Calentador solar',
            'Portón eléctrico',
            'Interphone'
        ],
        
        fotos: 14,  
        folder: 'propiedades-renta/casa_sarabia',
        zip: `${SUPABASE_URL}/storage/v1/object/public/fotos-propiedades/propiedades-renta/casa_sarabia/casa_sarabia.zip`
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
    folder: 'propiedades-renta/bodega-av-cuauctemoc',
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
    folder: 'propiedades-renta/departamento-priv-1poniente',
    zip: `${SUPABASE_URL}/storage/v1/object/public/fotos-propiedades/propiedades-renta/departamento-priv-1poniente/compressed.zip`
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
},
'casa-arcadia': {
    id: 'casa-arcadia',
    tipo: 'renta',
    categoria: 'Casa',
    titulo: 'Casa Arcadia',
    ubicacion: 'Calle 14 Sur, Arcadia, Tehuacán, Puebla',
    precio: 11000,
    precioTexto: '$11,000/mes',
    coordenadas: { 
        lat: 18.463083,   
        lng: -97.405167      
    },
    
    descripcion: `🏠 Excelente casa en renta en la tranquila y accesible colonia Arcadia, un lugar ideal para disfrutar de la paz y comodidad que tu familia merece.

🛏️ Su distribución ha sido cuidadosamente diseñada para ofrecer espacios amplios y funcionales, pensados para el bienestar de toda la familia. Cada ambiente ha sido creado para brindar calidez y confort, haciendo de esta casa un verdadero hogar.

✨ ¡Haz de este espacio tu próximo hogar! Un lugar donde la comodidad, la tranquilidad y la convivencia familiar se unen en perfecta armonía.`,
    
    caracteristicas: [
        { icon: 'fa-bed', label: 'Recámaras', value: '3' },
        { icon: 'fa-bath', label: 'Baños', value: '2' },
        { icon: 'fa-paw', label: 'Patio', value: 'Para mascotas' },
    ],
    
    amenidades: [
        'Tranquilidad',
        'Excelente ubicación',
        'Fácil acceso',
        'Mascotas permitidas'
    ],
    
    fotos: 22,  
    folder: 'propiedades-renta/casa-arcadea',
    zip: `${SUPABASE_URL}/storage/v1/object/public/fotos-propiedades/propiedades-renta/casa-arcadea/casa-arcadea.zip`
},
'local-centro-betanzo': {
    id: 'local-centro-betanzo',
    tipo: 'renta',
    categoria: 'Local Comercial',
    titulo: 'Local Centro Betanzo',
    ubicacion: 'Privada A. Betanzo Sancho (Entrada por 2 Oriente), Centro, Tehuacán, Puebla',
    precio: 2500,
    precioTexto: '$2,500/mes (Luz y agua incluidos)',
    coordenadas: { 
        lat: 18.462778,    // Aproximado - Centro de Tehuacán
        lng: -97.392500    // Aproximado - Centro de Tehuacán
    },
    
    descripcion: `🏢 Excelente local comercial en renta en el corazón del Centro de Tehuacán, una ubicación privilegiada que garantiza alta afluencia y visibilidad para tu negocio.

📍 Ubicado en la Privada A. Betanzo Sancho con entrada por la transitada Calle 2 Oriente, este espacio te conecta con el vibrante ambiente comercial del centro histórico de la ciudad.

📐 Su distribución práctica y funcional ha sido diseñada para que puedas iniciar operaciones de inmediato, sin necesidad de realizar grandes adecuaciones. Perfecto para emprendedores que buscan un espacio listo para arrancar.

💡 Una de sus mayores ventajas es que los servicios básicos de luz y agua están incluidos en la renta, lo que te permite tener un control total de tus gastos operativos desde el primer día.

🎯 Ideal para consultorios profesionales, oficinas comerciales, tiendas de especialidad o cualquier negocio que busque establecerse en una ubicación céntrica y accesible.

✨ ¡Aprovecha esta oportunidad única para hacer crecer tu negocio en el corazón de Tehuacán!`,
    
    caracteristicas: [
        { icon: 'fa-ruler-combined', label: 'Superficie', value: '20 m²' },
        { icon: 'fa-toilet', label: 'Baños', value: '1' },
        { icon: 'fa-store', label: 'Tipo', value: 'Local Comercial' },
        { icon: 'fa-door-open', label: 'Acceso', value: 'Por 2 Oriente' }
    ],
    
    amenidades: [
        'Agua incluida',
        'Luz incluida',
        'Céntrico',
        'Excelente ubicación',
        'Fácil acceso',
        'Zona transitada'
    ],
    
    fotos: 3, 
    folder: 'propiedades-renta/local_centro',
    zip: `${SUPABASE_URL}/storage/v1/object/public/fotos-propiedades/propiedades-renta/local_centro/local_centro.zip`
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
        'Excelente ubicación': 'fa-map-pin',
        'Distribución funcional': 'fa-layer-group',
        'Área de oficina integrada': 'fa-briefcase',
        'Plusvalía garantizada': 'fa-chart-line',
        'Dos predios en uno': 'fa-object-group',    
        'Patio amplio': 'fa-tree',
        'Calentador solar': 'fa-solar-panel',
        'Calentador solar': 'fa-solar-panel',
        'Portón eléctrico': 'fa-door-closed',
        'Interphone': 'fa-phone',
        'Doble acceso': 'fa-door-open',
        'Planta baja': 'fa-arrow-down',
        'Cuarto': 'fa-bed',
        'Almacén adicional': 'fa-boxes'


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
