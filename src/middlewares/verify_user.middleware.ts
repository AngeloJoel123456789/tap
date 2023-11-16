import { Injectable, NestMiddleware, Body } from '@nestjs/common';
import {  NextFunction, Request, Response } from "express"

@Injectable()
export class  VerifyUserMiddleware implements NestMiddleware  { 
    use (req: Request, res: Response, next: NextFunction ){
        console.log(req.method);
        console.log(req.body)


        
        next()

        
    }
} 


