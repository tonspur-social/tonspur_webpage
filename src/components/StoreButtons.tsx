import { storeBadges } from '../data/marketing';

type StoreButtonsProps = {
  className?: string;
};

function getStoreUrl(envKey: string) {
  const value = import.meta.env[envKey]?.trim();
  return value || '#download';
}

export function StoreButtons({ className }: StoreButtonsProps) {
  return (
    <div className={`store-row${className ? ` ${className}` : ''}`}>
      {storeBadges.map(({ label, small, icon: Icon, envKey }) => {
        const href = getStoreUrl(envKey);
        const isExternal = href.startsWith('http');

        return (
          <a
            className="store-badge"
            href={href}
            key={label}
            rel={isExternal ? 'noreferrer' : undefined}
            target={isExternal ? '_blank' : undefined}
          >
            <Icon className="store-badge__glyph" strokeWidth={1.75} aria-hidden="true" />
            <span className="store-badge__text">
              <span className="store-badge__small">{small}</span>
              <span className="store-badge__big">{label}</span>
            </span>
          </a>
        );
      })}
    </div>
  );
}
