import React from 'react'
import gamingGrowth from '../news-homepage-main/assets/images/image-gaming-growth.jpg'
import retroPcs from '../news-homepage-main/assets/images/image-retro-pcs.jpg'
import topLaptops from '../news-homepage-main/assets/images/image-top-laptops.jpg'
import PieceOfOptions from './PieceOfOptions'

const data = [
  {
    id: 1,
    1: "01",
    2: "Reviving Retro PCs",
    3: "What happens when old PCs are given modern upgrades?",
    4:  retroPcs
  },
  {
    id: 2,
    1: "02",
    2: "Top 10 Laptops of 2022",
    3: "Our best picks for various needs and budgets.",
    4: topLaptops
  },
  {
    id: 3,
    1: "03",
    2: "The Growth of Gaming",
    3: "How the pandemic has sparked fresh opportunities.",
    4: gamingGrowth
  }
]
const Options = () => {
  return (
    <div className="optionsBox">
      {data.map(obj => {
       return (
        <PieceOfOptions 
            key={obj.id}
            picture={obj[4]}
            firstString={obj[1]}
            secondString={obj[2]}
            thirdString={obj[3]}
          />)
      })}
    </div>
  )
}

export default Options