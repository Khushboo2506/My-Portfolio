import "./portfolio.scss";
import PortfolioList from "../portfolioList/PortfolioList";
import {useState, useEffect} from 'react';
import{ featuredPortfolio, webPortfolio, iotPortfolio, designPortfolio, mlPortfolio} from "../../data";


export default function Portfolio() {

  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id:"featured",
      title:"Featured",
    },
    {
      id:"web",
      title:"Web App",
    },
    {
      id:"iot",
      title:"IOT",
    },
    {
      id:"design",
      title:"UI/UX Design",
    },
    {
      id:"ml",
      title:"ML App",
    },
  ];

  useEffect(()=>{

    switch(selected){
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "design":
        setData(designPortfolio);
        break;
      case "iot":
        setData(iotPortfolio);
        break;
      case "ml":
        setData(mlPortfolio);
        break; 
      default:
        setData(featuredPortfolio)  ;
    }

  },[selected])

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1><br></br>
      <ul>
        {list.map(item=>(
          <PortfolioList title={item.title} active={selected === item.id} setSelected={setSelected} id={item.id} />
        ))}
      </ul>
      <br></br>
      <div className="container">
        {data.map((d) => (
        <div className="item">
          <img src={d.img} alt=""/>
          <h3>{d.title}</h3>
        </div>
        ))}  
      </div>     
    </div>
  )
}
