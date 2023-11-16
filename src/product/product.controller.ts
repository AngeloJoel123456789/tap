import { Controller, Get } from "@nestjs/common";

@Controller('products')
export class productController {
    @Get('hello- word')
    HelloWord(): String {
        return 'Hello Word';
    }
}