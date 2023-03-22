import { CacheModule, Module } from '@nestjs/common';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { HttpModule } from '@nestjs/axios';
import { APP_GUARD } from '@nestjs/core';
import { PrismaModule } from 'nestjs-prisma';
import { CharacterModule } from '../common/entities';

@Module({
  imports: [
    ThrottlerModule.forRoot({
      ttl: 30,
      limit: 15,
    }),
    CacheModule.register({ isGlobal: true }),
    PrismaModule,
    HttpModule,
    CharacterModule,
  ],
  providers: [{ provide: APP_GUARD, useClass: ThrottlerGuard }],
})
export class AppModule {}
