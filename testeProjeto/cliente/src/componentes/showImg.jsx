import amirhossein from '../img/amirhossein.jpg';
import axp from '../img/axp.jpg';
import carl from '../img/carl.jpg';
import telun from '../img/te-lun.jpg';

export default function Card (){
    const imgSrc = {heigth:"250px", width:"500px" }
    return (
        <div className="container">
            <img style={imgSrc}  src={amirhossein} alt="" />
            <img style={imgSrc} src={axp} alt="" />
            <img style={imgSrc} src={carl} alt="" />
            <img style={imgSrc} src={telun} alt="" />
        </div>
    )
}