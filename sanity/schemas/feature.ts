export default {
  name: 'feature',
  title: 'Características',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Descripción',
      type: 'text',
      validation: (Rule: any) => Rule.required().max(200),
    },
    {
      name: 'icon',
      title: 'Ícono (nombre Lucide)',
      type: 'string',
      description: 'Introduce el nombre del ícono de Lucide, por ejemplo: "ShoppingCart", "FileText", etc.',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'order',
      title: 'Orden',
      type: 'number',
      description: 'Define el orden de aparición de la característica',
      validation: (Rule: any) => Rule.required().integer().positive(),
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
    },
  },
} 