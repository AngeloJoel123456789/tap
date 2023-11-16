import { PartialType } from "@nestjs/swagger";
import { carsDTO } from "./Cars.dto";

export class ChangeCarsDTO extends PartialType(carsDTO){
    
}