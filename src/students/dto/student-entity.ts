import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Student{
    @PrimaryGeneratedColumn()
id: number ;
@Column()
name: string;
@Column()
email: string; 
@Column()
phone: string;
@Column()
age: string;
@Column()
state: boolean;
}