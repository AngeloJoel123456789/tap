import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'students'})
export class StudentEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'name', type: 'varchar', length: '30', comment: 'Mi comentario'})
  name: string;

    @Column({ name: 'email', type: 'varchar', length: '50', comment: 'Correo Electronico'})
    email: string; 

    @Column({ name: 'ponhe', type: 'varchar', nullable: true, comment: 'telefono Fijo'})
  phone: string;

  @Column({name: 'age', type: 'integer', comment: 'Edad del estudiante'})
  age: number;

  @Column({name: 'state', type: 'boolean', default: true, comment: 'Estado'})
  state: boolean;

  @Column({name: 'blood_type', type: 'varchar',default: '0+', length: 2})
  bloodType: string;

}