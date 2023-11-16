import { PickType } from '@nestjs/swagger';
import { IsBoolean,  } from 'class-validator';
import { StudentDto } from './student.dto';

export class ChangeStateStudentDto extends PickType(StudentDto, ['state']) {
    @IsBoolean()
    state: boolean;  

}

