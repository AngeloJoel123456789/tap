import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CarsService } from './cars.service';
import { CreateCarsDTO } from './DTO/CreateCars.dto';
import { UpdateCarsDTO } from './DTO/UpdateCars.dto copy';
import { ChangeCarsDTO } from './DTO/change-state-cars.dto';

@ApiTags('Cars')
@Controller('cars')
export class CarsController {

    constructor(private readonly CarsService:CarsService){}

    @ApiOperation({ description: "find Cars", summary: "find Cars", })
    @Get()
    async find() {
        return await this.CarsService.find()
    }

    @ApiOperation({ description: "find One Car", summary: "find One Car", })
    @Get(':id')
    async findOne(@Param('id') id: number) {
        return await this.CarsService.findOne(id);
    }


    @ApiOperation({ description: "Create Cars", summary: "Create Cars", })
    @Post()
    async create(@Body() payload: CreateCarsDTO) {
        return await this.CarsService.create(payload);
    }



    @ApiOperation({ description: "update Cars", summary: "update Cars", })
    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() payload: UpdateCarsDTO) {
        return await this.CarsService.Put(id,payload);
    }


    @ApiOperation({ description: "change Cars", summary: "change Cars", })
    @Patch(':id')
    async changeState(@Param('id', ParseIntPipe) id: number, @Body() payload:ChangeCarsDTO) {
        return await this.CarsService.changeState(id,payload);
    }


    @ApiOperation({ description: "delete Cars", summary: "delete Cars", })
    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number) {
        return await this.CarsService.delete(id);
    }
}

