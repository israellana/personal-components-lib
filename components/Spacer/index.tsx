import React from 'react'

interface SpacerProps{
  size: string;
  type: string;
}

export const Spacer: React.FC<SpacerProps> = (props) => {
  return (
    <div style={{ height: props.type === 'vertical' || props.type === 'both' ? `${props.size}px`: '0px', width: props.type === 'horizontal' || props.type === 'both' ? `${props.size}px` : '0px' }} />
  )
}