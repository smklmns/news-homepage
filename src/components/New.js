import React from 'react'
import PieceOfNew from './PieceOfNew'

const data = [
  {
    id: 1,
    1: "Hydrogen VS Electric Cars",
    2: "Will hydrogen-fueled cars ever catch up to EVs?"
  },
  {
    id: 2,
    1: "The Downsides of AI Artistry",
    2: "What are the possible adverse effects of on-demand AI image generation?"
  },
  {
    id: 3,
    1: "Is VC Funding Drying Up?",
    2: "Private funding by VC firms is down 50% YOY. We take a look at what that means."
  }
]
const New = () => {
  return (
    <div className='newBox'>
      <h2>New</h2>
      {data.map(obj => {
       return <PieceOfNew key={obj.id} firstString={obj[1]} secondString={obj[2]} />
      })}
    </div>
  )
}

export default New