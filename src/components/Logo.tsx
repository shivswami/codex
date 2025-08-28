interface LogoProps {
  name: string
  className?: string
}

const Logo = ({ name, className = 'w-6 h-6' }: LogoProps) => (
  <svg className={className} viewBox="0 0 24 24" aria-label={name} role="img">
    <circle cx="12" cy="12" r="10" fill="#e5e7eb" />
    <text x="12" y="16" fontSize="8" textAnchor="middle" fill="#374151">{name[0].toUpperCase()}</text>
  </svg>
)

export default Logo
