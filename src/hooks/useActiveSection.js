import { useEffect, useState } from 'react';

/**
 * Observa uma lista de IDs de seção e retorna qual delas está
 * atualmente mais visível na viewport, para destacar o link ativo no menu.
 */
export function useActiveSection(sectionIds) {
  const [activeId, setActiveId] = useState(sectionIds[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visivel = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visivel) {
          setActiveId(visivel.target.id);
        }
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    const elementos = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    elementos.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeId;
}
