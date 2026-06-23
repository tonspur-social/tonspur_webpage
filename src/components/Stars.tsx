type StarsProps = {
  count?: number;
  size?: 'sm' | 'md';
};

const starPath =
  'M12 2.8 14.85 8.6l6.4.93-4.63 4.51 1.1 6.37L12 17.42l-5.72 3 1.1-6.37L2.75 9.53l6.4-.93L12 2.8z';

export function Stars({ count = 5, size = 'md' }: StarsProps) {
  return (
    <span className={`stars stars--${size}`} aria-hidden="true">
      {Array.from({ length: count }, (_, index) => (
        <svg key={index} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d={starPath} />
        </svg>
      ))}
    </span>
  );
}
