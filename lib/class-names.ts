export const classNames = (
    ...classes: (string | undefined | boolean | null)[]
  ) => classes.filter(Boolean).join(' ');
  