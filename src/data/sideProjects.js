// Summaries checked against the public GitHub READMEs and manifests on 2026-09-30.
// Keep implemented and planned capabilities distinct when updating these entries.
export const sideProjects = [
  {
    name: 'FitnessTracker',
    category: 'iOS app',
    status: 'Native app',
    icon: 'fitness',
    description:
      'An offline fitness app for logging workouts, reusing routines, and tracking progressive overload. Includes progress charts, rest timers, shared gym check-ins, and backup/export.',
    technologies: [
      'Swift',
      'SwiftUI',
      'SwiftData',
      'Swift Charts',
      'ActivityKit',
      'WidgetKit',
    ],
    url: 'https://github.com/HarryDo15/FitnessTracker',
  },
  {
    name: 'CKA GitOps Lab',
    category: 'Infrastructure & DevOps',
    status: 'Working lab',
    icon: 'infrastructure',
    description:
      'A hands-on Kubernetes lab for cluster administration and troubleshooting. Runs a Python/SQLite incident-tracking API with GitLab CI builds, Argo CD delivery, and metrics and log monitoring.',
    technologies: [
      'Kubernetes',
      'kubeadm',
      'Python',
      'SQLite',
      'GitLab CI',
      'Argo CD',
      'Prometheus',
      'Grafana',
      'Loki',
    ],
    url: 'https://github.com/HarryDo15/cka-gitops-lab',
  },
  {
    name: 'Career Intelligence',
    category: 'Full-stack architecture',
    status: 'Foundation stage',
    icon: 'career',
    description:
      'The database and architecture foundation for a personal job-search workspace. The public repository includes a runnable Prisma toolchain and local PostgreSQL setup; the dashboard and integrations are planned.',
    technologies: ['TypeScript', 'Prisma', 'PostgreSQL', 'Docker Compose'],
    plannedTechnologies: ['Next.js', 'React', 'Inngest', 'Microsoft Graph'],
    url: 'https://github.com/HarryDo15/career-intelligence',
  },
];
