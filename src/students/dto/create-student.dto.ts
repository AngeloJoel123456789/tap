import { IsBoolean, IsEmail, IsNotEmpty, IsNumber, IsString, MaxLength, MinLength, minLength,   } from 'class-validator';
import { minLengthValidationOption } from '../../comoon/validation.dto';

export class CreateStudentDto {
    @IsEmail()
  email: string; 

  @MinLength(2)
  name: string;

  @IsNotEmpty()
  phone: string;

  @IsNumber()
  age: number;

  @IsString()
  bloodType: string;

  @IsBoolean()
  state: boolean;
}

