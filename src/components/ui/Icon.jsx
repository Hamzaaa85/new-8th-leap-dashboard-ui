const iconPaths = {
  dashboard: (
    <>
      <rect x="4" y="4" width="6" height="16" rx="1.4" />
      <rect x="14" y="4" width="6" height="7" rx="1.4" />
      <rect x="14" y="15" width="6" height="5" rx="1.4" />
    </>
  ),
  bot: (
    <>
      <rect x="5" y="7" width="14" height="11" rx="3" />
      <path d="M9 7V4m6 3V4M8.5 12h.01M15.5 12h.01M9 18v2m6-2v2" />
    </>
  ),
  pages: (
    <>
      <path d="M7 3h8l4 4v14H7z" />
      <path d="M15 3v5h4M10 13h6M10 17h6" />
    </>
  ),
  prompt: <path d="m5 7 5 5-5 5M12 17h7" />,
  reports: (
    <>
      <path d="M5 20V9m7 11V4m7 16v-7" />
      <path d="M3 20h18" />
    </>
  ),
  plus: <path d="M12 5v14M5 12h14" />,
  bell: (
    <>
      <path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
      <path d="M10 21h4" />
    </>
  ),
  message: (
    <>
      <rect x="4" y="5" width="16" height="12" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </>
  ),
  settings: (
    <>
      <path d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8" />
      <path d="M4.9 15.2 3.8 17l2.2 2.2 1.8-1.1a8 8 0 0 0 2.1.9l.5 2h3.2l.5-2a8 8 0 0 0 2.1-.9l1.8 1.1 2.2-2.2-1.1-1.8a8 8 0 0 0 .9-2.1l2-.5V9.4l-2-.5a8 8 0 0 0-.9-2.1L20.2 5 18 2.8l-1.8 1.1a8 8 0 0 0-2.1-.9l-.5-2h-3.2l-.5 2a8 8 0 0 0-2.1.9L6 2.8 3.8 5l1.1 1.8A8 8 0 0 0 4 8.9l-2 .5v3.2l2 .5a8 8 0 0 0 .9 2.1Z" />
    </>
  ),
  profile: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M5 21a7 7 0 0 1 14 0" />
    </>
  ),
  logout: <path d="M10 6H6v12h4M14 8l4 4-4 4M18 12H9" />,
  mail: (
    <>
      <rect x="3.5" y="5.5" width="17" height="13" rx="3" />
      <path d="m5 8 7 5 7-5" />
    </>
  ),
  phone: (
    <>
      <path d="M8 4 5 7c.6 6.2 5.8 11.4 12 12l3-3-4-4-2 2c-2.1-1-3.9-2.8-5-5l2-2Z" />
    </>
  ),
  calendar: (
    <>
      <rect x="4" y="6" width="16" height="14" rx="3" />
      <path d="M8 4v4M16 4v4M4 10h16" />
    </>
  ),
  info: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v5M12 8h.01" />
    </>
  ),
  flag: (
    <>
      <path d="M6 20V5" />
      <path d="M6 5h11l-2 4 2 4H6" />
    </>
  ),
  quote: (
    <>
      <path d="M7 8h4v4c0 3-1.5 4.5-4 5" />
      <path d="M14 8h4v4c0 3-1.5 4.5-4 5" />
    </>
  ),
  dots: <path d="M7 12h.01M12 12h.01M17 12h.01" />,
  percent: (
    <>
      <path d="m7 17 10-10" />
      <path d="M8 8h.01M16 16h.01" />
    </>
  ),
  book: (
    <>
      <path d="M5 5.5A2.5 2.5 0 0 1 7.5 3H20v15H7.5A2.5 2.5 0 0 0 5 20.5z" />
      <path d="M5 5.5v15" />
    </>
  ),
  pencil: (
    <>
      <path d="m4 20 4.2-1 10-10a2.1 2.1 0 0 0-3-3l-10 10Z" />
      <path d="m14 7 3 3" />
    </>
  ),
  briefcase: (
    <>
      <rect x="4" y="7" width="16" height="12" rx="2" />
      <path d="M9 7V5h6v2M4 12h16M10 12v2h4v-2" />
    </>
  ),
  mention: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M16 12v1a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.9 7.9" />
    </>
  ),
  gauge: (
    <>
      <path d="M5 16a7 7 0 1 1 14 0" />
      <path d="m12 16 4-5" />
      <path d="M8 16h8" />
    </>
  ),
  rank: (
    <>
      <path d="M6 18V9M12 18V5M18 18v-6" />
      <path d="M4 18h16" />
    </>
  ),
  sort: <path d="M12 4v16M8 8l4-4 4 4M8 16l4 4 4-4" />,
  document: (
    <>
      <path d="M7 3h7l4 4v14H7z" />
      <path d="M14 3v5h4M10 13h5M10 17h5" />
    </>
  ),
  bars: (
    <>
      <path d="M7 17V9M12 17V6M17 17v-5" />
      <path d="M5 19h14" />
    </>
  ),
  arrowUp: <path d="M7 17 17 7M10 7h7v7" />,
  uptime: (
    <>
      <path d="M12 7v5l3 2" />
      <path d="M6.5 5.5A8 8 0 1 1 4 12" />
      <path d="M4 5v5h5" />
    </>
  ),
  check: <path d="m5 12 4 4L19 6" />,
  spark: (
    <>
      <path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8Z" />
      <path d="M18 15v4M16 17h4" />
    </>
  ),
  refresh: (
    <>
      <path d="M18 8a7 7 0 1 0 1 6" />
      <path d="M18 4v4h-4" />
    </>
  ),
  menu: <path d="M5 7h14M5 12h14M5 17h14" />,
  chevronDown: <path d="m7 10 5 5 5-5" />,
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.35-4.35" />
    </>
  ),
  download: (
    <>
      <path d="M12 3v13M7 11l5 5 5-5" />
      <path d="M5 21h14" />
    </>
  ),
  dotsVertical: <path d="M12 5h.01M12 12h.01M12 19h.01" />,
}

export default function Icon({ name, className = '', strokeWidth = 1.8 }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
    >
      {iconPaths[name]}
    </svg>
  )
}
