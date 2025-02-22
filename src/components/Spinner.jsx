import React from 'react'
import { RingLoader } from 'react-spinners'

const override = {
    display: 'block', 
    margin: '100px auto', 

}

const Spinner = ({loading}) => {
  return (
    <RingLoader 
        color = {'#50C878'}
        loading = {loading}
        cssOverride={override}
        size = {200}
    />
  )
}

export default Spinner