import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCarsDTO } from './DTO/CreateCars.dto';
import { UpdateCarsDTO } from './DTO/UpdateCars.dto copy';
import { CarsEntity } from './cars.entity';
import { Repository } from 'typeorm';
import { ChangeCarsDTO } from './DTO/change-state-cars.dto';

@Injectable()
export class CarsService {
    constructor(@InjectRepository(CarsEntity) private CarsRepository: Repository<CarsEntity>){}

    async find(){
        const cars:CarsEntity[]= await this.CarsRepository.find();
        return cars;
    }

    async findOne(id:number){
        const findcars:CarsEntity=await this.CarsRepository.findOne({
            where:{id:id}
        })

        if(!findcars){
            throw new  NotFoundException({
                message: "cars no encontrado",
                error: "no encontrado"
            })
        }

        return findcars;
    }

    async create(payload:CreateCarsDTO){
        const carsCreate:CarsEntity=this.CarsRepository.create();

        carsCreate.model=payload.model
        carsCreate.make=payload.make
        carsCreate.fuelType=payload.fuelType
        carsCreate.year=payload.year
        carsCreate.currentprice=payload.currentprice

        return await this.CarsRepository.save(carsCreate);
    }

    async Put(id:number,payload:UpdateCarsDTO){
        const carsfind:CarsEntity=await this.findOne(id);
        if(!carsfind){
            throw new  NotFoundException({
                message: "cars no encontrado",
                error: "no encontrado"
            })
        }

        
        carsfind.model=payload.model
        carsfind.make=payload.make
        carsfind.fuelType=payload.fuelType
        carsfind.year=payload.year
        carsfind.currentprice=payload.currentprice

        return await this.CarsRepository.update(id, carsfind);
    }

    async changeState(id:number, payload:ChangeCarsDTO){
        const existingCars:CarsEntity = await this.findOne(id);

        if (!existingCars) {
          throw new NotFoundException({
            message: "cars no encontrado",
            error: "no encontrado"
        });
        }
    
        const updatedcars:CarsEntity = { ...existingCars, ...payload};
        
        return await this.CarsRepository.update(id, updatedcars);
    }

    async delete(id:number){
        const Carsfine= await this.findOne(id);

        if(!Carsfine){
            throw new  NotFoundException({
                message: "cars no encontrado",
                error: "no encontrado"
            })
        }

        return await this.CarsRepository.delete(id)
    }
}
