import type { Dictionary } from './en'

const es: Dictionary = {
  meta: {
    tagline: 'Atención médica en China para pacientes internacionales',
    description:
      'YiLu Health ayuda a pacientes internacionales a acceder a los principales hospitales de China: valoración del caso, citas, documentación para el visado, intérpretes, apoyo con los pagos y seguimiento tras el regreso.',
  },
  nav: {
    treatments: 'Tratamientos',
    hospitals: 'Hospitales',
    visa: 'Visado y entrada',
    costs: 'Costes',
    faq: 'Preguntas',
    contact: 'Contacto',
    cta: 'Valoración gratuita',
    menu: 'Menú',
    close: 'Cerrar',
    language: 'Idioma',
    skip: 'Ir al contenido',
  },
  common: {
    reviewed: 'Información revisada el {date}',
    officialSources: 'Fuentes oficiales',
    learnMore: 'Más información',
    typicalStay: 'Estancia habitual',
  },
  home: {
    hero: {
      eyebrow: 'Atención médica en China',
      title: 'Los mejores hospitales de China, a su alcance.',
      subtitle:
        'Orientamos a pacientes internacionales hacia el hospital adecuado en China: valoramos su caso, gestionamos citas, documentación para el visado, intérpretes y pagos, y le acompañamos hasta el seguimiento tras su regreso.',
      primary: 'Solicitar valoración gratuita',
      secondary: 'Ver cómo funciona',
      notes: ['Valoración inicial gratuita', 'Sin compromiso', 'Confidencial'],
    },
    journey: {
      title: 'Un recorrido típico',
      note: 'Calendario orientativo: cada caso es distinto.',
      steps: [
        { when: 'Día 1', text: 'Usted envía su historial médico' },
        { when: 'Días 2–5', text: 'Opinión del especialista y presupuesto estimado' },
        { when: 'Semana 2', text: 'Cita y documentos para el visado' },
        { when: 'Llegada', text: 'Recogida, intérprete e ingreso en el hospital' },
        { when: 'Después', text: 'Informes traducidos y seguimiento a distancia' },
      ],
    },
    stats: {
      items: [
        { value: '1,28 M', label: 'de visitas de pacientes internacionales a grandes hospitales chinos en 2025' },
        { value: '+73,6 %', label: 'de crecimiento de esas visitas en tres años' },
        { value: '79', label: 'países con entrada sin visado a China continental (febrero de 2026)' },
        { value: '240 h', label: 'de tránsito sin visado para ciudadanos de 57 países' },
      ],
      source:
        'Fuentes: Comisión Nacional de Salud de China; Ministerio de Asuntos Exteriores de China; Administración Nacional de Inmigración.',
    },
    why: {
      title: 'Por qué los pacientes eligen China',
      subtitle: 'No solo por el precio: rapidez, volumen de experiencia y terapias difíciles de conseguir en otros lugares.',
      items: [
        {
          title: 'Esperas cortas',
          body: 'Las consultas con especialistas, las pruebas de imagen y las fechas de cirugía suelen organizarse en días o semanas, no en meses.',
        },
        {
          title: 'Terapias avanzadas',
          body: 'Terapia celular CAR-T, radioterapia con protones e iones pesados, cirugía asistida por robot y una oferta creciente de nuevos medicamentos.',
        },
        {
          title: 'Gran experiencia clínica',
          body: 'Los grandes hospitales universitarios tratan casos complejos a diario, con equipos multidisciplinares y departamentos internacionales propios.',
        },
        {
          title: 'Costes claros y competitivos',
          body: 'Los precios para pacientes privados suelen ser una fracción de los de Estados Unidos, y usted recibe un presupuesto por escrito antes de viajar.',
        },
        {
          title: 'Medicina tradicional china en su origen',
          body: 'Acupuntura, fitoterapia y rehabilitación en los principales hospitales de MTC, combinadas con diagnóstico moderno.',
        },
        {
          title: 'Entrada más sencilla',
          body: 'La entrada sin visado para muchos pasaportes, el tránsito sin visado de 240 horas y la tarjeta de llegada en línea facilitan los viajes médicos cortos.',
        },
      ],
    },
    treatments: {
      title: 'Para qué puede venir',
      subtitle: 'Desde un chequeo de un día hasta el tratamiento de cánceres complejos.',
      all: 'Ver todos los tratamientos',
    },
    process: {
      title: 'Cómo funciona',
      subtitle: 'Un único coordinador, desde su primer mensaje hasta el seguimiento en casa.',
      steps: [
        {
          title: 'Cuéntenos su caso',
          body: 'Envíe su diagnóstico, sus informes y sus objetivos mediante nuestro formulario. No hay que pagar nada.',
        },
        {
          title: 'Reciba opciones y un presupuesto',
          body: 'Consultamos a los hospitales adecuados y le enviamos la opinión de un especialista, un plan propuesto y una estimación de costes por escrito.',
        },
        {
          title: 'Prepare el viaje',
          body: 'Reservamos las citas, obtenemos la carta del hospital para el visado si la necesita y organizamos el alojamiento y la recogida en el aeropuerto.',
        },
        {
          title: 'Tratamiento con intérprete',
          body: 'Un coordinador y un intérprete médico le acompañan en el registro, las consultas, las pruebas y los pagos.',
        },
        {
          title: 'Seguimiento en casa',
          body: 'Regresa con sus informes traducidos y un plan de seguimiento, y organizamos revisiones a distancia con su médico.',
        },
      ],
    },
    destinations: {
      title: 'Dónde puede tratarse',
      subtitle: 'Le ayudamos a elegir entre los principales centros médicos de China según su enfermedad, no a partir de una lista fija.',
      cta: 'Ver hospitales y ciudades',
    },
    entry: {
      title: 'Entrar es más fácil de lo que cree',
      subtitle: 'China se ha abierto con rapidez desde 2024. La vía adecuada depende de su pasaporte y de su plan de tratamiento.',
      items: [
        {
          title: '30 días sin visado',
          body: 'Para pasaportes ordinarios de unos 50 países, además de los países con acuerdos de exención recíproca.',
        },
        {
          title: 'Hainan: el tratamiento médico está permitido',
          body: 'Ciudadanos de unos 60 países pueden entrar en Hainan sin visado, y el tratamiento médico figura entre los motivos autorizados.',
        },
        {
          title: 'Visado S2 para tratamientos programados',
          body: 'Para tratamientos largos o programados, le ayudamos a obtener la carta del hospital que exige la solicitud de visado.',
        },
      ],
      cta: 'Leer la guía de visado y entrada',
    },
    cta: {
      title: '¿No sabe por dónde empezar?',
      body: 'Cuéntenos su situación. Le responderemos con opciones realistas, plazos y un presupuesto estimado, gratis y sin compromiso.',
      button: 'Solicitar valoración gratuita',
    },
  },
  treatments: {
    title: 'Tratamientos y servicios',
    intro:
      'Estos son los servicios por los que más nos preguntan los pacientes internacionales. Si el suyo no aparece, envíenos su caso: le diremos con franqueza si China es una buena opción.',
    popular: 'Lo más solicitado',
    items: {
      checkup: {
        name: 'Chequeos y cribado',
        summary:
          'Programas completos de uno o dos días, con pruebas de imagen y endoscopia en el mismo centro y revisión de los resultados con un especialista.',
        points: [
          'Chequeos ejecutivos completos',
          'Resonancia magnética, TC de baja dosis y PET-TC',
          'Gastroscopia y colonoscopia con sedación',
          'Cribado cardiológico y oncológico',
        ],
        stay: '1–3 días',
      },
      oncology: {
        name: 'Oncología',
        summary:
          'Centros oncológicos multidisciplinares con gran volumen de casos, radioterapia moderna y acceso a terapias celulares y dirigidas de aprobación reciente.',
        points: [
          'Terapia celular CAR-T para cánceres hematológicos',
          'Terapia con protones e iones pesados (iones de carbono)',
          'Terapia dirigida e inmunoterapia',
          'Cirugía mínimamente invasiva y asistida por robot',
        ],
        stay: '2–8 semanas, según el plan',
      },
      tcm: {
        name: 'Medicina tradicional china',
        summary:
          'Programas integrativos en los principales hospitales de MTC para el dolor, la recuperación y las enfermedades crónicas, junto con diagnóstico moderno.',
        points: [
          'Acupuntura y moxibustión',
          'Masaje terapéutico tuina',
          'Fitoterapia personalizada',
          'Rehabilitación tras un ictus o una cirugía',
        ],
        stay: '1–4 semanas',
      },
      dental: {
        name: 'Odontología',
        summary:
          'Implantes, ortodoncia y rehabilitación oral completa con sistemas de implantes internacionales y planificación digital.',
        points: ['Implantes dentales', 'Coronas y carillas', 'Ortodoncia y alineadores transparentes', 'Rehabilitación oral completa'],
        stay: '3–10 días; los implantes pueden requerir dos visitas',
      },
      eye: {
        name: 'Oftalmología',
        summary:
          'Centros oftalmológicos de gran volumen para cirugía refractiva con láser, cirugía de cataratas y estudio de la retina.',
        points: [
          'Cirugía refractiva SMILE y LASIK',
          'Lentes intraoculares ICL',
          'Cirugía de cataratas con lentes premium',
          'Estudio de retina y glaucoma',
        ],
        stay: '3–7 días',
      },
      ortho: {
        name: 'Traumatología y columna',
        summary:
          'Prótesis articulares, cirugía de columna y medicina deportiva, cada vez más asistidas por robot, seguidas de una rehabilitación estructurada.',
        points: [
          'Prótesis de cadera y de rodilla',
          'Cirugía de columna mínimamente invasiva',
          'Artroscopia y lesiones deportivas',
          'Programas de rehabilitación',
        ],
        stay: '2–4 semanas',
      },
      cardio: {
        name: 'Corazón y sistema vascular',
        summary:
          'Centros cardiovasculares nacionales que ofrecen tratamiento intervencionista y quirúrgico para cardiopatías complejas.',
        points: [
          'Coronariografía e implante de stents',
          'Reparación y sustitución valvular, incluido el TAVI',
          'Ablación de arritmias',
          'Bypass y cirugía de cardiopatías estructurales',
        ],
        stay: '1–3 semanas',
      },
      remote: {
        name: 'Segunda opinión a distancia',
        summary:
          'Antes de decidir si viaja, un especialista chino revisa su historial y sus pruebas de imagen y comenta las opciones con usted por videollamada.',
        points: [
          'Revisión de informes y pruebas de imagen',
          'Videoconsulta con intérprete',
          'Resumen escrito traducido',
          'Opciones de tratamiento y estimación de costes',
        ],
        stay: 'No es necesario viajar',
      },
    },
    notOffered: {
      title: 'Lo que no gestionamos',
      body: 'No gestionamos trasplantes de órganos, gestación subrogada ni terapias no aprobadas por las autoridades reguladoras chinas. China prohíbe el turismo de trasplantes, y trabajamos únicamente con instituciones médicas autorizadas.',
    },
  },
  hospitals: {
    title: 'Hospitales y destinos',
    intro:
      'Los hospitales más sólidos de China se concentran en unas pocas ciudades. A continuación figuran, por ciudad, instituciones conocidas por las que los pacientes internacionales preguntan a menudo.',
    disclaimer:
      'Los hospitales se citan solo a título informativo. Su mención no implica una colaboración ni una recomendación, y los servicios para pacientes internacionales varían de un hospital a otro. En cada caso confirmamos con el hospital que puede atenderle antes de que usted viaje.',
    types: {
      public: 'Hospital público',
      private: 'Hospital privado',
      zone: 'Hospital de la zona piloto',
    },
    tags: {
      general: 'Casos complejos y atención multidisciplinar',
      oncology: 'Oncología',
      proton: 'Protones e iones pesados',
      hematology: 'Hematología y terapia celular',
      cardio: 'Corazón y sistema vascular',
      neuro: 'Neurología y neurocirugía',
      ortho: 'Traumatología',
      eye: 'Oftalmología',
      dental: 'Odontología',
      tcm: 'Medicina tradicional china',
      surgery: 'Cirugía mínimamente invasiva',
      innovative: 'Fármacos y dispositivos aprobados en el extranjero',
      checkup: 'Chequeos',
    },
    cities: {
      beijing: {
        name: 'Pekín',
        blurb:
          'La capital concentra muchos de los mejores hospitales nacionales de China: la primera opción para diagnósticos complejos, cardiología, neurología y oncología.',
      },
      shanghai: {
        name: 'Shanghái',
        blurb:
          'La ciudad más internacional de China, con más de 20 hospitales públicos en su programa piloto de turismo médico internacional y sólidos hospitales privados. Destaca en oncología y en terapia con protones e iones pesados.',
      },
      guangzhou: {
        name: 'Cantón (Guangzhou)',
        blurb:
          'Un polo del sur del país, cerca de Hong Kong y del Sudeste Asiático, reconocido por la oncología, la oftalmología y la medicina tradicional china.',
      },
      shenzhen: {
        name: 'Shenzhen',
        blurb: 'Vecina de Hong Kong, con hospitales modernos gestionados según estándares internacionales y un cómodo acceso transfronterizo.',
      },
      hangzhou: {
        name: 'Hangzhou',
        blurb:
          'Sede de los hospitales universitarios de la Universidad de Zhejiang, fuertes en cirugía hepatobiliar y mínimamente invasiva, a aproximadamente una hora en tren de Shanghái.',
      },
      chengdu: {
        name: 'Chengdu',
        blurb:
          'El centro médico del oeste de China, con el Hospital de China Occidental (West China Hospital) a la cabeza, uno de los mayores y mejor clasificados del país.',
      },
      hainan: {
        name: 'Hainan · Boao Lecheng',
        blurb:
          'Una isla tropical con una zona piloto nacional donde los hospitales autorizados pueden utilizar fármacos y dispositivos innovadores aprobados en el extranjero pero aún no comercializados en el resto del país, y con una entrada sin visado que contempla el tratamiento médico.',
      },
    },
    choose: {
      title: 'Cómo le ayudamos a elegir',
      items: [
        {
          title: 'Primero, la especialidad',
          body: 'Partimos de los servicios con más experiencia en su enfermedad, no del renombre de un hospital.',
        },
        {
          title: 'Preparación para pacientes internacionales',
          body: 'Comprobamos el apoyo lingüístico, las unidades internacionales, las formas de pago y la rapidez con que el hospital puede atenderle.',
        },
        {
          title: 'Encaje práctico',
          body: 'Las conexiones aéreas, la vía de visado, el clima, las necesidades del acompañante y el presupuesto influyen en la recomendación final.',
        },
      ],
    },
  },
  visa: {
    title: 'Guía de visado y entrada',
    intro:
      'Entrar en China es mucho más sencillo desde 2024. La vía adecuada depende de su pasaporte, de la duración del tratamiento y del lugar donde vaya a tratarse. Esta página ofrece orientación general, no asesoramiento jurídico: confirme siempre con las fuentes oficiales antes de reservar.',
    options: [
      {
        title: 'Entrada sin visado durante 30 días',
        badge: 'Estancias cortas',
        body: 'Los titulares de pasaporte ordinario de unos 50 países —entre ellos España y la mayor parte de Europa, Argentina, Brasil, Chile, Perú, Uruguay, Reino Unido, Canadá, Australia, Nueva Zelanda, Japón, Corea del Sur, Rusia y varios Estados del Golfo— pueden entrar en China continental sin visado hasta 30 días. Los países con acuerdos de exención recíproca, como Singapur, Malasia, Tailandia, Emiratos Árabes Unidos, Catar y Kazajistán, disfrutan de facilidades similares.',
        points: [
          'Los motivos admitidos son negocios, turismo, visita a familiares y amigos, intercambios y tránsito.',
          'El tratamiento médico no figura entre esos motivos. Es habitual acudir a consultas o hacerse un chequeo durante una visita, pero si el tratamiento es el motivo principal del viaje, pregunte en la embajada o el consulado de China si debe solicitar un visado.',
          'La mayoría de estos regímenes están anunciados hasta el 31 de diciembre de 2026 (Rusia: 31 de diciembre de 2027). Compruebe si se han prorrogado antes de reservar.',
        ],
      },
      {
        title: 'Entrada sin visado a Hainan durante 30 días',
        badge: 'Tratamiento médico permitido',
        body: 'Los ciudadanos de unos 60 países pueden entrar en la provincia de Hainan sin visado hasta 30 días, y el tratamiento médico es un motivo expresamente autorizado. En Hainan se encuentra la Zona Piloto de Turismo Médico Internacional de Boao Lecheng.',
        points: [
          'La estancia se limita a la provincia de Hainan.',
          'Adecuada para chequeos, intervenciones programadas y terapias disponibles en Boao Lecheng.',
        ],
      },
      {
        title: 'Tránsito sin visado de 240 horas',
        badge: 'Hasta 10 días',
        body: 'Los ciudadanos de 57 países —entre ellos Estados Unidos, Indonesia y Vietnam— pueden permanecer hasta 240 horas en regiones designadas cuando viajan hacia un tercer país o región. Hong Kong y Macao cuentan como terceras regiones.',
        points: [
          'Necesita un billete confirmado a un tercer país o región dentro de las 240 horas.',
          'La entrada se realiza por puertos designados y debe permanecer en las provincias autorizadas.',
          'Tiempo suficiente para muchos chequeos, consultas y segundas opiniones.',
        ],
      },
      {
        title: 'Visado S2 para tratamiento médico',
        badge: 'Tratamiento programado',
        body: 'Para tratamientos programados, estancias largas o pasaportes sin exención de visado, la vía habitual es el visado S2 (asuntos privados de corta duración), respaldado por una carta de invitación o de admisión del hospital.',
        points: [
          'Documentos habituales: pasaporte, formulario de solicitud, fotografía y una carta del hospital que indique el diagnóstico, el tratamiento previsto, su duración y su coste estimado. Pueden pedirle que acredite medios económicos.',
          'El visado S2 cubre estancias de hasta 180 días. Un tratamiento más largo requiere un visado S1 y un permiso de residencia.',
          'Los familiares acompañantes pueden solicitarlo acreditando el parentesco.',
          'Una vez confirmado su plan de tratamiento, le ayudamos a obtener la carta del hospital.',
        ],
      },
      {
        title: 'Si el tratamiento se alarga',
        badge: 'Prórrogas',
        body: 'Puede solicitar en la Administración de Entradas y Salidas local una prórroga o un permiso de estancia antes de que venza su autorización, con un certificado de su hospital.',
        points: ['Presente la solicitud al menos siete días antes de que termine su estancia autorizada.'],
      },
    ],
    arrival: {
      title: 'Tarjeta de llegada en línea',
      body: 'Desde el 20 de noviembre de 2025, los viajeros extranjeros pueden rellenar la tarjeta de llegada en línea antes de aterrizar: en el sitio web de la Administración Nacional de Inmigración (NIA), en la aplicación «NIA 12367» o en sus miniprogramas de WeChat y Alipay. También puede rellenarla al llegar.',
    },
    checklist: {
      title: 'Antes de volar',
      items: [
        'Pasaporte con al menos seis meses de validez y páginas en blanco',
        'Confirmación de la cita o carta de invitación del hospital (impresa)',
        'Historial médico y pruebas de imagen, traducidos al inglés o al chino',
        'Medicamentos con receta en su envase original, con una carta del médico',
        'Datos de su seguro de viaje y de salud',
        'Dirección del alojamiento y un teléfono de contacto local',
        'Una tarjeta internacional, y Alipay o WeChat Pay configurado',
        'Billete de regreso o de continuación',
      ],
    },
    links: {
      nia: 'Administración Nacional de Inmigración',
      visaCenter: 'Centro de Servicio de Solicitud de Visados de China',
      arrivalCard: 'Tarjeta de llegada en línea',
    },
    disclaimer:
      'Las normas de visado cambian y las autoridades las aplican caso por caso. No somos una agencia de visados y no podemos garantizar la entrada. Las listas de países y las fechas anteriores son resúmenes; prevalecen los anuncios oficiales.',
  },
  costs: {
    title: 'Costes y pagos',
    intro:
      'Los pacientes internacionales pagan su atención de forma privada en China. Los precios de los departamentos internacionales y de los hospitales privados son más altos que las tarifas públicas locales, pero a menudo muy inferiores a los precios privados de Estados Unidos y de otros mercados caros.',
    table: {
      title: 'Rangos de precios orientativos',
      caption:
        'Rangos aproximados en dólares estadounidenses, elaborados a partir de informaciones publicadas en 2026. No son presupuestos: lo que cuenta es la estimación por escrito de su hospital.',
      service: 'Servicio',
      range: 'Rango orientativo en China',
      note: 'Conviene saber',
      rows: {
        checkup: {
          name: 'Chequeo médico completo',
          note: 'Depende de las pruebas de imagen (resonancia, TC, PET-TC) y de las endoscopias añadidas',
        },
        mri: { name: 'Resonancia magnética, una región', note: 'Suele estar disponible en pocos días' },
        implant: { name: 'Implante dental con corona, por diente', note: 'La marca del implante determina el precio' },
        vision: { name: 'Cirugía refractiva con láser, ambos ojos', note: 'SMILE o LASIK; las lentes ICL cuestan más' },
        proton: {
          name: 'Terapia con protones o iones pesados, tratamiento completo',
          note: 'Varía según el tipo de tumor y el número de sesiones',
        },
        cart: {
          name: 'Terapia celular CAR-T',
          note: 'Coste total publicado; en Estados Unidos es habitual que se citen totales superiores a 500 000 dólares',
        },
      },
    },
    pay: {
      title: 'Cómo pagar',
      items: [
        {
          title: 'Tarjetas internacionales',
          body: 'Visa y Mastercard se aceptan en la mayoría de los departamentos internacionales y hospitales privados.',
        },
        {
          title: 'Alipay y WeChat Pay',
          body: 'Ambas aplicaciones permiten vincular una tarjeta extranjera tras verificar el pasaporte: ideales para los gastos diarios. Hay límites por operación, por lo que las facturas elevadas suelen pagarse con tarjeta o por transferencia.',
        },
        {
          title: 'Transferencia bancaria',
          body: 'Para tratamientos de mayor importe, los hospitales emiten una estimación o una factura proforma y aceptan transferencias internacionales.',
        },
        {
          title: 'Depósitos',
          body: 'Los hospitales suelen pedir un depósito antes del ingreso. El saldo no utilizado se devuelve al alta.',
        },
      ],
    },
    insurance: {
      title: 'Seguros',
      points: [
        'El seguro público de salud de China no cubre a los visitantes.',
        'Muchos hospitales privados y algunos departamentos internacionales ofrecen facturación directa a aseguradoras internacionales; normalmente se exige autorización previa.',
        'En los demás casos, usted paga primero y reclama después. Le ayudamos a obtener facturas detalladas e informes médicos en inglés.',
        'Antes de viajar, compruebe si su póliza cubre tratamientos programados en el extranjero.',
      ],
    },
    factors: {
      title: 'Qué determina el coste total',
      items: [
        'El hospital y el tipo de unidad (unidad internacional o VIP frente a planta general)',
        'La duración de la estancia y si viaja con acompañante',
        'Medicamentos y dispositivos importados o de fabricación china',
        'Servicios de interpretación, coordinación y alojamiento',
      ],
    },
    fees: {
      title: 'Nuestros honorarios',
      body: 'La valoración inicial de su caso es gratuita. Las facturas del hospital se pagan directamente al hospital. Si nos pide que coordinemos su viaje, le comunicamos nuestros honorarios por escrito antes de que usted se comprometa a nada.',
    },
  },
  faq: {
    title: 'Preguntas frecuentes',
    intro: 'Respuestas breves a las preguntas que más nos hacen. Para cualquier otra duda, escríbanos.',
    items: [
      {
        q: '¿Pueden los extranjeros tratarse en hospitales chinos?',
        a: 'Sí. Muchos de los principales hospitales públicos cuentan con departamentos médicos internacionales, y los hospitales privados internacionales atienden a pacientes extranjeros a diario. Usted se registra con su pasaporte y paga de forma privada.',
      },
      {
        q: '¿Hablarán los médicos mi idioma?',
        a: 'En los departamentos internacionales y los hospitales privados muchos médicos hablan inglés. Para otros idiomas, y en las plantas generales, organizamos un intérprete médico que le acompaña durante las consultas.',
      },
      {
        q: '¿Necesito visado?',
        a: 'Depende de su pasaporte y de la duración de la estancia. Muchas nacionalidades pueden entrar sin visado durante 30 días o usar el tránsito de 240 horas; para tratamientos programados o más largos, la vía habitual es el visado S2 con una carta del hospital. Consulte nuestra guía de visado y entrada.',
      },
      {
        q: '¿Cuánto costará?',
        a: 'Depende del hospital, del tipo de unidad y del tratamiento. Antes de viajar recibirá una estimación por escrito del hospital. Nuestra página de costes muestra rangos orientativos de los servicios más habituales.',
      },
      {
        q: '¿Cuándo podrán atenderme?',
        a: 'Los chequeos y las consultas con especialistas suelen organizarse en pocos días. La cirugía y las terapias complejas dependen de la evaluación previa, pero las listas de espera suelen ser cortas.',
      },
      {
        q: '¿Qué documentación médica debo enviar?',
        a: 'Un resumen del diagnóstico, resultados recientes de pruebas, informes de imagen (y los archivos de imagen si los tiene), informes de anatomía patológica y la lista de su medicación actual. Lo ideal es que estén en inglés o chino; podemos encargarnos de traducir desde otros idiomas.',
      },
      {
        q: '¿Lo cubrirá mi seguro?',
        a: 'El seguro público chino no cubre a los visitantes. Algunas pólizas internacionales cubren tratamientos en China y algunos hospitales ofrecen facturación directa. Consúltelo con su aseguradora antes de viajar; le ayudamos con los documentos necesarios para la reclamación.',
      },
      {
        q: '¿Es seguro tratarse en China?',
        a: 'En todos los países hay hospitales mejores y peores. Trabajamos solo con instituciones autorizadas y nos centramos en grandes hospitales universitarios y hospitales privados consolidados. Ningún tratamiento está exento de riesgos: sus médicos le explicarán los riesgos y las alternativas antes de que usted dé su consentimiento.',
      },
      {
        q: '¿Puede acompañarme un familiar?',
        a: 'Sí, y lo recomendamos en caso de cirugía o tratamientos largos. Los acompañantes pueden acogerse a los mismos regímenes sin visado o solicitar el visado junto con usted. Le ayudamos a encontrar alojamiento cerca del hospital.',
      },
      {
        q: '¿Qué ocurre cuando vuelvo a casa?',
        a: 'Recibirá su informe de alta, los resultados de las pruebas y las imágenes, traducidos cuando sea necesario. Organizamos el seguimiento a distancia con el médico que le trató y podemos compartir su historial con su médico en su país.',
      },
      {
        q: '¿Son ustedes un hospital? ¿Dan consejo médico?',
        a: 'No. YiLu Health es un coordinador de viajes médicos. El diagnóstico y las decisiones de tratamiento corresponden únicamente a los médicos colegiados del hospital que le atiende.',
      },
      {
        q: '¿Hay algo que no gestionen?',
        a: 'Sí. No gestionamos trasplantes de órganos, gestación subrogada ni terapias no aprobadas por las autoridades reguladoras chinas.',
      },
    ],
  },
  contact: {
    title: 'Solicite la valoración gratuita de su caso',
    intro:
      'Cuéntenos brevemente qué necesita. Un coordinador le responderá en su idioma con los pasos siguientes. Enviar este formulario no le compromete a nada.',
    form: {
      name: 'Nombre y apellidos',
      email: 'Correo electrónico',
      phone: 'Teléfono / WhatsApp (opcional)',
      country: 'País o región de residencia',
      treatment: '¿En qué podemos ayudarle?',
      city: 'Ciudad preferida (opcional)',
      timeframe: '¿Cuándo le gustaría viajar? (opcional)',
      message: 'Describa brevemente su situación',
      messageHint:
        'Por ejemplo: su diagnóstico, el tratamiento recibido hasta ahora y lo que espera conseguir. Por favor, no envíe documentos todavía: le indicaremos una forma segura de compartirlos.',
      select: 'Seleccione',
      other: 'Otra cosa / no lo sé',
      anyCity: 'Sin preferencia',
      timeframes: {
        asap: 'Lo antes posible',
        month: 'En el plazo de un mes',
        quarter: 'En el plazo de tres meses',
        exploring: 'Solo me estoy informando',
      },
      consent:
        'Acepto que YiLu Health utilice la información que facilito, incluida la relativa a mi salud, para responder a mi consulta, según se describe en el aviso de privacidad.',
      privacyLink: 'Aviso de privacidad',
      submit: 'Enviar consulta',
      sending: 'Enviando…',
      successTitle: 'Gracias, hemos recibido su consulta.',
      successBody: 'Un coordinador le responderá por correo electrónico. Si no ve nuestro mensaje, revise la carpeta de correo no deseado.',
      again: 'Enviar otra consulta',
      errorGeneric: 'No hemos podido enviar su consulta. Inténtelo de nuevo en unos instantes.',
      errorValidation: 'Revise los campos señalados e inténtelo de nuevo.',
      errorRate: 'Demasiados intentos. Espere unos minutos y vuelva a intentarlo.',
      errorUnavailable: 'El formulario en línea no está disponible temporalmente. Por favor, contacte con nosotros directamente.',
    },
    aside: {
      title: 'Qué ocurre después',
      steps: [
        'Un coordinador lee su mensaje y puede hacerle algunas preguntas.',
        'Le indicamos qué documentos enviar y cómo compartirlos de forma segura.',
        'Recibe la opinión de un especialista, opciones y una estimación de costes.',
      ],
      privacy: 'Su información se utiliza únicamente para responder a su consulta y solo se comparte con un hospital con su consentimiento.',
      directTitle: '¿Prefiere escribirnos directamente?',
      email: 'Correo electrónico',
      whatsapp: 'WhatsApp',
      wechat: 'ID de WeChat',
    },
  },
  legal: {
    title: 'Aviso de privacidad y aviso médico',
    updated: 'Última actualización: {date}',
    sections: [
      {
        title: 'Aviso médico',
        body: 'El contenido de este sitio web es información general y no constituye consejo médico. No sustituye la consulta con un médico cualificado. No retrase la búsqueda de atención ni ignore el consejo profesional por algo que haya leído aquí. En caso de emergencia, llame al número de emergencias de su país.',
      },
      {
        title: 'Nuestro papel',
        body: 'YiLu Health es un coordinador de viajes médicos, no una institución sanitaria. No diagnosticamos ni tratamos. Todas las decisiones médicas las toman usted y los médicos colegiados del hospital que le atiende. No garantizamos ningún resultado de tratamiento, ninguna decisión sobre visados ni ningún precio.',
      },
      {
        title: 'Información de este sitio',
        body: 'Las normas de visado, los precios y los servicios hospitalarios cambian. Revisamos este sitio con regularidad, pero no podemos garantizar que todos los detalles estén actualizados. Prevalecen siempre los anuncios oficiales y la estimación por escrito de su hospital.',
      },
      {
        title: 'Qué datos personales recogemos',
        body: 'Cuando envía una consulta recogemos los datos que usted introduce: nombre, datos de contacto, país y la información de salud que decida describir. No pedimos documentos médicos a través del formulario del sitio web.',
      },
      {
        title: 'Cómo los usamos y compartimos',
        body: 'Utilizamos su información únicamente para responder a su consulta y, si usted lo pide, para coordinar su atención. Solo la compartimos con hospitales u otros proveedores de servicios con su consentimiento. No vendemos datos personales.',
      },
      {
        title: 'Conservación y sus derechos',
        body: 'Conservamos la información de las consultas solo durante el tiempo necesario para los fines anteriores o el que exija la ley. Puede pedirnos en cualquier momento acceder a sus datos, rectificarlos o suprimirlos, o retirar su consentimiento, poniéndose en contacto con nosotros.',
      },
      {
        title: 'Cookies',
        body: 'Este sitio web utiliza una única cookie funcional para recordar el idioma elegido. No utiliza cookies publicitarias ni de seguimiento.',
      },
    ],
  },
  footer: {
    tagline: 'Su coordinador para recibir atención médica en China.',
    explore: 'Explorar',
    support: 'Ayuda',
    legal: 'Privacidad y aviso médico',
    disclaimer:
      'YiLu Health es un coordinador de viajes médicos, no un proveedor de servicios sanitarios. El contenido de este sitio es información general y no constituye consejo médico.',
    rights: 'Todos los derechos reservados.',
  },
  notFound: {
    title: 'Página no encontrada',
    body: 'La página que busca no existe o se ha trasladado.',
    cta: 'Volver al inicio',
  },
}

export default es
