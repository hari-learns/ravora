'use client';

import { useEffect, useRef, type ReactNode } from 'react';

/**
 * Scroll reveal for a group of elements.
 *
 * Children are passed straight through, so this only decorates DOM it is
 * handed. Three deliberate constraints:
 *
 * - The hidden state is applied by script and only by script, so content is
 *   never stranded invisible when JS fails.
 * - Anything already on screen at mount is left alone. Arming it would hide
 *   what the visitor can already see and fade it back in — a flash, not a
 *   reveal.
 * - Reveal is decided by measuring position, not by trusting an event. An
 *   IntersectionObserver only reports the frames it samples, so a jump past
 *   armed content — an anchor link, a restored scroll position — can move an
 *   element from below the viewport to above it without ever firing, stranding
 *   it invisible. The observer, scroll, and resize all just trigger the same
 *   sweep, and the sweep re-checks every element still pending.
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

    const pending = new Set(armed);
    let observer: IntersectionObserver | null = null;

    const teardown = () => {
      window.removeEventListener('scroll', sweep);
      window.removeEventListener('resize', sweep);
      observer?.disconnect();
      observer = null;
    };

    /*
      Deliberately not deferred to requestAnimationFrame. rAF is throttled or
      suspended entirely in a background tab, which would leave armed content
      hidden until the tab is looked at. Measuring a handful of elements
      inline is cheap, and `pending` only shrinks.
    */
    function sweep() {
      // Stagger within the sweep: a row arriving together cascades, a single
      // element arriving alone does not wait.
      let index = 0;
      for (const el of pending) {
        if (el.getBoundingClientRect().top < window.innerHeight * 0.85) {
          el.style.setProperty('--reveal-i', String(index));
          el.dataset.reveal = 'in';
          pending.delete(el);
          index += 1;
        }
      }
      if (pending.size === 0) {
        teardown();
      }
    }

    // Three independent triggers for one sweep. The observer is the reliable
    // one during ordinary scrolling; the listeners cover jumps where it never
    // samples an intersecting frame.
    observer = new IntersectionObserver(sweep, { threshold: 0 });
    for (const el of armed) {
      observer.observe(el);
    }

    window.addEventListener('scroll', sweep, { passive: true });
    window.addEventListener('resize', sweep);
    sweep();

    return teardown;
  }, []);

  const Component = Tag as 'div';

  return (
    <Component ref={ref as React.Ref<HTMLDivElement>} className={className}>
      {children}
    </Component>
  );
}
