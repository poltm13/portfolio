import React, { useEffect, useMemo, useRef, useState } from 'react';
import { animated, useSprings } from 'react-spring';

import Skill from './Skill';
import { skillLogos } from 'assets/index';
import useMeasure from 'react-use-measure';
import useMedia from 'shared/useMedia';

interface SkillLogos {
  src: string,
  srcType: string,
  skill: string,
  color: string,
  name: string
}

interface GridItem extends SkillLogos {
  xy: number[],
  width: number,
  height: number
}

const SkillChart = ({selected, setSelected, isVisible, className, parentProps}) => {
  
  const focusElement = (index) => {
    const newOrder = [...order];
    newOrder.unshift(...newOrder.splice(newOrder.indexOf(index), 1));
    setOrder(newOrder);
    setSelected(index + 1 === selected ? 0 : index + 1);
  }; 

  // Tie media queries to the number of columns and item's height
  const [columns, itemHeight] = useMedia();
  // Measure the width of the container element
  const [measureRef, { width }] = useMeasure();
  // Init state
  const items = useRef<SkillLogos[]>(skillLogos);
  const [order, setOrder] = useState<number[]>(items.current.map((_, index) => index));

  // Form a grid of stacked items using width & columns we got from hooks 1 & 2
  const [maxHeight, gridItems] = useMemo(() => {
    const heights: number[] = new Array(columns).fill(0);
    const itemWidth = width / columns;
    
    const positions = order.map(() => {
      const column = heights.indexOf(Math.min(...heights));
      return [itemWidth * column, (heights[column] += itemHeight) - itemHeight];
    });
      
    const gridItems: GridItem[] = items.current.map((child, i) => ({ 
      ...child, 
      xy: positions[order.indexOf(i)],
      width: itemWidth, 
      height: itemHeight 
    }));

    return [Math.max(...heights), gridItems];

  }, [columns, width, order]);

  // Define springs
  const springs = useSprings(gridItems.length, gridItems.map((item) => ({xy: item.xy, width: item.width})));
  const childProps = useSprings(gridItems.length, gridItems.map((_, i) => ({
    y: selected === i + 1 ? -100 : 0,
    scale: selected === i + 1 ? 1.7 : 1,
    delay: 400
  })));

  const rendered = useRef(false);
  useEffect(() => {
    if (isVisible && !rendered.current) {
      rendered.current = true;
      setTimeout(() => focusElement(0), 500);
    }
  }, [isVisible]);

  return (
    <animated.div ref={measureRef} style={{...parentProps, height: maxHeight, position: 'relative'}} className={className}>
      {springs.map(({ xy, width }, i) => (
        <animated.div 
          style={{
            transform: xy.to((x, y) => `translate3d(${x}px,${y}px,0)`), 
            width: width
          }}
          className='skill'
          key={i}
        >
          <animated.div 
            style={childProps[i]}
            onClick={() => focusElement(i)}
          >
            <Skill
              src={gridItems[i].src}
              focused={selected === i + 1 }
              skill={gridItems[i].skill}
              color={gridItems[i].color}
              name={gridItems[i].name}
            />
          </animated.div>
        </animated.div>
      ))}
    </animated.div>
  );
};

export default SkillChart;
