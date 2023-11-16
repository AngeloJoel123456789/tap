import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateStudentDto } from './dto/create-student.dto';
import { updateStudentDto } from './dto/update-student.dto';
import { ChangeStateStudentDto } from './dto/change-state-student.dto';
import { StudentService } from './students.service';

@ApiTags('Students')
@Controller('students')
export class StudentController {
    constructor(private readonly StudentService:StudentService){

    }

@ApiOperation({ summary: 'Find Students'})
    @Get()
    find(@Query() query:any) {
        const response = this.StudentService.find();
        return response ;
    }

@ApiOperation({ summary: 'Find One Student'})
    @Get(':id')
async findOne(@Param('id') id:number){
    const response = this.StudentService.findOne(id);
    return response;
}

@ApiOperation({ summary: 'Create Student'})
@Post ()
async create (@Body()payload: CreateStudentDto){
    const response = this.StudentService.create(payload);
    return response;
}

@ApiOperation({ summary: 'Update Student'})
@Put(':id')
async Update
(@Param('id', ParseIntPipe) id: number,   @Body() payload:updateStudentDto){
    const response = this.StudentService.update(id, payload);
    return response;
}

@ApiOperation({ summary: 'Change Student State'})
@Patch (':id')
changeState(@Param('id', ParseIntPipe) id: number,  @Body() payload: ChangeStateStudentDto ){
    return { id, Body: payload}
}

@ApiOperation({ summary: 'Delete Student'})
@Delete(':id')
async Delete(@Param('id', ParseIntPipe) id: number ){
    const response = this.StudentService.Delete(id);
    return response;
}
}

