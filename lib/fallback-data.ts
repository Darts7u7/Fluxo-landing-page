/**
 * Datos de respaldo para cuando la API de Sanity no esté disponible
 * Estos datos permiten que la aplicación funcione incluso cuando hay problemas con Sanity
 */

// Datos de respaldo para características
export const fallbackFeatures = [
  {
    _id: 'fallback-feature-1',
    title: 'Punto de Venta (POS)',
    description: 'Sistema de punto de venta fácil de usar con compatibilidad para múltiples dispositivos.',
    icon: 'ShoppingCart',
    order: 1
  },
  {
    _id: 'fallback-feature-2',
    title: 'Gestión de Inventario',
    description: 'Control de stock en tiempo real con alertas de bajo inventario y seguimiento de productos.',
    icon: 'Package',
    order: 2
  },
  {
    _id: 'fallback-feature-3',
    title: 'Análisis y Reportes',
    description: 'Informes detallados sobre ventas, inventario y comportamiento de clientes.',
    icon: 'BarChart',
    order: 3
  },
];

// Datos de respaldo para planes de precios
export const fallbackPricingPlans = [
  {
    _id: 'fallback-pricing-1',
    name: 'Básico',
    description: 'Perfecto para pequeños negocios que están comenzando',
    monthlyPrice: 29,
    yearlyPrice: 290,
    currency: 'USD',
    features: [
      'Punto de venta básico',
      'Gestión de inventario',
      'Hasta 1,000 productos',
      'Soporte por email'
    ],
    highlighted: false,
    buttonText: 'Comenzar prueba gratuita'
  },
  {
    _id: 'fallback-pricing-2',
    name: 'Profesional',
    description: 'Para negocios en crecimiento que necesitan más funcionalidades',
    monthlyPrice: 49,
    yearlyPrice: 490,
    currency: 'USD',
    features: [
      'Todo lo del plan Básico',
      'Múltiples ubicaciones',
      'Hasta 10,000 productos',
      'Facturación electrónica',
      'Soporte prioritario'
    ],
    highlighted: true,
    buttonText: 'Comenzar prueba gratuita',
    discount: '20% de descuento anual'
  },
];

// Datos de respaldo para FAQs
export const fallbackFaqs = [
  {
    _id: 'fallback-faq-1',
    question: '¿Cómo puedo comenzar a usar Fluxo?',
    answer: 'Es fácil comenzar. Regístrate para una prueba gratuita de 14 días, configura tu cuenta y comienza a usar todas las características de inmediato.',
    category: 'General',
    order: 1,
    isActive: true
  },
  {
    _id: 'fallback-faq-2',
    question: '¿Puedo cancelar mi suscripción en cualquier momento?',
    answer: 'Sí, puedes cancelar tu suscripción en cualquier momento desde el panel de administración sin penalizaciones.',
    category: 'Facturación',
    order: 2,
    isActive: true
  },
];

// Datos de respaldo para posts de blog
export const fallbackBlogPosts = [
  {
    _id: 'fallback-post-1',
    title: 'Cómo aumentar las ventas de tu negocio con un buen sistema POS',
    slug: { current: 'aumentar-ventas-sistema-pos' },
    excerpt: 'Descubre cómo un buen sistema de punto de venta puede ayudar a incrementar tus ventas y mejorar la experiencia del cliente.',
    publishedAt: '2023-11-15',
    author: { 
      name: 'Equipo Fluxo', 
      image: { asset: { url: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=300&h=300&fit=crop' } }
    },
    categories: [{ title: 'Ventas' }, { title: 'Tecnología' }]
  },
]; 