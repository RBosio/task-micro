import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { RmqContext, RmqOptions, Transport } from '@nestjs/microservices';

@Injectable()
export class RmqService {
  constructor(private configService: ConfigService) {}

  getRmqOptions(name: string, noAck: boolean = true): RmqOptions {
    return {
      transport: Transport.RMQ,
      options: {
        urls: [this.configService.get<string>('RABBITMQ_URI')],
        queue: this.configService.get<string>(`RABBITMQ_${name}_QUEUE`),
        noAck,
        queueOptions: {
          durable: false,
        },
      },
    };
  }

  acknowledgementMessage(context: RmqContext): void {
    const channel = context.getChannelRef();
    const message = context.getMessage();

    channel.ack(message);
  }
}
