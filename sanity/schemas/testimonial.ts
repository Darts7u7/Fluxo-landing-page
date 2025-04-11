export default {
  name: 'testimonial',
  title: 'Testimonios',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nombre',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'role',
      title: 'Cargo',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'company',
      title: 'Empresa',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Imagen',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          title: 'Texto alternativo',
          type: 'string',
        },
      ],
    },
    {
      name: 'quote',
      title: 'Testimonio',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'rating',
      title: 'Calificación (1-5)',
      type: 'number',
      validation: (Rule: any) => Rule.required().min(1).max(5),
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'company',
      media: 'image',
    },
  },
} 