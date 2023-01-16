import React from 'react'
import Typography from '../Typography'
import Button from '../Button'
import Spacer from '../Spacer'
// import classes from './styles'

interface BannerProps{
  title: string;
  subtitle: string;
  actionText?: string;
  action?: Function;
  color?: string;
}

const Banner: React.FC<BannerProps> = (props) => {
  return (
    <div className={`bg-${props.color}-100 p-6 rounded-2xl`}>
        <Typography type="title" size="x-small" weight="normal" color={props.color}>{props.title}</Typography>
        <Spacer type="vertical" size="6" />
        <Typography type="text" size="small" weight="light" color={props.color}>{props.subtitle}</Typography>
        <Spacer type="vertical" size="24" />
        {props.actionText &&
            <Button size="small" color={props.color}>{props.actionText}</Button>
        }
    </div>
  )
}

export default Banner