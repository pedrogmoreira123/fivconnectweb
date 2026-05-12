declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackContatoConversion() {
  window.gtag?.('event', 'ads_conversion_Contato_1');
}
