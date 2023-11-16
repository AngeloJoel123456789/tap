import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { IsNotEmptyValidationOption, IsNumberValidationOption, IsStringValidationOption } from "src/comoon/validation.dto";


export class carsDTO {
    @IsNotEmpty(IsNotEmptyValidationOption())
    @IsString(IsStringValidationOption())
    model: string;

    @IsNotEmpty(IsNotEmptyValidationOption())
    @IsString(IsStringValidationOption())
    make: string;

    @IsNotEmpty(IsNotEmptyValidationOption())
    @IsNumber({},IsNumberValidationOption())
    currentprice: number;

    @IsNotEmpty(IsNotEmptyValidationOption())
    @IsString(IsStringValidationOption())
    fuelType:string;

    @IsNotEmpty(IsNotEmptyValidationOption())
    @IsNumber({},IsNumberValidationOption())
    year: number;

   
}