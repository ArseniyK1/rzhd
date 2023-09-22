import { PartialType } from '@nestjs/mapped-types';
import { CreateTrainDto } from './create-train.dto';

export class UpdateFlightDto extends PartialType(CreateTrainDto) {}
