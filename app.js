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
        id: 'terreno-bicentenarios',
        tipo: 'venta',
        categoria: 'Terreno',
        titulo: 'Terreno Bicentenarios',
        ubicacion: 'Santo Domingo, Tehuacán',
        precio: 588000,
        precioTexto: '$588,000',
        metros: 98,
        habitaciones: null,
        banos: null,
        imagen: `${SUPABASE_URL}/storage/v1/object/public/fotos-propiedades/propiedades-venta/terreno-bicentenarios/1.webp`,
        fotos: 4,
        zip: `${SUPABASE_URL}/storage/v1/object/public/fotos-propiedades/propiedades-venta/terreno-bicentenarios/fotosBicentenario.zip`
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
        id: 'jazmin',
        tipo: 'renta',
        categoria: 'Casa',
        titulo: 'Casa Jazmín',
        ubicacion: 'Col. Jacarandas, Tehuacán',
        precio: 5300,
        precioTexto: '$5,300/mes',
        metros: 92,
        habitaciones: 2,
        banos: 1,
        imagen: `${SUPABASE_URL}/storage/v1/object/public/fotos-propiedades/propiedades-renta/jazmin/1.webp`,
        fotos: 10,
        zip: `${SUPABASE_URL}/storage/v1/object/public/fotos-propiedades/propiedades-renta/jazmin/fotos-jazmin.zip`
    },
    {
        id: 'departamento-valsequillo',
        tipo: 'renta',
        categoria: 'Departamento',
        titulo: 'Departamento Valsequillo',
        ubicacion: 'Blvd. Valsequillo, Tehuacán',
        precio: 5000,
        precioTexto: '$5,000/mes',
        metros: 60,
        habitaciones: 2,
        banos: 1,
        imagen: `${SUPABASE_URL}/storage/v1/object/public/fotos-propiedades/propiedades-renta/departamento-valsequillo/1.webp`,
        fotos: 8,
        zip: `${SUPABASE_URL}/storage/v1/object/public/fotos-propiedades/propiedades-renta/departamento-valsequillo/fotos-valsequillo.zip`
    },
    {
        id: '16norte-cuartos',
        tipo: 'renta',
        categoria: 'Cuarto',
        titulo: 'Cuartos 16 Norte',
        ubicacion: 'Col. Aquiles Serdán, Tehuacán',
        precio: 2500,
        precioTexto: '$2,500/mes',
        metros: 15,
        habitaciones: 1,
        banos: 1,
        imagen: `${SUPABASE_URL}/storage/v1/object/public/fotos-propiedades/propiedades-renta/16norte-cuartos/1.webp`,
        fotos: 5,
        zip: `${SUPABASE_URL}/storage/v1/object/public/fotos-propiedades/propiedades-renta/16norte-cuartos/fotos-16-norte-cuartos.zip`
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
                    <a href="${prop.zip}" class="btn btn-primary" download>
                        <i class="fas fa-download"></i> Fotos
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
