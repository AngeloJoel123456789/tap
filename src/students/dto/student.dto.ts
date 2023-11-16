/*import { IsEmail, MinLength, min, , IsBoolean } from 'class-validator';

export class StudentDto {
    @IsEmail()
  email: string; 

  @MinLength(2)
  name: string;
  
}
*/
import { IsBoolean, IsEmail, IsNotEmpty, IsString, MaxLength, Min, MinLength, isBoolean, minLength,   } from 'class-validator';
import { minLengthValidationOption } from '../../comoon/validation.dto';

export class StudentDto {
    @IsEmail()
  email: string; 

  @MinLength(2)
  name: string;

  @IsNotEmpty()
  phone: string;

  @Min(0)
  age: number;

  @IsBoolean()
  state: boolean;

  @IsString()
  bloodType: string;
}


