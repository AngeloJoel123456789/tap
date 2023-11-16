import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name:"cars"})
export class CarsEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({
        name:"model",
        type: "varchar",
        length: "100"
    })
    model: string;
  
    @Column({
        name:"make",
        type: "varchar",
        length: "100"
    })
    make: string;
  
    @Column({
        name:"current_price",
        type: "integer"
    })
    currentprice: number;
  
    @Column({
        name:"fuel_type",
        type: "varchar",
        length: "100"
    })
    fuelType:string;

    @Column({
        name:"years",
        type: "integer"
    })
    year: number;
  
}