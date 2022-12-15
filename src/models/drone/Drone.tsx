// t.string :name
// t.integer :price
// t.string :type
// t.integer :top_speed
// t.string :release_date

type Drone = null | {
    drone :{
        name: string,
        price: number,
        type: string,
        topSpeed: number,
        release_date: string
    }
}

export default Drone;
