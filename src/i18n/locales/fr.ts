import type { Dictionary } from './en'

const fr: Dictionary = {
  meta: {
    tagline: 'Se faire soigner en Chine : accompagnement des patients internationaux',
    description: 'YiLu Health aide les patients internationaux à accéder aux grands hôpitaux chinois : étude du dossier, rendez-vous, documents de visa, interprètes, aide au paiement et suivi après le retour.',
  },
  nav: {
    treatments: 'Soins',
    hospitals: 'Hôpitaux',
    visa: 'Visa et entrée',
    costs: 'Tarifs',
    faq: 'FAQ',
    contact: 'Contact',
    cta: 'Étude gratuite',
    menu: 'Menu',
    close: 'Fermer',
    language: 'Langue',
    skip: 'Aller au contenu',
  },
  common: {
    reviewed: 'Informations vérifiées le {date}',
    officialSources: 'Sources officielles',
    typicalStay: 'Durée de séjour habituelle',
  },
  home: {
    hero: {
      eyebrow: 'Se faire soigner en Chine',
      title: 'Les grands hôpitaux chinois, à votre portée.',
      subtitle: 'Nous orientons les patients internationaux vers le bon hôpital en Chine : étude de votre dossier, rendez-vous, documents de visa, interprètes et paiement — et nous restons à vos côtés jusqu’au suivi après votre retour.',
      primary: 'Demander une étude gratuite',
      secondary: 'Voir comment ça marche',
      notes: ['Première évaluation gratuite', 'Sans engagement', 'Confidentiel'],
      glyphs: { yi: 'médecine', lu: 'chemin' },
    },
    stats: {
      items: [
        {
          value: '1,28 M',
          label: 'de consultations de patients internationaux dans les grands hôpitaux chinois en 2025',
        },
        { value: '+73,6 %', label: 'de hausse de ces consultations en trois ans' },
        {
          value: '79',
          label: 'pays bénéficiant d’une entrée sans visa en Chine continentale (février 2026)',
        },
        { value: '240 h', label: 'de transit sans visa pour les ressortissants de 57 pays' },
      ],
      source: 'Sources : Commission nationale de la santé de Chine ; ministère chinois des Affaires étrangères ; Administration nationale de l’immigration.',
    },
    why: {
      title: 'Pourquoi les patients choisissent la Chine',
      subtitle: 'Pas seulement pour les prix : la rapidité, le volume d’expérience et des traitements difficiles d’accès ailleurs.',
      items: [
        {
          title: 'Des délais courts',
          body: 'Consultations spécialisées, imagerie et dates d’opération s’organisent le plus souvent en quelques jours ou semaines, et non en mois.',
        },
        {
          title: 'Des traitements de pointe',
          body: 'Thérapie cellulaire CAR-T, protonthérapie et hadronthérapie par ions lourds, chirurgie robot-assistée et un éventail de nouveaux médicaments en forte croissance.',
        },
        {
          title: 'Une expérience à grande échelle',
          body: 'Les grands hôpitaux universitaires traitent chaque jour des cas complexes, avec des équipes pluridisciplinaires et des services internationaux dédiés.',
        },
        {
          title: 'Des coûts clairs et compétitifs',
          body: 'Les tarifs pour les patients payants ne représentent souvent qu’une fraction de ceux des États-Unis, et vous recevez un devis écrit avant de partir.',
        },
        {
          title: 'La médecine traditionnelle chinoise à la source',
          body: 'Acupuncture, phytothérapie et rééducation dans les grands hôpitaux de MTC, associées aux examens diagnostiques modernes.',
        },
        {
          title: 'Une entrée facilitée',
          body: 'Exemption de visa pour de nombreux passeports, transit sans visa de 240 heures et carte d’arrivée en ligne simplifient les courts séjours médicaux.',
        },
      ],
    },
    treatments: {
      title: 'Ce pour quoi vous pouvez venir',
      subtitle: 'Du bilan de santé en une journée à la prise en charge de cancers complexes.',
      all: 'Voir tous les soins',
    },
    process: {
      title: 'Comment ça marche',
      subtitle: 'Un seul coordinateur, de votre premier message au suivi à domicile.',
      steps: [
        {
          when: 'Jour 1',
          title: 'Présentez-nous votre cas',
          body: 'Envoyez votre diagnostic, vos comptes rendus et vos attentes via notre formulaire. Aucun paiement n’est demandé.',
        },
        {
          when: 'Jours 2 à 5',
          title: 'Recevez des options et un devis',
          body: 'Nous consultons les hôpitaux adaptés et vous transmettons l’avis d’un spécialiste, une proposition de prise en charge et une estimation écrite des coûts.',
        },
        {
          when: 'Semaine 2',
          title: 'Préparez votre voyage',
          body: 'Nous prenons les rendez-vous, obtenons la lettre de l’hôpital pour votre visa si nécessaire, et organisons l’hébergement et l’accueil à l’aéroport.',
        },
        {
          when: 'Arrivée',
          title: 'Des soins avec un interprète',
          body: 'Un coordinateur et un interprète médical vous accompagnent pour l’enregistrement, les consultations, les examens et le paiement.',
        },
        {
          when: 'Ensuite',
          title: 'Un suivi chez vous',
          body: 'Vous repartez avec un dossier traduit et un plan de suivi, et nous organisons des consultations à distance avec votre médecin.',
        },
      ],
      note: 'Calendrier indicatif — chaque cas est différent.',
    },
    destinations: {
      title: 'Où vous faire soigner',
      subtitle: 'Nous vous aidons à choisir parmi les grands pôles médicaux chinois en fonction de votre pathologie, et non d’une liste figée.',
      cta: 'Découvrir les hôpitaux et les villes',
    },
    entry: {
      title: 'Entrer en Chine est plus simple qu’on ne le croit',
      subtitle: 'La Chine s’est largement ouverte depuis 2024. La bonne formule dépend de votre passeport et de votre projet de soins.',
      items: [
        {
          title: '30 jours sans visa',
          body: 'Pour les passeports ordinaires d’une cinquantaine de pays, ainsi que pour les pays liés par un accord d’exemption réciproque.',
        },
        {
          title: 'Hainan : les soins médicaux sont admis',
          body: 'Une soixantaine de nationalités peuvent entrer à Hainan sans visa, les soins médicaux faisant partie des motifs autorisés.',
        },
        {
          title: 'Visa S2 pour des soins programmés',
          body: 'Pour un traitement long ou programmé, nous vous aidons à obtenir la lettre de l’hôpital exigée pour la demande de visa.',
        },
      ],
      cta: 'Lire le guide visa et entrée',
    },
    cta: {
      title: 'Vous ne savez pas par où commencer ?',
      body: 'Expliquez-nous votre situation. Nous reviendrons vers vous avec des options réalistes, un calendrier et une estimation — gratuitement et sans engagement.',
      button: 'Demander une étude gratuite',
    },
  },
  treatments: {
    title: 'Soins et services',
    intro: 'Voici les services que les patients internationaux nous demandent le plus souvent. Si le vôtre n’y figure pas, envoyez-nous votre dossier : nous vous dirons franchement si la Chine est une bonne option.',
    popular: 'Demandes fréquentes',
    items: {
      checkup: {
        name: 'Bilans de santé et dépistage',
        summary: 'Des programmes complets sur un ou deux jours, avec imagerie et endoscopie sur place, puis analyse de vos résultats par un spécialiste.',
        points: [
          'Bilans de santé complets',
          'IRM, scanner à faible dose et TEP-scan',
          'Gastroscopie et coloscopie sous sédation',
          'Dépistage cardiaque et dépistage des cancers',
        ],
        stay: '1 à 3 jours',
      },
      oncology: {
        name: 'Cancérologie',
        summary: 'Des centres pluridisciplinaires à forte activité, dotés d’une radiothérapie moderne et donnant accès à des thérapies cellulaires et ciblées récemment autorisées.',
        points: [
          'Thérapie cellulaire CAR-T pour les cancers du sang',
          'Protonthérapie et hadronthérapie par ions carbone',
          'Thérapies ciblées et immunothérapie',
          'Chirurgie mini-invasive et robot-assistée',
        ],
        stay: '2 à 8 semaines, selon le protocole',
      },
      tcm: {
        name: 'Médecine traditionnelle chinoise',
        summary: 'Des programmes intégratifs dans les grands hôpitaux de MTC pour la douleur, la récupération et les maladies chroniques, associés aux examens modernes.',
        points: [
          'Acupuncture et moxibustion',
          'Massage thérapeutique tuina',
          'Phytothérapie personnalisée',
          'Rééducation après un AVC ou une opération',
        ],
        stay: '1 à 4 semaines',
      },
      dental: {
        name: 'Soins dentaires',
        summary: 'Implants, orthodontie et réhabilitation complète, avec des systèmes d’implants internationaux et une planification numérique.',
        points: [
          'Implants dentaires',
          'Couronnes et facettes',
          'Orthodontie et aligneurs transparents',
          'Réhabilitation complète de la bouche',
        ],
        stay: '3 à 10 jours ; les implants peuvent nécessiter deux séjours',
      },
      eye: {
        name: 'Ophtalmologie',
        summary: 'Des centres à forte activité pour la chirurgie réfractive au laser, la chirurgie de la cataracte et le bilan rétinien.',
        points: [
          'Chirurgie réfractive SMILE et LASIK',
          'Implants intraoculaires ICL',
          'Chirurgie de la cataracte avec implants premium',
          'Bilan de la rétine et du glaucome',
        ],
        stay: '3 à 7 jours',
      },
      ortho: {
        name: 'Orthopédie et rachis',
        summary: 'Prothèses articulaires, chirurgie du rachis et médecine du sport, de plus en plus souvent robot-assistées, suivies d’une rééducation structurée.',
        points: [
          'Prothèses de hanche et de genou',
          'Chirurgie mini-invasive du rachis',
          'Arthroscopie et traumatologie du sport',
          'Programmes de rééducation',
        ],
        stay: '2 à 4 semaines',
      },
      cardio: {
        name: 'Cœur et vaisseaux',
        summary: 'Des centres cardiovasculaires nationaux proposant des traitements interventionnels et chirurgicaux pour les cardiopathies complexes.',
        points: [
          'Coronarographie et pose de stents',
          'Réparation et remplacement valvulaires, dont le TAVI',
          'Ablation des troubles du rythme',
          'Pontage et chirurgie des cardiopathies structurelles',
        ],
        stay: '1 à 3 semaines',
      },
      remote: {
        name: 'Deuxième avis à distance',
        summary: 'Avant de décider de partir, un spécialiste chinois étudie votre dossier et votre imagerie, puis discute des options avec vous en visioconférence.',
        points: [
          'Étude des comptes rendus et de l’imagerie',
          'Consultation vidéo avec interprète',
          'Synthèse écrite traduite',
          'Options de traitement et estimation des coûts',
        ],
        stay: 'Aucun déplacement nécessaire',
      },
    },
    notOffered: {
      title: 'Ce que nous n’organisons pas',
      body: 'Nous n’organisons ni transplantations d’organes, ni gestation pour autrui, ni traitements non autorisés par les autorités sanitaires chinoises. La Chine interdit le tourisme de transplantation, et nous travaillons uniquement avec des établissements médicaux agréés.',
    },
  },
  hospitals: {
    title: 'Hôpitaux et destinations',
    intro: 'Les meilleurs hôpitaux chinois sont concentrés dans quelques villes. Voici, par ville, des établissements réputés sur lesquels les patients internationaux nous interrogent souvent.',
    disclaimer: 'Ces hôpitaux sont cités à titre d’information. Leur mention n’implique ni partenariat ni recommandation, et les services proposés aux patients internationaux varient d’un établissement à l’autre. Pour chaque dossier, nous vérifions auprès de l’hôpital qu’il peut vous recevoir avant votre départ.',
    types: { public: 'Hôpital public', private: 'Hôpital privé', zone: 'Hôpital de la zone pilote' },
    tags: {
      general: 'Cas complexes et prise en charge pluridisciplinaire',
      oncology: 'Cancérologie',
      proton: 'Protonthérapie et ions lourds',
      hematology: 'Hématologie et thérapie cellulaire',
      cardio: 'Cœur et vaisseaux',
      neuro: 'Neurologie et neurochirurgie',
      ortho: 'Orthopédie',
      eye: 'Ophtalmologie',
      dental: 'Soins dentaires',
      tcm: 'Médecine traditionnelle chinoise',
      surgery: 'Chirurgie mini-invasive',
      innovative: 'Médicaments et dispositifs autorisés à l’étranger',
      checkup: 'Bilans de santé',
    },
    cities: {
      beijing: {
        name: 'Pékin',
        blurb: 'La capitale réunit bon nombre des meilleurs hôpitaux nationaux : un premier choix pour les diagnostics complexes, la cardiologie, la neurologie et la cancérologie.',
      },
      shanghai: {
        name: 'Shanghai',
        blurb: 'La ville la plus internationale de Chine, avec plus de 20 hôpitaux publics engagés dans le programme pilote de tourisme médical international et de solides hôpitaux privés. Réputée pour la cancérologie, la protonthérapie et les ions lourds.',
      },
      guangzhou: {
        name: 'Canton (Guangzhou)',
        blurb: 'Un pôle du sud du pays, proche de Hong Kong et de l’Asie du Sud-Est, reconnu pour la cancérologie, l’ophtalmologie et la médecine traditionnelle chinoise.',
      },
      shenzhen: {
        name: 'Shenzhen',
        blurb: 'Voisine de Hong Kong, la ville dispose d’hôpitaux modernes gérés selon les standards internationaux et d’un accès transfrontalier facile.',
      },
      hangzhou: {
        name: 'Hangzhou',
        blurb: 'Siège des hôpitaux universitaires de l’université du Zhejiang, réputés en chirurgie hépatobiliaire et mini-invasive, à environ une heure de train de Shanghai.',
      },
      chengdu: {
        name: 'Chengdu',
        blurb: 'Le centre médical de l’ouest de la Chine, autour de l’hôpital de Chine de l’Ouest (West China Hospital), l’un des plus grands et des mieux classés du pays.',
      },
      hainan: {
        name: 'Hainan · Boao Lecheng',
        blurb: 'Une île tropicale dotée d’une zone pilote nationale où des hôpitaux agréés peuvent utiliser des médicaments et dispositifs innovants autorisés à l’étranger mais pas encore sur le marché du continent — avec une entrée sans visa qui couvre les soins médicaux.',
      },
    },
    choose: {
      title: 'Comment nous vous aidons à choisir',
      items: [
        {
          title: 'La spécialité d’abord',
          body: 'Nous partons des services les plus expérimentés dans votre pathologie, et non de la notoriété d’un hôpital.',
        },
        {
          title: 'L’accueil des patients internationaux',
          body: 'Nous vérifions l’accompagnement linguistique, les unités internationales, les moyens de paiement et le délai de prise en charge.',
        },
        {
          title: 'Les aspects pratiques',
          body: 'Liaisons aériennes, formule de visa, climat, besoins de l’accompagnant et budget pèsent dans la recommandation finale.',
        },
      ],
    },
  },
  visa: {
    title: 'Guide visa et entrée',
    intro: 'Entrer en Chine est devenu bien plus simple depuis 2024. La formule adaptée dépend de votre passeport, de la durée du traitement et du lieu des soins. Cette page donne des indications générales et non un conseil juridique : vérifiez toujours auprès des sources officielles avant de réserver.',
    options: [
      {
        title: 'Entrée sans visa pendant 30 jours',
        badge: 'Courts séjours',
        body: 'Les titulaires d’un passeport ordinaire d’une cinquantaine de pays — dont la France, la Belgique, la Suisse, le Luxembourg et la plupart des pays européens, le Royaume-Uni, le Canada, l’Australie, la Nouvelle-Zélande, le Japon, la Corée du Sud, la Russie et plusieurs États du Golfe et d’Amérique latine — peuvent entrer en Chine continentale sans visa pour 30 jours au maximum. Les pays liés par un accord d’exemption réciproque, comme Singapour, la Malaisie, la Thaïlande, les Émirats arabes unis, le Qatar et le Kazakhstan, bénéficient de facilités comparables.',
        points: [
          'Motifs admis : affaires, tourisme, visite à des proches, échanges et transit.',
          'Les soins médicaux ne figurent pas parmi ces motifs. Consulter ou faire un bilan pendant un séjour est courant, mais si les soins sont le but principal de votre voyage, demandez à l’ambassade ou au consulat de Chine s’il vous faut un visa.',
          'La plupart de ces dispositifs sont annoncés jusqu’au 31 décembre 2026 (Russie : 31 décembre 2027). Vérifiez leur prolongation avant de réserver.',
        ],
      },
      {
        title: 'Entrée sans visa à Hainan pendant 30 jours',
        badge: 'Soins médicaux admis',
        body: 'Les ressortissants d’une soixantaine de pays peuvent entrer dans la province de Hainan sans visa pour 30 jours au maximum, et les soins médicaux font explicitement partie des motifs autorisés. Hainan abrite la zone pilote de tourisme médical international de Boao Lecheng.',
        points: [
          'Votre séjour est limité à la province de Hainan.',
          'Bien adapté aux bilans, aux interventions programmées et aux traitements disponibles à Boao Lecheng.',
        ],
      },
      {
        title: 'Transit sans visa de 240 heures',
        badge: 'Jusqu’à 10 jours',
        body: 'Les ressortissants de 57 pays — dont les États-Unis, l’Indonésie et le Vietnam — peuvent séjourner jusqu’à 240 heures dans des régions désignées lorsqu’ils poursuivent leur voyage vers un pays ou une région tiers. Hong Kong et Macao comptent comme régions tierces.',
        points: [
          'Il faut un billet confirmé vers un pays ou une région tiers dans les 240 heures.',
          'L’entrée se fait par des points de passage désignés, et vous devez rester dans les provinces autorisées.',
          'Un délai suffisant pour de nombreux bilans, consultations et deuxièmes avis.',
        ],
      },
      {
        title: 'Visa S2 pour soins médicaux',
        badge: 'Soins programmés',
        body: 'Pour des soins programmés, un long séjour ou un passeport ne bénéficiant pas de l’exemption, la voie habituelle est le visa S2 (affaires privées de courte durée), appuyé par une lettre d’invitation ou d’admission de l’hôpital.',
        points: [
          'Pièces habituelles : passeport, formulaire de demande, photo et lettre de l’hôpital précisant le diagnostic, le traitement prévu, sa durée et son coût estimé. Un justificatif de ressources peut être demandé.',
          'Le visa S2 couvre des séjours allant jusqu’à 180 jours. Un traitement plus long exige un visa S1 et un permis de séjour.',
          'Les proches accompagnants peuvent déposer une demande en justifiant du lien de parenté.',
          'Une fois votre plan de traitement confirmé, nous vous aidons à obtenir la lettre de l’hôpital.',
        ],
      },
      {
        title: 'Si le traitement dure plus longtemps que prévu',
        badge: 'Prolongation',
        body: 'Vous pouvez demander au bureau local de l’administration des entrées et sorties une prolongation ou un titre de séjour avant l’expiration de votre autorisation, avec un certificat de votre hôpital.',
        points: [
          'Déposez la demande au moins sept jours avant la fin de votre séjour autorisé.',
        ],
      },
    ],
    arrival: {
      title: 'Carte d’arrivée en ligne',
      body: 'Depuis le 20 novembre 2025, les voyageurs étrangers peuvent remplir la carte d’arrivée en ligne avant l’atterrissage : sur le site de l’Administration nationale de l’immigration (NIA), dans l’application « NIA 12367 » ou dans ses mini-programmes WeChat et Alipay. Vous pouvez aussi la remplir à l’arrivée.',
    },
    checklist: {
      title: 'Avant le départ',
      items: [
        'Passeport valable au moins six mois, avec des pages vierges',
        'Confirmation de rendez-vous ou lettre d’invitation de l’hôpital (imprimée)',
        'Dossier médical et imagerie, traduits en anglais ou en chinois',
        'Médicaments sur ordonnance dans leur emballage d’origine, avec une lettre du médecin',
        'Coordonnées de votre assurance voyage et santé',
        'Adresse d’hébergement et numéro de contact local',
        'Une carte bancaire internationale, et Alipay ou WeChat Pay configuré',
        'Billet de retour ou de continuation',
      ],
    },
    links: {
      nia: 'Administration nationale de l’immigration',
      visaCenter: 'Centre de service de demande de visa chinois',
      arrivalCard: 'Carte d’arrivée en ligne',
    },
    disclaimer: 'Les règles de visa évoluent et sont appliquées au cas par cas par les autorités. Nous ne sommes pas une agence de visas et ne pouvons garantir l’entrée sur le territoire. Les listes de pays et les dates ci-dessus sont des résumés ; les annonces officielles font foi.',
  },
  costs: {
    title: 'Tarifs et paiement',
    intro: 'En Chine, les patients internationaux règlent leurs soins eux-mêmes. Les tarifs des services internationaux et des hôpitaux privés sont plus élevés que les tarifs publics locaux, mais souvent bien inférieurs à ceux du secteur privé aux États-Unis et dans d’autres pays où les soins sont chers.',
    table: {
      title: 'Fourchettes de prix indicatives',
      caption: 'Fourchettes approximatives en dollars américains, établies à partir de publications de 2026. Il ne s’agit pas de devis : seule l’estimation écrite de votre hôpital fait foi.',
      service: 'Prestation',
      range: 'Fourchette indicative en Chine',
      note: 'Bon à savoir',
      rows: {
        checkup: {
          name: 'Bilan de santé complet',
          note: 'Selon l’imagerie (IRM, scanner, TEP-scan) et les endoscopies ajoutées',
        },
        mri: { name: 'IRM, une région', note: 'Généralement disponible en quelques jours' },
        implant: {
          name: 'Implant dentaire avec couronne, par dent',
          note: 'La marque de l’implant détermine le prix',
        },
        vision: {
          name: 'Chirurgie réfractive au laser, les deux yeux',
          note: 'SMILE ou LASIK ; les implants ICL coûtent plus cher',
        },
        proton: {
          name: 'Protonthérapie ou ions lourds, traitement complet',
          note: 'Variable selon le type de tumeur et le nombre de séances',
        },
        cart: {
          name: 'Thérapie cellulaire CAR-T',
          note: 'Coût total rapporté ; aux États-Unis, des totaux supérieurs à 500 000 dollars sont couramment rapportés',
        },
      },
    },
    pay: {
      title: 'Comment payer',
      items: [
        {
          title: 'Cartes internationales',
          body: 'Visa et Mastercard sont acceptées dans la plupart des services internationaux et des hôpitaux privés.',
        },
        {
          title: 'Alipay et WeChat Pay',
          body: 'Les deux applications permettent d’associer une carte étrangère après vérification du passeport : idéal pour les dépenses courantes. Des plafonds s’appliquent ; les grosses factures se règlent donc plutôt par carte ou par virement.',
        },
        {
          title: 'Virement bancaire',
          body: 'Pour un traitement lourd, l’hôpital établit une estimation ou une facture pro forma et accepte les virements internationaux.',
        },
        {
          title: 'Acompte',
          body: 'Les hôpitaux demandent généralement un acompte avant l’admission. Le solde non utilisé est remboursé à la sortie.',
        },
      ],
    },
    insurance: {
      title: 'Assurance',
      points: [
        'L’assurance maladie publique chinoise ne couvre pas les visiteurs.',
        'De nombreux hôpitaux privés et certains services internationaux pratiquent le tiers payant avec des assureurs internationaux ; un accord préalable est généralement requis.',
        'Sinon, vous payez d’abord et demandez ensuite le remboursement. Nous vous aidons à obtenir des factures détaillées et des comptes rendus médicaux en anglais.',
        'Avant de partir, vérifiez que votre contrat couvre les soins programmés à l’étranger.',
      ],
    },
    factors: {
      title: 'Ce qui détermine le coût total',
      items: [
        'L’hôpital et le type d’unité (unité internationale ou VIP, ou service général)',
        'La durée du séjour et la présence d’un accompagnant',
        'Médicaments et dispositifs importés ou fabriqués en Chine',
        'Services d’interprétariat, de coordination et d’hébergement',
      ],
    },
    fees: {
      title: 'Nos honoraires',
      body: 'La première étude de votre dossier est gratuite. Les factures de l’hôpital sont réglées directement à l’hôpital. Si vous nous confiez l’organisation de votre séjour, nous vous communiquons nos honoraires par écrit avant tout engagement de votre part.',
    },
  },
  faq: {
    title: 'Questions fréquentes',
    intro: 'Des réponses courtes aux questions que l’on nous pose le plus souvent. Pour toute autre question, écrivez-nous.',
    items: [
      {
        q: 'Les étrangers peuvent-ils se faire soigner dans les hôpitaux chinois ?',
        a: 'Oui. De nombreux grands hôpitaux publics disposent d’un service médical international, et les hôpitaux privés internationaux accueillent des patients étrangers tous les jours. Vous vous enregistrez avec votre passeport et réglez vos soins vous-même.',
      },
      {
        q: 'Les médecins parleront-ils ma langue ?',
        a: 'Dans les services internationaux et les hôpitaux privés, beaucoup de médecins parlent anglais. Pour les autres langues, et dans les services généraux, nous prévoyons un interprète médical qui vous accompagne en consultation.',
      },
      {
        q: 'Ai-je besoin d’un visa ?',
        a: 'Cela dépend de votre passeport et de la durée de votre séjour. De nombreuses nationalités peuvent entrer sans visa pour 30 jours ou utiliser le transit de 240 heures ; pour des soins programmés ou plus longs, la voie habituelle est le visa S2 avec une lettre de l’hôpital. Consultez notre guide visa et entrée.',
      },
      {
        q: 'Combien cela va-t-il coûter ?',
        a: 'Tout dépend de l’hôpital, du type d’unité et du traitement. Avant votre départ, vous recevez une estimation écrite de l’hôpital. Notre page Tarifs donne des fourchettes indicatives pour les prestations courantes.',
      },
      {
        q: 'Dans quel délai puis-je être reçu ?',
        a: 'Bilans et consultations spécialisées s’organisent généralement en quelques jours. Pour la chirurgie et les traitements complexes, tout dépend du bilan préalable, mais les listes d’attente sont en général courtes.',
      },
      {
        q: 'Quels documents médicaux dois-je envoyer ?',
        a: 'Un résumé de votre diagnostic, vos résultats d’examens récents, les comptes rendus d’imagerie (et les fichiers d’images si possible), les comptes rendus d’anatomopathologie et la liste de vos traitements en cours. L’idéal est l’anglais ou le chinois ; nous pouvons faire traduire les autres langues.',
      },
      {
        q: 'Mon assurance paiera-t-elle ?',
        a: 'L’assurance publique chinoise ne couvre pas les visiteurs. Certains contrats internationaux couvrent les soins en Chine et certains hôpitaux pratiquent le tiers payant. Renseignez-vous auprès de votre assureur avant de partir ; nous vous aidons à réunir les pièces nécessaires au remboursement.',
      },
      {
        q: 'Se faire soigner en Chine est-il sûr ?',
        a: 'Chaque pays compte des hôpitaux plus ou moins solides. Nous travaillons uniquement avec des établissements agréés, en privilégiant les grands hôpitaux universitaires et les hôpitaux privés bien établis. Aucun traitement n’est sans risque : vos médecins vous expliqueront les risques et les alternatives avant de recueillir votre consentement.',
      },
      {
        q: 'Un proche peut-il m’accompagner ?',
        a: 'Oui, et nous le recommandons pour une opération ou un traitement long. Les accompagnants peuvent bénéficier des mêmes exemptions de visa ou déposer une demande en même temps que vous. Nous aidons à trouver un hébergement près de l’hôpital.',
      },
      {
        q: 'Que se passe-t-il après mon retour ?',
        a: 'Vous recevez votre compte rendu de sortie, vos résultats et votre imagerie, traduits si nécessaire. Nous organisons un suivi à distance avec votre médecin traitant en Chine et pouvons transmettre votre dossier à votre médecin dans votre pays.',
      },
      {
        q: 'Êtes-vous un hôpital ? Donnez-vous des avis médicaux ?',
        a: 'Non. YiLu Health est un coordinateur de séjours médicaux. Le diagnostic et les décisions de traitement relèvent exclusivement des médecins agréés de l’hôpital qui vous soigne.',
      },
      {
        q: 'Y a-t-il des prestations que vous n’organisez pas ?',
        a: 'Oui. Nous n’organisons ni transplantations d’organes, ni gestation pour autrui, ni traitements non autorisés par les autorités sanitaires chinoises.',
      },
    ],
  },
  contact: {
    title: 'Demandez l’étude gratuite de votre dossier',
    intro: 'Décrivez-nous brièvement votre besoin. Un coordinateur vous répondra dans votre langue en vous indiquant la suite. L’envoi de ce formulaire ne vous engage à rien.',
    form: {
      name: 'Nom et prénom',
      email: 'E-mail',
      phone: 'Téléphone / WhatsApp (facultatif)',
      country: 'Pays ou région de résidence',
      treatment: 'Pour quoi avez-vous besoin d’aide ?',
      city: 'Ville souhaitée (facultatif)',
      timeframe: 'Quand souhaitez-vous partir ? (facultatif)',
      message: 'Décrivez brièvement votre situation',
      messageHint: 'Par exemple : votre diagnostic, les traitements déjà reçus et ce que vous attendez. Merci de ne pas envoyer de documents pour l’instant : nous vous indiquerons un moyen sécurisé de les transmettre.',
      select: 'Sélectionnez',
      other: 'Autre / je ne sais pas',
      anyCity: 'Sans préférence',
      timeframes: {
        asap: 'Dès que possible',
        month: 'D’ici un mois',
        quarter: 'D’ici trois mois',
        exploring: 'Je me renseigne simplement',
      },
      consent: 'J’accepte que YiLu Health utilise les informations que je fournis, y compris des données de santé, pour répondre à ma demande, comme indiqué dans la notice de confidentialité.',
      privacyLink: 'Notice de confidentialité',
      submit: 'Envoyer ma demande',
      sending: 'Envoi en cours…',
      successTitle: 'Merci, nous avons bien reçu votre demande.',
      successBody: 'Un coordinateur vous répondra par e-mail. Si vous ne voyez pas notre message, vérifiez votre dossier de courrier indésirable.',
      again: 'Envoyer une autre demande',
      errorGeneric: 'Votre demande n’a pas pu être envoyée. Veuillez réessayer dans un instant.',
      errorValidation: 'Vérifiez les champs signalés, puis réessayez.',
      errorRate: 'Trop de tentatives. Patientez quelques minutes, puis réessayez.',
      errorUnavailable: 'Le formulaire en ligne est momentanément indisponible. Merci de nous contacter directement.',
    },
    aside: {
      title: 'Et ensuite ?',
      steps: [
        'Un coordinateur lit votre message et peut vous poser quelques questions.',
        'Nous vous indiquons quels documents envoyer et comment les transmettre en toute sécurité.',
        'Vous recevez l’avis d’un spécialiste, des options et une estimation des coûts.',
      ],
      privacy: 'Vos informations servent uniquement à répondre à votre demande et ne sont transmises à un hôpital qu’avec votre accord.',
      directTitle: 'Vous préférez nous écrire directement ?',
      email: 'E-mail',
      whatsapp: 'WhatsApp',
      wechat: 'Identifiant WeChat',
    },
  },
  legal: {
    title: 'Notice de confidentialité et avertissement médical',
    updated: 'Dernière mise à jour : {date}',
    sections: [
      {
        title: 'Avertissement médical',
        body: 'Le contenu de ce site est une information générale et ne constitue pas un avis médical. Il ne remplace pas la consultation d’un médecin qualifié. Ne retardez pas une prise en charge et n’ignorez pas un avis professionnel à cause de ce que vous lisez ici. En cas d’urgence, appelez le numéro d’urgence de votre pays.',
      },
      {
        title: 'Notre rôle',
        body: 'YiLu Health est un coordinateur de séjours médicaux, et non un établissement de santé. Nous ne posons pas de diagnostic et ne prodiguons pas de soins. Toutes les décisions médicales sont prises par vous et par les médecins agréés de l’hôpital qui vous soigne. Nous ne garantissons aucun résultat de traitement, aucune décision de visa ni aucun prix.',
      },
      {
        title: 'Informations publiées sur ce site',
        body: 'Les règles de visa, les prix et les services hospitaliers évoluent. Nous révisons régulièrement ce site, sans pouvoir garantir que chaque détail soit à jour. Les annonces officielles et l’estimation écrite de votre hôpital font toujours foi.',
      },
      {
        title: 'Les données personnelles que nous recueillons',
        body: 'Lorsque vous envoyez une demande, nous recueillons les informations que vous saisissez : nom, coordonnées, pays et les données de santé que vous choisissez de décrire. Nous ne demandons pas de documents médicaux via le formulaire du site.',
      },
      {
        title: 'Utilisation et partage',
        body: 'Nous utilisons vos informations uniquement pour répondre à votre demande et, si vous le souhaitez, pour coordonner vos soins. Nous ne les transmettons à des hôpitaux ou à d’autres prestataires qu’avec votre accord. Nous ne vendons pas de données personnelles.',
      },
      {
        title: 'Conservation et droits',
        body: 'Nous conservons les informations de votre demande seulement le temps nécessaire aux finalités ci-dessus ou exigé par la loi. Vous pouvez à tout moment nous demander d’accéder à vos informations, de les rectifier ou de les supprimer, ou retirer votre consentement, en nous contactant.',
      },
      {
        title: 'Cookies',
        body: 'Ce site utilise un seul cookie fonctionnel pour mémoriser votre choix de langue. Il n’utilise aucun cookie publicitaire ni de suivi.',
      },
    ],
  },
  footer: {
    tagline: 'Votre coordinateur pour vous faire soigner en Chine.',
    explore: 'Explorer',
    support: 'Assistance',
    legal: 'Confidentialité et avertissement',
    disclaimer: 'YiLu Health est un coordinateur de séjours médicaux, et non un prestataire de soins. Le contenu de ce site est une information générale et ne constitue pas un avis médical.',
    rights: 'Tous droits réservés.',
  },
  notFound: {
    title: 'Page introuvable',
    body: 'La page que vous cherchez n’existe pas ou a été déplacée.',
    cta: 'Retour à l’accueil',
  },
}

export default fr
