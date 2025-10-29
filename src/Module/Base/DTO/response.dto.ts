import { ApiProperty } from '@nestjs/swagger';

export class CreatedResponseDto<T> {
  @ApiProperty({ description: 'Response message' })
  message: string;

  @ApiProperty({ description: 'Response status' })
  status: string;

  @ApiProperty({ description: 'Created entity data' })
  data: T;
}

export function createResponseDto<T>(payload: T): any {
  class CreatedDto {
    @ApiProperty()
    message: string;

    @ApiProperty()
    status: string;

    @ApiProperty()
    data: T;
  }

  return CreatedDto;
}

