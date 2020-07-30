import {GetCars, GetPeople} from '../services';
import React from 'react'

export function PersonsCar() {
    let cars = GetCars()
    let persons = GetPeople()

    

    const getCars  = []
    cars.map(car => getCars.push({id: car.id, car: `${car.year} ${car.make} ${car.model}`}))

    function getCar(carID) {
        getCars.find(getCar => {
            if(getCar.id === carID) {
               return(getCar.car) 
            }
        }) 
    }
    let carsOwn = []
    persons.map(person => person.cars.map(car => cars.find(findCar => {
        if(findCar.id === car) {
            carsOwn.push(`${findCar.year} ${findCar.make} ${findCar.model}`)
        }
    })))
     
    const ownedCars = []
    persons.map(person => ownedCars.push({id: person.id, name: person.name, cars: carsOwn.splice(0, person.cars.length)
    }))

    
    console.log(ownedCars)
    return (
        <div>
            {ownedCars.map((personsCar) =>
                <div key={personsCar.id}>
                    <div style={{border: '1px solid black', padding: '15px'}}>
                        <h4>id: {personsCar.id}</h4>
                        <h2>Name: {personsCar.name}</h2>
                        <div><b>Cars Owned: </b>
                        {personsCar.cars.map((car, index) => 
                        <div key={index}>
                            <p>• {car}</p>
                            </div>
                            )}
                        </div>
                    </div>  
                </div>  
            )}
        </div>
    )
}