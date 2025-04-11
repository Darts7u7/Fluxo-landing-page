# Sistema de Gestión de Negocios - NoCD

## Descripción General

NoCD es un sistema integral de gestión de negocios SaaS (Software as a Service) que permite administrar múltiples negocios a través de una plataforma centralizada. Cada negocio (tenant) posee su propio espacio privado con datos aislados y funcionalidades específicas.

## Tecnologías Utilizadas

- **Backend**: Laravel (PHP)
- **Frontend**: Vue.js con Inertia.js
- **Base de Datos**: MySQL
- **Estilo**: Tailwind CSS
- **Autenticación**: Laravel Sanctum

## Características Implementadas

### Arquitectura Multi-tenant

- **Aislamiento de datos**: Cada negocio accede únicamente a su propia información
- **Identificación por slug**: Acceso a través de URL personalizada con el slug del negocio
- **Configuración por tenant**: Cada negocio puede personalizar sus datos básicos

### Autenticación y Control de Acceso

- **Registro de tenants**: Propietarios pueden registrar nuevos negocios
- **Sistema de invitaciones**: Propietarios pueden invitar empleados a unirse
- **Gestión de roles**: Definición y asignación de roles de usuario
- **Control de permisos**: Restricción de acceso a funcionalidades según rol

### Gestión de Empleados

- **Invitaciones por correo**: Envío de códigos de invitación
- **Control de invitaciones**: Visualización y revocación de invitaciones pendientes
- **Administración de personal**: Listado y gestión de empleados
- **Roles personalizables**: Creación y configuración de roles

### Punto de Venta (POS)

- **Interfaz intuitiva**: Diseño optimizado para operaciones rápidas
- **Catálogo de productos**: Visualización de productos disponibles
- **Carrito de compra**: Gestión dinámica de ítems
- **Procesamiento de ventas**:
  - Soporte para pagos en efectivo y tarjeta
  - Cálculo automático de cambio
  - Generación de tickets de venta
- **Historial de ventas**: Registro y consulta de transacciones
- **Cancelación de ventas**: Proceso para anular transacciones con registro de motivo

### Gestión de Inventario

- **Catálogo de productos**:
  - Información detallada (nombre, descripción, precio)
  - Gestión de imágenes
  - Control de stock
- **Categorización**: Organización de productos por categorías
- **Movimientos de stock**: Registro automático de entradas y salidas
- **Importación y exportación**: Funcionalidad para importar/exportar productos mediante Excel

### Análisis y Reportes

- **Dashboard**: Visualización de métricas clave del negocio
- **Historial de ventas**: Registro detallado con filtros por fecha, método de pago y estado
- **Exportación de datos**: Generación de reportes en formato Excel

### Configuración del Negocio

- **Datos fiscales**: Gestión de información fiscal y legal (RUC, dirección, teléfono)
- **Personalización**: Configuración de nombre, logotipo y datos de contacto
- **Preferencias del sistema**: Configuración de moneda y otras opciones básicas

### Seguridad

- **Verificación de email**: Proceso de validación de correos electrónicos
- **Protección de rutas**: Middleware para asegurar acceso controlado
- **Separación de datos**: Cada negocio solo accede a su información
- **Registro de actividad**: Seguimiento de acciones de los empleados

## Estructura del Sistema

- **Modelo de tenancy**: Basado en separación lógica con filtrado por tenant_id
- **Frontend moderno**: Interfaz SPA (Single Page Application) con Vue.js
- **API integrada**: Endpoints para comunicación entre backend y frontend
- **Caché inteligente**: Almacenamiento en caché para optimizar rendimiento
- **Transacciones seguras**: Operaciones de BD protegidas con transacciones

## Características Técnicas

- **Procesamiento asíncrono**: Carga dinámica de datos con Axios
- **Componentes reutilizables**: Arquitectura modular para facilitar mantenimiento
- **Validación en múltiples capas**: Tanto en cliente como en servidor
- **Navegación fluida**: Cambios de página sin recarga completa (SPA)
- **Responsive design**: Adaptabilidad a diferentes dispositivos

## Licencia

Este software está protegido bajo una [Licencia de Uso Exclusivo](LICENSE) que restringe su uso únicamente a fluxo. Se prohíbe estrictamente la distribución, copia, modificación o uso de este software por cualquier persona o entidad que no sea fluxo.

La infracción de los términos de la licencia puede resultar en acciones legales y penalizaciones económicas considerables.

---

*El sistema se encuentra en desarrollo activo, con nuevas características implementándose regularmente.*
