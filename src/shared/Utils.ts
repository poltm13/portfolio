export default class Utils {

  static hoverEffect = (selector: string, className: string): React.DOMAttributes<any> => ({
    onMouseOver: () => document.querySelectorAll(selector).forEach((item) => item.classList.toggle(className, true)),
    onMouseOut: () => document.querySelectorAll(selector).forEach((item) => item.classList.toggle(className, false))
  })

  static cursorHoverEffect = (color?: string): React.DOMAttributes<HTMLElement> => ({
    onMouseOver: () => this.handleHoverSmall(true, color),
    onMouseOut: () => this.handleHoverSmall(false, color)
  })
  
  static handleHoverSmall(toggle: boolean, color?: string): void {
    document.querySelector('.cursorMain')?.classList.toggle('hover-small', toggle);
  
    if (color) {
      document.querySelectorAll('.cursorMain > div')?.forEach((cursor: HTMLElement) => {
        toggle ? 
          cursor.style.setProperty('background', color)
          : 
          cursor.style.removeProperty('background');
      });
    }
  }
  
  static isTouchDevice = (): boolean => (typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0));
  
  static resetContentScroll = (): void => {document.getElementById('content')?.scrollTo(0, 0);};
}
