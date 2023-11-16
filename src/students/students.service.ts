import { Injectable, NotFoundException, Delete } from '@nestjs/common';
import { StudentEntity } from './student.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './dto/student-entity';
import { CreateStudentDto } from './dto/create-student.dto';
import { updateStudentDto } from './dto/update-student.dto';
import { response } from 'express';
@Injectable()
export class StudentService{
    constructor( @InjectRepository(StudentEntity)
    private StudetsRepository: Repository<StudentEntity>,
    ){}
      async find(){
        const students =await this.StudetsRepository.find();
        console.log(students);
        return students;
      }

        async findOne( id : number){
            const student =await this.StudetsRepository.findOne({where:{id: id}});
            console.log(student);

            if(!Student){
                throw new NotFoundException({
                    message: 'estudiante no encontrado',
                    error: 'no encontrado',
                });
                }
            return student;
    }

    async create( payload : CreateStudentDto){
        const newStudent= this.StudetsRepository.create();

        newStudent.age = payload.age;
        newStudent.bloodType = payload.bloodType;
        newStudent.email = payload.email;
        newStudent.phone = payload.phone;
        newStudent.name = payload.name;
        newStudent.state = payload.state;

        return await this.StudetsRepository.save(newStudent)
}

async update( id: number, payload : updateStudentDto){
    const Student= await this.findOne(id);
    if(!Student){
        throw new NotFoundException({
            message: 'estudiante no encontrado',
            error: 'no encontrado',
        });
        }

    Student.age = payload.age;
    Student.bloodType = payload.bloodType;
    Student.email = payload.email;
    Student.phone = payload.phone;
    Student.name = payload.name;
    Student.state = payload.state;

    return await this.StudetsRepository.update(id, Student);
}

async Delete( id: number){
    const Student= await this.findOne(id);
    
    if(!Student){
    throw new NotFoundException({
        message: 'estudiante no encontrado',
        error: 'no encontrado',
    });
    }
    return await this.StudetsRepository.delete(id);
}

}
