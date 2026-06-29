export const currentUser = {
  name: 'Mohsin Johar',
  avatar: '/dashboard_avatar.png',
}

export const navigationSections = [
  {
    label: 'OVER VIEW',
    items: [
      { label: 'Dashboard', icon: 'dashboard', to: '/dashboard' },
      { label: 'Bot Traffic', icon: 'bot', to: '/bot-traffic' },
      { label: 'Pages', icon: 'pages', to: '/pages' },
      { label: 'Prompts', icon: 'prompt', to: '/prompts' },
      { label: 'Reports', icon: 'reports', to: '/reports' },
    ],
  },
  {
    label: 'TOOLS',
    items: [{ label: 'Add Page', icon: 'plus', to: '/pages/new' }],
  },
  {
    label: 'MY ACCOUNT',
    items: [
      { label: 'Notifications', icon: 'bell', to: '/notifications' },
      { label: 'Messages', icon: 'message', to: '/messages' },
      { label: 'Settings', icon: 'settings', to: '/settings' },
      { label: 'Profile', icon: 'profile', to: '/profile' },
    ],
  },
]
