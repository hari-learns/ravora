'use client';

import { useEffect, useRef, type ReactNode } from 'react';

/**
 * Scroll reveal for a group of elements.
 *
 * Children are passed straight through, so this only decorates DOM it is
 * handed. Two deliberate constraints:
 *
 * - The hidden state is applied by script and only by script, so content is
 *   never stranded invisible when JS fails.
 * - Anything already on screen at mount is left alone. Arming it would hide
 *   what the visitor can already see and fade it back in — a flash, not a
 *   reveal.
 */
export default function Reveal({
  as: Tag = 'div',
  className,
  children,
}: {
  as?: 'div' | 'section' | 'ul' | 'ol';
  className?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) {
      return undefined;
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined;
    }

    const armed = (Array.from(root.children) as HTMLElement[]).filter(
      (el) => el.getBoundingClientRect().top > window.innerHeight * 0.92,
    );

    if (armed.length === 0) {
      return undefined;
    }

    for (const el of armed) {
      el.dataset.reveal = 'armed';
    }

    const observer = new IntersectionObserver(
      (entries) => {
        // Stagger within the batch: a row entering together cascades, a single
        // element entering alone does not wait.
        let index = 0;
        for (const entry of entries) {
          if (!entry.isIntersecting) {
            continue;
          }
          const el = entry.target as HTMLElement;
          el.style.setProperty('--reveal-i', String(index));
          el.dataset.reveal = 'in';
          observer.unobserve(el);
          index += 1;
        }
      },
      { threshold: 0.15 },
    );

    for (const el of armed) {
      observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  const Component = Tag as 'div';

  return (
    <Component ref={ref as React.Ref<HTMLDivElement>} className={className}>
      {children}
    </Component>
  );
}
