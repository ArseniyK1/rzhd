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
import { TrainDto } from './dto/train.dto';
import { Train } from 'src/entities/Train.entity';
import { CreateTrainDto } from './dto/create-train.dto';

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

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateTrainDto: UpdateTrainDto) {
  //   return this.trainService.update(+id, updateTrainDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.trainService.remove(+id);
  // }
}
