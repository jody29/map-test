import { useContext } from 'react'
import './maplegend.css'
import { YearContext } from './provider'

const MapLegend = ({lon, lat}) => {
    const colors = [
        {material: 'plastic', color: '#FF2C2C'}, 
        {material: 'papier', color: '#4FC639'}, 
        {material: 'karton', color: '#D6A5FF'}, 
        {material: 'metaal', color: '#7C81FF'}, 
        {material: 'glas', color: '#FFF855'},
        {material: 'microvezels', color: '#88CDFF'},
        {material: 'piepschuim', color: '#FFFFFF'},
        {material: 'hout', color: '#A5771F'},
        {material: 'aluminium', color: '#909090'},
]

const {selectedLocation} = useContext(YearContext)

    return (
        <div className="legend">
            <h2>{selectedLocation ? selectedLocation : 'Try again'}</h2>
            <ul>
                {colors.map(color => (
                    <li>
                        <span style={{
                            backgroundColor: color.color,
                            width: '1em',
                            height: '1em',
                            borderRadius: '50%'
                        }}></span>
                        <p>{color.material}</p>
                    </li>
                ))}
                
            </ul>
        </div>
    )
}

export default MapLegend