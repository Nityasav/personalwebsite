/** Scroll offset (vh) into the horizontal section to show each section. Used by StoryPanel on mobile. */
export const SCROLL_OFFSET_VH = {
  about: 0,
  project: 440,
  contact: 1050,
} as const;

/** Desktop: progress 0..1 for wheel-driven horizontal section. Nav uses this to jump to a panel. */
export const HORIZONTAL_PROGRESS = {
  about: 0,
  project: 440 / 1150, // ~0.38, start of Projects
  contact: 1,
} as const;

export type ScrollKey = keyof typeof SCROLL_OFFSET_VH;

export const HORIZONTAL_SCROLL_TO_EVENT = "horizontal-scroll-to" as const;
