// types
export type NavLink = {
  id: string;
  title: string;
};

export type HeroContent = {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
};

export type FeatureSection = {
  category: string;
  items: string[];
};

export type DownloadInfo = {
  platform: string;
  description: string;
  link: string;
  icon?: string; // URL ou chemin vers une icône
};

// navigation
export const navLinks: NavLink[] = [
  { id: 'home', title: 'Accueil' },
  { id: 'features', title: 'Fonctionnalités' },
  { id: 'download', title: 'Téléchargement' },
];

// Hero
export const heroContent: HeroContent = {
  title: 'Automatisez vos actions avec MacroEngine',
  subtitle: 'MacroEngine vous permet de créer et exécuter des macros simplement pour gagner du temps sur Windows.',
  ctaText: 'Télécharger pour Windows',
  ctaLink: '#download',
};

// Features
export const featureSections: FeatureSection[] = [
  {
    category: 'Enregistrement et Exécution',
    items: [
      'Enregistrement en temps réel des actions clavier et souris',
      'Enregistrement des clics souris avec option activable/désactivable',
      'Exécution précise des macros avec préservation des délais',
      'Support haute fréquence (jusqu\'à 1000 CPS)',
      'Simulation d\'entrées clavier et souris via SendInput',
      'Pause/Reprise de l\'exécution',
      'Arrêt d\'urgence des macros',
    ],
  },
  {
    category: 'Répétition de Macros',
    items: [
      '3 modes de répétition : Une seule fois (défaut), Répéter X fois, Jusqu\'à interruption',
      'Délai configurable entre chaque répétition (en ms)',
      'Affichage du statut en temps réel ("Exécution 2/5...")',
      'Arrêt propre à tout moment',
    ],
  },
  {
    category: 'Raccourcis Clavier',
    items: [
      'Raccourcis globaux configurables pour exécuter/arrêter les macros',
      'Raccourcis individuels par macro',
      'Mode toggle : le raccourci lance ET arrête la macro',
      'Détection automatique des conflits entre raccourcis',
      'Configuration via l\'interface de paramètres',
    ],
  },
  {
    category: 'Détection d\'Application',
    items: [
      'Limiter une macro à certaines applications',
      'Sélection parmi les processus en cours avec icônes',
      'Raccourcis actifs uniquement dans les applications sélectionnées',
      'Support de plusieurs applications par macro',
    ],
  },
  {
    category: 'Édition et Gestion',
    items: [
      'Éditeur de macros visuel avec liste des actions',
      'Modification des propriétés de macro (nom, description)',
      'Undo/Redo pour les modifications',
      'Suppression et création de macros',
      'Import/Export de macros au format JSON',
      'Sauvegarde automatique après modifications',
    ],
  },
  {
    category: 'Système de Logs',
    items: [
      'Logs horodatés avec niveaux (Debug, Info, Warning, Error)',
      'Capture des exceptions avec stack traces',
      'Écriture dans fichier avec rotation quotidienne',
      'Affichage en temps réel dans l\'interface',
      'Filtrage par niveau de log',
      'Thread-safe et performant',
    ],
  },
  {
    category: 'Configuration',
    items: [
      'Configuration des raccourcis globaux',
      'Persistance de la configuration dans Data/config.json',
      'Validation des raccourcis (empêche les doublons)',
    ],
  },
  {
    category: 'Profils',
    items: [
      'Système de profils de macros',
      'Activation/désactivation de profils',
      'Gestion des collections de macros par profil',
    ],
  },
];

// Download
export const downloadInfo: DownloadInfo[] = [
  {
    platform: 'Windows',
    description: 'Téléchargez MacroEngine pour Windows 10/11. Installation rapide et exécutable autonome.',
    link: '/downloads/MacroEngine-Setup.exe',
    icon: '/src/assets/images/windows-icon.png',
  },
  // Tu peux ajouter d'autres plateformes si besoin plus tard
];
