import { GridItem, SkillLogos } from 'shared/interfaces/SkillProps';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { animated, useSprings } from 'react-spring';

import Skill from './Skill';
import { skillLogos } from 'assets/index';
import useMeasure from 'react-use-measure';
import useMedia from 'shared/useMedia';

const SkillChart = ({selected, setSelected, className, firstRender}) => {
  
  const focusElement = (index) => {
    if(index === order[0] || !selected) {
      setSelected((s) => !s);
    }
    const newOrder = [...order];
    newOrder.unshift(...newOrder.splice(newOrder.indexOf(index), 1));
    setOrder(newOrder);
  }; 

  useEffect(() => {
    if (firstRender) focusElement(0);
  }, [firstRender]);

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
    y: order[0] === i && selected ? -100 : 0,
    scale: order[0] === i && selected ? 1.7 : 1,
    delay: 400
  })));

  return (
    <div ref={measureRef} style={{height: maxHeight, position: 'relative'}} className={className}>
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
              focused={order[0] === i && selected}
              skill={gridItems[i].skill}
              color={gridItems[i].color}
              name={gridItems[i].name}
            />
          </animated.div>
        </animated.div>
      ))}
    </div>
  );
};

export default React.memo(SkillChart);
