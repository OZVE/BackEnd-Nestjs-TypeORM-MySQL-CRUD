import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user-dto'
import { UpdateUserDto } from './dto/update-user-dto';
@Injectable()
export class UsersService {

        constructor(@InjectRepository(User) private useRepository: Repository<User>) {}

            createUser(user: CreateUserDto){
                const newUser = this.useRepository.create(user)
                return this.useRepository.save(newUser)
            };

            getUsers(){
                return this.useRepository.find()
            }

            getUser(id: number){
                return this.useRepository.findOne({
                    where: {
                        id
                    }
                })

            }

            deleteUser(id: number){
                return this.useRepository.delete({id})
            }

            updateUser(id: number, user: UpdateUserDto){
                return this.useRepository.update({id}, user)
            }
}
