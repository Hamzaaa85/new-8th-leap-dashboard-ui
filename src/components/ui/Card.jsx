export default function Card({ as: Component = 'section', className = '', children }) {
  return (
    <Component className={`rounded-[14px] bg-[#F8FAFE] ${className}`}>
      {children}
    </Component>
  )
}
