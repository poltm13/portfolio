export interface SkillProps {
  src: string;
  focused: boolean;
  skill: string;
  color: string;
  name: string;
}

export interface SkillLogos {
  src: string,
  skill: string,
  color: string,
  name: string
}

export interface GridItem extends SkillLogos {
  xy: number[],
  width: number,
  height: number
}