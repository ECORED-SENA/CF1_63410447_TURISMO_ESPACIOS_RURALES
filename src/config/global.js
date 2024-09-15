export default {
  global: {
    componenteFormativo: 'El espacio rural y las nuevas posibilidades',
    descripcionCurso:
      'El componente formativo analiza la transformación del espacio rural, destacando su evolución hacia nuevas funciones más allá de la agricultura. Se abordan conceptos como la nueva ruralidad, multifuncionalidad, y empleo rural no agrícola. Se enfatiza la necesidad de equilibrio territorial y ecológico, así como la importancia de establecer relaciones sostenibles entre lo rural y lo urbano para el desarrollo regional.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Panorama y crisis del mundo rural',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'La nueva ruralidad: conceptos y características',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo:
          'Opciones y oportunidades que plantea y propone la nueva ruralidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Definición de espacio rural',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Tipologías del espacio físico',
            hash: 't_3_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Panorama y crisis del mundo rural',
      referencia:
        'Noticiero 90 Minutos (2024). Crisis en el sector del turismo en zona rural de Jamundí: Este es el panorama. [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=DXv_I5ILWs4',
    },
    {
      tema: 'La nueva ruralidad: conceptos y características',
      referencia:
        'Comisión Económica para América Latina y el Caribe (2023). Proyecto Nueva Ruralidad CEPAL-FIDA. [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=9w2UptkFe_M',
    },
    {
      tema: 'Opciones y oportunidades que plantea y propone la nueva ruralidad',
      referencia:
        'Reyes Guarnizo, A. B., & Díaz Riveros, C. A. (2024). Ruralidad y gobernanza de las comunidades, en clave de nuevas ruralidades. Territorios, (50), 1-35.',
      tipo: 'Artículo',
      link: 'http://www.scielo.org.co/pdf/terri/n50/2215-7484-terri-50-e10.pdf',
    },
    {
      tema: 'Tipologías del espacio físico',
      referencia:
        'Reig Martínez, E., Goerlich Gisbert, F. J., & Cantarino Martí, I. (2016). Delimitación de áreas rurales y urbanas a nivel local [Libro electrónico]. Fundación BBVA.',
      tipo: 'Libro',
      link:
        'https://www.google.com.co/books/edition/Delimitaci%C3%B3n_de_%C3%A1reas_rurales_y_urbana/6qqSCwAAQBAJ?hl=es-419&gbpv=1',
    },
  ],
  glosario: [
    {
      termino: 'Nueva ruralidad',
      significado:
        'redefine el espacio rural para incluir actividades más allá de la agricultura tradicional, como el turismo y la conservación ambiental.',
    },
    {
      termino: 'Multifuncionalidad',
      significado:
        'uso diversificado del suelo rural para mantener a la población en su lugar de origen, promoviendo actividades económicas alternativas.',
    },
    {
      termino: 'Espacio potencial',
      significado:
        'área aún no desarrollada pero con características adecuadas para futuros usos turísticos u otras actividades.',
    },
    {
      termino: 'Espacio artificial',
      significado:
        'área completamente desarrollada por el hombre, típicamente urbana, donde estructuras y servicios son creados para satisfacer necesidades humanas.',
    },
    {
      termino: 'Espacio natural adaptado',
      significado:
        'espacio natural modificado por la intervención humana para usos agrícolas, turísticos o recreativos, manteniendo un equilibrio con la naturaleza.',
    },
    {
      termino: 'Espacio prístino',
      significado:
        'área natural que se mantiene en su estado original, sin intervención humana significativa, como parques naturales.',
    },
    {
      termino: 'Espacio vital',
      significado:
        'área necesaria para la supervivencia de especies humanas y animales, proporcionando un entorno favorable para la vida.',
    },
    {
      termino: 'Empleo rural no agrícola',
      significado:
        'actividades económicas en áreas rurales que no están relacionadas con la agricultura, como la agroindustria y los servicios.',
    },
    {
      termino: 'Equilibrio territorial',
      significado:
        'distribución equitativa de la población y actividades económicas entre áreas urbanas y rurales, evitando concentración y despoblamiento.',
    },
    {
      termino: 'Turismo educativo',
      significado:
        'actividades turísticas orientadas a la educación y sensibilización sobre temas ambientales, culturales o históricos, promoviendo un mayor entendimiento del entorno rural.',
    },
  ],
  referencias: [
    {
      referencia:
        'Boullon, R. (1985). Planificación del Espacio Turístico. México: Editorial Trillas.',
      link: '',
    },
    {
      referencia:
        'Curso de Alta Dirección en Turismo Rural. Módulo 1. (2003). Buenos Aires: Universidad de Buenos Aires, Facultad de Agronomía. Unidad de Turismo Rural.',
      link: '',
    },
    {
      referencia:
        'Lozato, J. P. (1991). Geografía del Turismo: Del espacio contemplado al espacio consumido. Barcelona: Editorial Masson.',
      link: '',
    },
    {
      referencia:
        'Pérez, E. (2001). Hacia una nueva visión de lo rural. Artículo parte I del libro: ¿Una nueva ruralidad en América Latina? Buenos Aires: CLACSO.',
      link: '',
    },
    {
      referencia:
        'Cardoso, A. (2024). Turismo y nueva ruralidad: permanencia y cambio en torno a la práctica turística. Antropología Americana, 9(17). ',
      link: 'https://revistasipgh.org/index.php/anam/article/view/3569',
    },
    {
      referencia:
        'Reyes Guarnizo, A. B., y Díaz Riveros, C. A. (2024). Ruralidad y gobernanza de las comunidades, en clave de nuevas ruralidades. territorios, (50).',
      link:
        'http://www.scielo.org.co/scielo.php?pid=S0123-84182024000100009&script=sci_arttext',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Julio Hernán Beltrán Peñuela',
          cargo: 'Experto temático',
          centro: 'Regional Cundinamarca Centro de Desarrollo Agroempresarial',
        },
        {
          nombre: 'Paola Alexandra Moya',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carlos Julian Ramirez Benitez',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Edgar Mauricio Cortés García',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
