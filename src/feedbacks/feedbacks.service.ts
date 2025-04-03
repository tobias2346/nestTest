import { Injectable } from '@nestjs/common';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
import { UpdateFeedbackDto } from './dto/update-feedback.dto';
import { InjectModel } from '@nestjs/mongoose';
import { FeedBacks } from './schema/feedbacks.schema';
import { Model } from 'mongoose';
import { Types } from 'mongoose';

@Injectable()
export class FeedbacksService {

  constructor(
    @InjectModel(FeedBacks.name) private feedbackModel: Model<FeedBacks>
  ) { }

  async create(createFeedbackDto: CreateFeedbackDto) {
    const createNewFeedback = new this.feedbackModel(createFeedbackDto);
    const create = createNewFeedback.save()
    return create;
  }

  async findAll() {
    return this.feedbackModel.find().exec()
  }


  async remove(id: string) {
      // Convertir el id a ObjectId
      const objectId = new Types.ObjectId(id);

      // Eliminar el documento de la base de datos usando deleteOne
      const result = await this.feedbackModel.deleteOne({ _id: objectId }).exec();
    
      // Retornar un resultado, por ejemplo, un mensaje de éxito
      if (result.deletedCount === 1) {
        return { message: 'Feedback eliminado exitosamente' };
      } else {
        return { message: 'No se encontró el feedback con ese ID' };
      }
    }
    
  }
