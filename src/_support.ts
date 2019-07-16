/** Whether or not this driver is supported by the browser */
export const _support: boolean = ((): boolean => {
  try {
    if (typeof sessionStorage !== 'undefined') {
      const k = `_support-${Math.random()}`;
      sessionStorage.setItem(k, 'supported');
      sessionStorage.removeItem(k);

      return true;
    }
  } catch {
    // default to returning false
  }

  return false;
})();
