export const reportsData = {
  period: 'All months',
  metrics: [
    {
      id: 'ai-visibility',
      icon: 'search',
      label: 'AI Visibility',
      type: 'trend',
      from: '20.0',
      to: '25.0',
      trend: { value: '+25%' },
    },
    {
      id: 'active-pages',
      icon: 'document',
      label: 'Active Pages Optimized',
      type: 'simple',
      primary: '49',
      secondary: '(49 Inform.)',
    },
    {
      id: 'crawl-health',
      icon: 'uptime',
      label: 'Crawl Health',
      type: 'tags',
      tags: [
        { value: '99.0%', label: 'uptime', tone: 'green' },
        { value: '11.0 ms', label: 'average reach', tone: 'green' },
      ],
    },
    {
      id: 'audience-intent',
      icon: 'gauge',
      label: 'Audience Intent',
      type: 'tags',
      tags: [
        { value: '45%', label: 'informational', tone: 'green' },
        { value: '50%', label: 'industry', tone: 'blue' },
      ],
    },
  ],
  selectedReport: {
    title: 'March Report',
    date: '12 march 2026',
  },
}
