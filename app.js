// IRE Inmobiliaria - JavaScript
// Auto-generado por IRE Dashboard v2 (fusión de propiedades)
// Fecha: 2026-08-01T07:49:17.007876

const SUPABASE_URL = 'https://bjzwbpkkazhczwtsxtey.supabase.co';
const SUPABASE_KEY = 'eyJhbG...zH6s';

// Datos de propiedades (fusionado: sitio web + dashboard)
const propiedades = [
    {  // ⭐ Nueva del dashboard
        id: 'cuarto-aquiles-serdan',
        tipo: 'renta',
        categoria: 'Cuarto',
        titulo: 'Cuarto Aquiles Serdán',
        ubicacion: 'Calle 16 Norte, Aquiles Serdán, Tehuacán, Puebla',
        precio: 2500,
        precioTexto: '$2,500/mes',
        metros: 30,
        habitaciones: 1,
        banos: 1,
        imagen: `https://bjzwbpkkazhczwtsxtey.supabase.co/storage/v1/object/public/fotos-propiedades/propiedades-renta/16norte-cuartos/1.webp`,
        fotos: 5,
        zip: `https://bjzwbpkkazhczwtsxtey.supabase.co/storage/v1/object/public/fotos-propiedades/propiedades-renta/16norte-cuartos/fotos-16-norte-cuartos.zip`
    },
    {  // ⭐ Nueva del dashboard
        id: 'oficina-2-norte',
        tipo: 'renta',
        categoria: 'Oficina',
        titulo: 'Oficina/Consultorio Col. Zaragoza',
        ubicacion: `Privada de 2 norte #233, Col. Zaragoza, Tehuacán, Puebla`,
        precio: 5000,
        precioTexto: '$5,000/mes',
        imagen: `https://bjzwbpkkazhczwtsxtey.supabase.co/storage/v1/object/public/fotos-propiedades/propiedades-renta/consultorios-2-norte/1.webp`,
        fotos: 2,
        zip: `https://bjzwbpkkazhczwtsxtey.supabase.co/storage/v1/object/public/fotos-propiedades/propiedades-renta/consultorios-2-norte/fotos-consultorios-2-norte.zip`
    },
    {  // ⭐ Nueva del dashboard
        id: 'prueba-jardin-123',
        tipo: 'renta',
        categoria: 'Casa',
        titulo: 'Prueba Jardín 123',
        ubicacion: 'Calle de prueba 123',
        precio: 5000,
        precioTexto: '$5,000/mes',
        habitaciones: 3,
        banos: 2,
        imagen: ``,
        fotos: 5,
        zip: ``
    },
    {  // ⭐ Nueva del dashboard
        id: 'departamento-4-poniente',
        tipo: 'renta',
        categoria: 'Departamento',
        titulo: 'Departamento 4 Poniente',
        ubicacion: '4 Poniente, Centro, Tehuacán, Puebla',
        precio: 7000,
        precioTexto: '$7,000/mes',
        habitaciones: 3,
        banos: 1,
        imagen: `https://bjzwbpkkazhczwtsxtey.supabase.co/storage/v1/object/public/fotos-propiedades/propiedades-renta/departamento_centro/1.webp`,
        fotos: 13,
        zip: `https://bjzwbpkkazhczwtsxtey.supabase.co/storage/v1/object/public/fotos-propiedades/propiedades-renta/departamento_centro/departamento_centro.zip`
    },
    {  // ⭐ Nueva del dashboard
        id: 'suite-ejecutiva-hotel-boutique',
        tipo: 'renta',
        categoria: 'Departamento',
        titulo: 'Suite Ejecutiva Hotel Boutique',
        ubicacion: `1 Poniente, Hotel Boutique Tehuacán, Centro, Tehuacán, Puebla`,
        precio: 7500,
        precioTexto: '$7,500/mes',
        habitaciones: 1,
        banos: 1,
        imagen: `https://bjzwbpkkazhczwtsxtey.supabase.co/storage/v1/object/public/fotos-propiedades/propiedades-renta/suite_HB/1.webp`,
        fotos: 4,
        zip: `https://bjzwbpkkazhczwtsxtey.supabase.co/storage/v1/object/public/fotos-propiedades/propiedades-renta/suite_HB/suit_HB.zip`
    },
    {  // ⭐ Nueva del dashboard
        id: 'departamento-privada-1-poniente',
        tipo: 'renta',
        categoria: 'Departamento',
        titulo: 'Departamento Privada 1 Poniente',
        ubicacion: 'Privada de la 1 Poniente, Tehuacán, Puebla',
        precio: 8500,
        precioTexto: '$8,500/mes',
        habitaciones: 3,
        banos: 2,
        imagen: `https://bjzwbpkkazhczwtsxtey.supabase.co/storage/v1/object/public/fotos-propiedades/propiedades-renta/departamento-priv-1poniente/1.webp`,
        fotos: 10,
        zip: `https://bjzwbpkkazhczwtsxtey.supabase.co/storage/v1/object/public/fotos-propiedades/propiedades-renta/departamento-priv-1poniente/compressed.zip`
    },
    {  // ⭐ Nueva del dashboard
        id: 'loft-comercial-escamilla',
        tipo: 'renta',
        categoria: 'Local',
        titulo: 'Loft Comercial Escamilla',
        ubicacion: `Edificio Escamilla, Tres Oriente esquina con Segunda de Morelos, Centro, Tehuacán, Puebla`,
        precio: 10000,
        precioTexto: '$10,000/mes',
        banos: 1,
        imagen: `https://bjzwbpkkazhczwtsxtey.supabase.co/storage/v1/object/public/fotos-propiedades/propiedades-renta/loft_centro/1.webp`,
        fotos: 8,
        zip: `https://bjzwbpkkazhczwtsxtey.supabase.co/storage/v1/object/public/fotos-propiedades/propiedades-renta/loft_centro/loft_centro.zip`
    },
    {  // ⭐ Nueva del dashboard
        id: 'bodega-san-lorenzo',
        tipo: 'renta',
        categoria: 'Bodega',
        titulo: 'Bodega San Lorenzo',
        ubicacion: 'San Lorenzo, Tehuacán, Puebla',
        precio: 23000,
        precioTexto: '$23,000/mes',
        metros: 400,
        imagen: `https://bjzwbpkkazhczwtsxtey.supabase.co/storage/v1/object/public/fotos-propiedades/propiedades-renta/bodega-san-lorenzo400/1.webp`,
        fotos: 3,
        zip: `https://bjzwbpkkazhczwtsxtey.supabase.co/storage/v1/object/public/fotos-propiedades/propiedades-renta/bodega-san-lorenzo400/fotos-bodega-san-lorenzo400.zip`
    },
    {  // ⭐ Nueva del dashboard
        id: 'bodega-av-cuauhtemoc',
        tipo: 'renta',
        categoria: 'Bodega',
        titulo: 'Bodega Av. Cuauhtémoc',
        ubicacion: 'Av. Cuauhtémoc, Tehuacán, Puebla',
        precio: 35000,
        precioTexto: '$35,000/mes',
        metros: 720,
        imagen: `https://bjzwbpkkazhczwtsxtey.supabase.co/storage/v1/object/public/fotos-propiedades/propiedades-renta/bodega-av-cuauctemoc/1.webp`,
        fotos: 1,
        zip: `https://bjzwbpkkazhczwtsxtey.supabase.co/storage/v1/object/public/fotos-propiedades/propiedades-renta/bodega-av-cuauctemoc/fotos-bodega-cuauctemoc.zip`
    },
    {  // ⭐ Nueva del dashboard
        id: 'bodega-san-diego',
        tipo: 'renta',
        categoria: 'Bodega',
        titulo: 'Bodega San Diego',
        ubicacion: 'San Diego, Tehuacán, Puebla',
        precio: 60000,
        precioTexto: '$60,000/mes',
        metros: 900,
        imagen: `https://bjzwbpkkazhczwtsxtey.supabase.co/storage/v1/object/public/fotos-propiedades/propiedades-renta/bodega-san-diego/1.webp`,
        fotos: 12,
        zip: `https://bjzwbpkkazhczwtsxtey.supabase.co/storage/v1/object/public/fotos-propiedades/propiedades-renta/bodega-san-diego/fotos-bodega-san-diego.zip`
    },
    {  // ⭐ Nueva del dashboard
        id: 'bodega-santa-cruz-buenavista',
        tipo: 'renta',
        categoria: 'Bodega',
        titulo: 'Bodega Comercial Santa Cruz Buenavista',
        ubicacion: 'Calzada Zavaleta, Santa Cruz Buenavista, Puebla',
        precio: 670000,
        precioTexto: '$670,000/mes',
        metros: 2750,
        banos: 5,
        imagen: `https://bjzwbpkkazhczwtsxtey.supabase.co/storage/v1/object/public/fotos-propiedades/propiedades-renta/bodega-santa-cruz-buenavista/1.webp`,
        fotos: 13,
        zip: `https://bjzwbpkkazhczwtsxtey.supabase.co/storage/v1/object/public/fotos-propiedades/propiedades-renta/bodega-santa-cruz-buenavista/fotos-bodega-santa-cruz-buenavista.zip`
    },
    {  // ⭐ Nueva del dashboard
        id: 'terreno-parque-industrial2',
        tipo: 'venta',
        categoria: 'Terreno',
        titulo: 'Terreno Parque Industrial II',
        ubicacion: 'Santiago Miahuatlán, Tehuacán',
        precio: 300000,
        precioTexto: '$300,000',
        metros: 120,
        imagen: `https://bjzwbpkkazhczwtsxtey.supabase.co/storage/v1/object/public/fotos-propiedades/propiedades-venta/terreno-parque-industrial2/1.webp`,
        fotos: 7,
        zip: `https://bjzwbpkkazhczwtsxtey.supabase.co/storage/v1/object/public/fotos-propiedades/propiedades-venta/terreno-parque-industrial2/fotos-parque-industrial2.zip`
    },
    {  // ⭐ Nueva del dashboard
        id: 'terreno-antigua-magdalena',
        tipo: 'venta',
        categoria: 'Terreno',
        titulo: 'Terreno Antigua Magdalena',
        ubicacion: `Antigua Magdalena, San Lorenzo Teotipilco, Tehuacan, Puebla`,
        precio: 2950000,
        precioTexto: '$2,950,000',
        metros: 522,
        imagen: `https://bjzwbpkkazhczwtsxtey.supabase.co/storage/v1/object/public/fotos-propiedades/propiedades-venta/terreno-san-lorenzo/1.webp`,
        fotos: 3,
        zip: `https://bjzwbpkkazhczwtsxtey.supabase.co/storage/v1/object/public/fotos-propiedades/propiedades-venta/terreno-san-lorenzo/terreno_snlorenzo.zip`
    },
    {  // ⭐ Nueva del dashboard
        id: 'abchsk',
        tipo: 'venta',
        categoria: 'Departamento',
        titulo: 'ABChsk',
        ubicacion: 'Centro',
        precio: 5000000,
        precioTexto: '$5,000,000',
        metros: 666,
        habitaciones: 4,
        banos: 4,
        imagen: `Www.5.com`,
        fotos: 5,
        zip: `Www.5.com`
    },
    {  // ⭐ Nueva del dashboard
        id: 'casa-cinco-bosques',
        tipo: 'venta',
        categoria: 'Casa',
        titulo: 'Casa Cinco Bosques',
        ubicacion: 'Fracc. Cinco Bosques, Tehuacán',
        precio: 8000000,
        precioTexto: '$8,000,000',
        metros: 400,
        habitaciones: 4,
        banos: 3,
        imagen: `https://bjzwbpkkazhczwtsxtey.supabase.co/storage/v1/object/public/fotos-propiedades/propiedades-venta/casa-cinco-bosques/1.webp`,
        fotos: 37,
        zip: `https://bjzwbpkkazhczwtsxtey.supabase.co/storage/v1/object/public/fotos-propiedades/propiedades-venta/casa-cinco-bosques/fotos-cinco-bosques.zip`
    },
    {  // ⭐ Nueva del dashboard
        id: 'casa-francisco-sarabia-venta',
        tipo: 'venta',
        categoria: 'Casa',
        titulo: 'Casa Francisco Sarabia',
        ubicacion: 'Tehuacán, Puebla',
        precio: 14000000,
        precioTexto: '$14,000,000',
        metros: 404,
        habitaciones: 4,
        banos: 3,
        imagen: `https://bjzwbpkkazhczwtsxtey.supabase.co/storage/v1/object/public/fotos-propiedades/propiedades-venta/casa-francisco-sarabia/1.webp`,
        fotos: 14,
        zip: `https://bjzwbpkkazhczwtsxtey.supabase.co/storage/v1/object/public/fotos-propiedades/propiedades-venta/casa-francisco-sarabia/fotos-sarabia.zip`
    },
];

