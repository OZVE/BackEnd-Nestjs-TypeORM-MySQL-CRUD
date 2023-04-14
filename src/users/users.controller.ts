import { Controller, Post, Body, Get, Param, ParseIntPipe, Delete, Patch } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user-dto';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { UpdateUserDto } from './dto/update-user-dto';

@Controller('users')
export class UsersController {

    constructor(private userService: UsersService) { }

    @Get()
    getUsers(): Promise<User[]>{
        return this.userService.getUsers();
    } 

    @Get(':id')
    getUser(@Param('id', ParseIntPipe ) id: number): Promise<User>{
        return this.userService.getUser(id);
        
    } 

    @Post()
    createUser(@Body() newUser: CreateUserDto) : Promise<User> {
        return this.userService.createUser(newUser)
    }

    @Delete(':id')
    deleteUser(@Param('id', ParseIntPipe) id: number){
        return this.userService.deleteUser(id);
    }

    @Patch(':id')
    updateUser(@Param('id', ParseIntPipe) id:number, @Body() user: UpdateUserDto){
        return this.userService.updateUser(id, user);
    }
}
