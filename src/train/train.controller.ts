import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TrainService } from './train.service';
import { Train } from 'src/entities/Train.entity';
import { CreateTrainDto } from './dto/create-train.dto';
import { UpdateTrainDto } from './dto/update-train.dto';

@Controller('train')
export class TrainController {
  constructor(private readonly trainService: TrainService) {}

  @Post()
  create(@Body() createTrainDto: CreateTrainDto) {
    return this.trainService.create(createTrainDto);
  }

  @Get()
  findAll(): Promise<Train[]> {
    return this.trainService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.trainService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateTestDto: UpdateTrainDto) {
    const updatedTrain = this.trainService.update(id, updateTestDto);
    return updatedTrain;
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    this.trainService.remove(id);
    return { message: 'Train deleted successfully' };
  }
}
