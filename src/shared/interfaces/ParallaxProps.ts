import { IParallax, ParallaxLayerProps } from '@react-spring/parallax';

export interface ParallaxProps extends ParallaxLayerProps {
  parallax?: React.MutableRefObject<IParallax>;
  scrollTo?: any;
}