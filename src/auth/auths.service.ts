import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Auths } from './schema/auth.schema';
import { Model } from 'mongoose';

@Injectable()
export class AuthsService {

  constructor(
    @InjectModel(Auths.name) private authModel: Model<Auths>
  ){}

  async create(createAuthDto: CreateAuthDto) {
    const addNewOne = new this.authModel(createAuthDto)
    return addNewOne.save()
  }

  findAll() {
    return `This action returns all auths`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