// Función para crear tarjeta de propiedad
function crearTarjetaPropiedad(prop) {
    const features = [];
    if (prop.metros) {
        features.push(`<span class="property-feature"><i class="fas fa-ruler-combined"></i> ${prop.metros} m²</span>`);
    }
    if (prop.habitaciones) {
        features.push(`<span class="property-feature"><i class="fas fa-bed"></i> ${prop.habitaciones} rec.</span>`);
    }
    if (prop.banos) {
        features.push(`<span class="property-feature"><i class="fas fa-bath"></i> ${prop.banos} baños</span>`);
    }

    return `
        <div class="property-card">
            <div class="property-image">
                <img src="${prop.imagen}" alt="${prop.titulo}" loading="lazy" onerror="this.src='https://via.placeholder.com/400x300/8B1E3F/FFFFFF?text=IRE+Inmobiliaria'">
                <span class="property-badge">${prop.categoria}</span>
            </div>
            <div class="property-info">
                <div class="property-type">${prop.tipo === 'venta' ? 'En Venta' : 'En Renta'}</div>
                <h3 class="property-title">${prop.titulo}</h3>
                <div class="property-location">
                    <i class="fas fa-map-marker-alt"></i>
                    ${prop.ubicacion}
                </div>
                <div class="property-price">${prop.precioTexto}</div>
                <div class="property-features">
                    ${features.join('')}
                </div>
                <div class="property-actions">
                    <a href="propiedad.html?id=${prop.id}" class="btn btn-primary">
                        <i class="fas fa-eye"></i> Ver detalles
                    </a>
                    <a href="https://wa.me/522228515440?text=Hola,%20estoy%20interesado%20en%20${encodeURIComponent(prop.titulo)}" class="btn btn-outline" target="_blank">
                        <i class="fab fa-whatsapp"></i> Contactar
                    </a>
                </div>
            </div>
        </div>
    `;
}

// Función para cargar propiedades
function cargarPropiedades() {
    const ventaGrid = document.getElementById('venta-grid');
    const rentaGrid = document.getElementById('renta-grid');
    
    if (ventaGrid) {
        const propiedadesVenta = propiedades.filter(p => p.tipo === 'venta');
        ventaGrid.innerHTML = propiedadesVenta.map(crearTarjetaPropiedad).join('');
    }
    
    if (rentaGrid) {
        const propiedadesRenta = propiedades.filter(p => p.tipo === 'renta');
        rentaGrid.innerHTML = propiedadesRenta.map(crearTarjetaPropiedad).join('');
    }
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    cargarPropiedades();
});