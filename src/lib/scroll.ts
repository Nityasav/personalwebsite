/** Scroll offset (vh) into the horizontal section to show each section. Shared by Nav and StoryPanel. */
export const SCROLL_OFFSET_VH = {
  about: 0,
  project: 440,
  contact: 1050, // content end; section height has buffer beyond this so scroll reaches end
} as const;

export type ScrollKey = keyof typeof SCROLL_OFFSET_VH;
