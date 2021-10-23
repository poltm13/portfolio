import { IParallax } from '@react-spring/parallax';
import React from 'react';

export default class Utils {

  static hoverEffect = (selector: string, className: string): React.DOMAttributes<any> => ({
    onMouseOver: () => this.toggleClass(selector, className, true),
    onMouseOut: () => this.toggleClass(selector, className, false)
  });

  static cursorHoverEffect = (color?: string): React.DOMAttributes<HTMLElement> => ({
    onMouseOver: () => this.handleHoverSmall(true, color),
    onMouseOut: () => this.handleHoverSmall(false, color)
  });
  
  static handleHoverSmall(toggle: boolean, color?: string): void {
    document.querySelector('.cursorMain')?.classList.toggle('hover-small', toggle);
  
    if (color) {
      document.querySelectorAll('.cursorMain > div')?.forEach((cursor: HTMLElement) => {
        toggle ? 
          cursor.style.setProperty('background', color)
          : 
          cursor.style.removeProperty('background');
      });
      document.querySelectorAll('.skills-blob')?.forEach((blob: HTMLElement) => {
        toggle ? 
          blob.style.setProperty('background', color)
          : 
          blob.style.removeProperty('background');
      });
    }
  }

  static toggleClass = (selector: string, className: string, toggle: boolean): void => {
    document.querySelectorAll(selector).forEach((item) => item.classList.toggle(className, toggle));
  };
  
  static isTouchDevice = (): boolean => ('ontouchstart' in window || navigator.maxTouchPoints > 0);
  
  static resetContentScroll = (): void => {document.getElementById('content')?.scrollTo(0, 0);};

  static handleArrowUp = (parallax: React.MutableRefObject<IParallax>, page: React.MutableRefObject<number>): void => {
    this.scrollTo(0, parallax, page);
    this.toggleClass('.cursorMain', 'onHeader', true);
    this.toggleClass('#Smile', 'visible', false);
    this.toggleClass('.sticky-nav--element', 'sticky-nav--anim', false);
    setTimeout(() => this.resetContentScroll(), 1000);
  };

  static handleArrowDown = (parallax: React.MutableRefObject<IParallax>, page: React.MutableRefObject<number>): void => {
    this.scrollTo(1, parallax, page);
    Utils.toggleClass('.cursorMain', 'onHeader', false);
    Utils.toggleClass('#Smile', 'visible', true);
    Utils.toggleClass('.sticky-nav--element', 'sticky-nav--anim', true);
  };

  static scrollTo = (to: number, parallax: React.MutableRefObject<IParallax>, page: React.MutableRefObject<number>): void => {
    parallax?.current?.scrollTo(to);
    page.current = to;
  };
}
