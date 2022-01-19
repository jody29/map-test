import { useContext } from "react"
import { YearContext } from "./provider"
import { Slider } from "@mui/material"
import './filter.css'

export const Filters = () => {
    const {setYear} = useContext(YearContext)

    const marks = [
        {
            value: 2019,
            label: '2019',
        },
        {
            value: 2020,
            label: '2020',
        },
        {
            value: 2021,
            label: '2021',
        },
    ]

    const yearClick = (value) => {
        setYear(value)
    }

    return (
        <>
        <div className="slider">
            <Slider 
            aria-label="Year"
            sx={{
                width: '20%',
                color: '#FF6600',
                '& .MuiSlider-thumb': {
                    borderRadius: '0',
                },
                '& .MuiSlider-markLabel': {
                    fontFamily: 'sans-serif',
                    fontWeight: 'bolder',
                    color: 'white'
                }
            }}
            defaultValue={2019}
            valueLabelDisplay="auto"
            getAriaValueText={yearClick}
            step={1}
            marks={marks}
            min={2019}
            max={2021}
            />
        </div>
        </>
    )

    
}