export default class Utils {

  static hoverEffect = (color?: string): React.DOMAttributes<HTMLElement> => ({
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
