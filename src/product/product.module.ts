import { Module } from "@nestjs/common";
import { productController } from "./product.controller";

@Module ({
    controllers: [productController]
})
export class productModule {}