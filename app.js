// IRE Inmobiliaria - JavaScript
// Carga propiedades desde Supabase

const SUPABASE_URL = 'https://bjzwbpkkazhczwtsxtey.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJqendicGtrYXpoY3p3dHN4dGV5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc4MTI2OTEsImV4cCI6MjA5MzM4ODY5MX0.WrxPAKM4rD0frB5jZB_Lr-OpvcqnpDLqci7urOqzH6s';

// Datos de propiedades (estructura base)
const propiedades = [
    {
        id: 'terreno-parque-industrial2',
        tipo: 'venta',
        categoria: 'Terreno',
        titulo: 'Terreno Parque Industrial II',
        ubicacion: 'Santiago Miahuatlán, Tehuacán',
        precio: 300000,
        precioTexto: '$300,000',
        metros: 120,
        habitaciones: null,
        banos: null,
        imagen: `${SUPABASE_URL}/storage/v1/object/public/fotos-propiedades/propiedades-venta/terreno-parque-industrial2/1.webp`,
        fotos: 7,
        zip: `${SUPABASE_URL}/storage/v1/object/public/fotos-propiedades/propiedades-venta/terreno-parque-industrial2/fotos-parque-industrial2.zip`
    },
        {
        id: 'casa-valle-luna',
        tipo: 'venta',
        categoria: 'Casa',
        titulo: 'Casa Valle de la Luna',
        ubicacion: 'Valle del Sol, Tehuacán',
        precio: 5200000,
        precioTexto: '$5,200,000',
        metros: 186,
        habitaciones: 3,
        banos: 2,
        imagen: `${SUPABASE_URL}/storage/v1/object/public/fotos-propiedades/propiedades-venta/casa-valle-luna/1.webp`,
        fotos: 13,
        zip: `${SUPABASE_URL}/storage/v1/object/public/fotos-propiedades/propiedades-venta/casa-valle-luna/fosos-valle-luna.zip`
    },
    {
        id: 'casa-francisco-sarabia',
        tipo: 'venta',
        categoria: 'Casa',
        titulo: 'Casa Francisco Sarabia',
        ubicacion: 'Tehuacán, Puebla',
        precio: 14000000,
        precioTexto: '$14,000,000',
        metros: 404,
        habitaciones: 4,
        banos: 3,
        imagen: `${SUPABASE_URL}/storage/v1/object/public/fotos-propiedades/propiedades-venta/casa-francisco-sarabia/1.webp`,
        fotos: 14,
        zip: `${SUPABASE_URL}/storage/v1/object/public/fotos-propiedades/propiedades-venta/casa-francisco-sarabia/fotos-sarabia.zip`
    },
    {
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
        imagen: `${SUPABASE_URL}/storage/v1/object/public/fotos-propiedades/propiedades-venta/casa-cinco-bosques/1.webp`,
        fotos: 37,
        zip: `${SUPABASE_URL}/storage/v1/object/public/fotos-propiedades/propiedades-venta/casa-cinco-bosques/fotos-cinco-bosques.zip`
    },
   {
    id: 'bodega-san-lorenzo',
    tipo: 'renta',
    categoria: 'Bodega',
    titulo: 'Bodega San Lorenzo',
    ubicacion: 'San Lorenzo, Tehuacán, Puebla',
    precio: 23000,
    precioTexto: '$23,000/mes',
    metros: 400,
    habitaciones: null,
    banos: null,
    imagen: `${SUPABASE_URL}/storage/v1/object/public/fotos-propiedades/propiedades-renta/bodega-san-lorenzo400/1.webp`,
    fotos: 3, 
    zip: `${SUPABASE_URL}/storage/v1/object/public/fotos-propiedades/propiedades-renta/bodega-san-lorenzo400/fotos-bodega-san-lorenzo400.zip`
},
    {
    id: 'bodega-san-diego',
    tipo: 'renta',
    categoria: 'Bodega',
    titulo: 'Bodega San Diego',
    ubicacion: 'San Diego, Tehuacán, Puebla',
    precio: 60000,
    precioTexto: '$60,000/mes',
    metros: 900,
    habitaciones: null,
    banos: null,
    imagen: `${SUPABASE_URL}/storage/v1/object/public/fotos-propiedades/propiedades-renta/bodega-san-diego/1.webp`,
    fotos: 12, 
    zip: `${SUPABASE_URL}/storage/v1/object/public/fotos-propiedades/propiedades-renta/bodega-san-diego/fotos-bodega-san-diego.zip`
    },
    {
    id: 'bodega-av-cuauhtemoc',
    tipo: 'renta',
    categoria: 'Bodega',
    titulo: 'Bodega Av. Cuauhtémoc',
    ubicacion: 'Av. Cuauhtémoc, Tehuacán, Puebla',
    precio: 35000,
    precioTexto: '$35,000/mes',
    metros: 720,
    habitaciones: null,
    banos: null,
    imagen: `${SUPABASE_URL}/storage/v1/object/public/fotos-propiedades/propiedades-renta/bodega-av-cuauctemoc/1.webp`,
    fotos: 1, 
    zip: `${SUPABASE_URL}/storage/v1/object/public/fotos-propiedades/propiedades-renta/bodega-av-cuauctemoc/fotos-bodega-cuauctemoc.zip`
    },{
    id: 'oficina-2-norte',
    tipo: 'renta',
    categoria: 'Oficina',
    titulo: 'Oficina/Consultorio Col. Zaragoza',
    ubicacion: 'Privada de 2 norte #233, Col. Zaragoza, Tehuacán, Puebla',
    precio: 5000,
    precioTexto: '$5,000/mes',
    metros: 0, // 
    habitaciones: null,
    banos: null,
    imagen: `${SUPABASE_URL}/storage/v1/object/public/fotos-propiedades/propiedades-renta/consultorios-2-norte/1.webp`,
    fotos: 2, 
    zip: `${SUPABASE_URL}/storage/v1/object/public/fotos-propiedades/propiedades-renta/consultorios-2-norte/fotos-consultorios-2-norte.zip`
},{
    id: 'departamento-privada-1-poniente',
    tipo: 'renta',
    categoria: 'Departamento',
    titulo: 'Departamento Privada 1 Poniente',
    ubicacion: 'Privada de la 1 Poniente, Tehuacán, Puebla',
    precio: 8500,
    precioTexto: '$8,500/mes',
    metros: 0, 
    habitaciones: 3,
    banos: 2,
    imagen: `${SUPABASE_URL}/storage/v1/object/public/fotos-propiedades/propiedades-renta/departamento-priv-1poniente/photo_4972208000370150671_y.webp`,
    fotos: 10, // 
    zip: `${SUPABASE_URL}/storage/v1/object/public/fotos-propiedades/propiedades-renta/departamento-priv-1poniente/compressed.zip`
},{
    id: 'espacio-comercial-centro',
    tipo: 'renta',
    categoria: 'Local Comercial',
    titulo: 'Espacio Comercial con Terraza Centro',
    ubicacion: '1 Poniente No. 135, Col. Centro, Tehuacán, Puebla',
    precio: 15000,
    precioTexto: '$15,000/mes',
    metros: 65,
    habitaciones: null,
    banos: null,
    imagen: `${SUPABASE_URL}/storage/v1/object/public/fotos-propiedades/propiedades-renta/terraza-royal-place/1.webp`,
    fotos: 7, 
    zip: `${SUPABASE_URL}/storage/v1/object/public/fotos-propiedades/propiedades-renta/terraza-royal-place/fotos-terraza-royal-place.zip`
},{
    id: 'local-oficina-centro',
    tipo: 'renta',
    categoria: 'Local Comercial',
    titulo: 'Local para Oficina Centro',
    ubicacion: '1 Poniente No. 135, Col. Centro, Tehuacán, Puebla',
    precio: 7500,
    precioTexto: '$7,500/mes',
    metros: 0, 
    habitaciones: null,
    banos: null,
    imagen: `${SUPABASE_URL}/storage/v1/object/public/fotos-propiedades/propiedades-renta/oficina-royal-place/1.webp`,
    fotos: 2, 
    zip: `${SUPABASE_URL}/storage/v1/object/public/fotos-propiedades/propiedades-renta/oficina-royal-place/fotos-oficina-royal-place.zip`
},{
    id: 'bodega-santa-cruz-buenavista',
    tipo: 'renta',
    categoria: 'Bodega',
    titulo: 'Bodega Comercial Santa Cruz Buenavista',
    ubicacion: 'Calzada Zavaleta, Santa Cruz Buenavista, Puebla',
    precio: 670000,
    precioTexto: '$670,000/mes',
    metros: 2750,
    habitaciones: null,
    banos: 5,
    imagen: `${SUPABASE_URL}/storage/v1/object/public/fotos-propiedades/propiedades-renta/bodega-santa-cruz-buenavista/1.webp`,
    fotos: 13, 
    zip: `${SUPABASE_URL}/storage/v1/object/public/fotos-propiedades/propiedades-renta/bodega-santa-cruz-buenavista/fotos-bodega-santa-cruz-buenavista.zip`
}
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

// Manejo del formulario de contacto
document.addEventListener('DOMContentLoaded', function() {
    // Cargar propiedades
    cargarPropiedades();
    
    // Manejar envío del formulario
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nombre = document.getElementById('nombre').value;
            const telefono = document.getElementById('telefono').value;
            const email = document.getElementById('email').value;
            const mensaje = document.getElementById('mensaje').value;
            
            // Crear mensaje para WhatsApp
            const texto = `Hola, soy ${nombre}.\\nTel: ${telefono}\\nEmail: ${email || 'No proporcionado'}\\n\\nMensaje: ${mensaje}`;
            const url = `https://wa.me/522228515440?text=${encodeURIComponent(texto)}`;
            
            // Abrir WhatsApp
            window.open(url, '_blank');
            
            // Resetear formulario
            contactForm.reset();
            
            // Mostrar confirmación
            alert('¡Gracias por tu mensaje! Te redirigimos a WhatsApp para continuar la conversación.');
        });
    }
    
    // Smooth scroll para navegación
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
        }
    });
    
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }
});

// Función para formatear precios
function formatearPrecio(precio) {
    return new Intl.NumberFormat('es-MX', {
        style: 'currency',
        currency: 'MXN',
        minimumFractionDigits: 0
    }).format(precio);
}
