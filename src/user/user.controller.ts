import { Controller, Get } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";

@ApiTags('Users')
@Controller('users')

export class UserController {



    @ApiOperation({
        description: 'Hello Word',
        summary: 'Find Users',
    })
    @Get('hello-world')
    helloworld() {
        return 'hello world';
    }

    @ApiOperation({
        description: 'Hello Word',
        summary: 'Update users',
    })
    @Get('hello-world2')
    helloworld2() {
        return 'hello world2';
    }
}

