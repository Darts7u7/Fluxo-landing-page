export default {
  name: 'pricingPlan',
  title: 'Planes de Precios',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nombre',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Descripción',
      type: 'text',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'monthlyPrice',
      title: 'Precio Mensual',
      type: 'number',
      validation: (Rule: any) => Rule.required().precision(2),
    },
    {
      name: 'yearlyPrice',
      title: 'Precio Anual',
      type: 'number',
      validation: (Rule: any) => Rule.required().precision(2),
    },
    {
      name: 'currency',
      title: 'Moneda',
      type: 'string',
      initialValue: 'S/',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'features',
      title: 'Características',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule: any) => Rule.required().min(1),
    },
    {
      name: 'highlighted',
      title: 'Destacado',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'buttonText',
      title: 'Texto del botón',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'discount',
      title: 'Texto de descuento',
      type: 'string',
      description: 'Por ejemplo: "Ahorra S/XX al año"',
    },
    {
      name: 'setupFee',
      title: 'Tarifa de configuración',
      type: 'string',
      description: 'Por ejemplo: "Configuración inicial única: S/XXX"',
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'monthlyPrice',
    },
    prepare({ title, subtitle }: { title: string; subtitle: number }) {
      return {
        title,
        subtitle: `Precio mensual: ${subtitle}`,
      }
    },
  },
} 