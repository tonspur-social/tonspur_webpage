import type { Cover } from '../data/marketing';
import { Stars } from './Stars';

type CoverTileProps = {
  cover: Cover;
};

export function CoverTile({ cover }: CoverTileProps) {
  return (
    <article className="cover" style={{ '--cover-grad': cover.grad } as React.CSSProperties}>
      <span className="cover__tag">{cover.tag}</span>
      <div className="cover__title">{cover.title}</div>
      <div className="cover__meta">{cover.meta}</div>
      {cover.stars ? <Stars count={cover.stars} size="sm" /> : null}
    </article>
  );
}
