import { DynamicModule, Module, OnApplicationBootstrap } from '@nestjs/common';
import { SampleAsyncService } from './sample-async.service';

export interface AsyncSampleModuleConfiguration {
  name: string;
  target: string;
}

@Module({})
export class SampleAsyncModule implements OnApplicationBootstrap {
  static forRoot(options: AsyncSampleModuleConfiguration): DynamicModule {
    return {
      module: SampleAsyncModule,
      providers: [
        {
          provide: 'ASYNC_OPTIONS',
          useValue: options
        },
        SampleAsyncService
      ],
      exports: [SampleAsyncService]
    };
  }

  onApplicationBootstrap() {
    console.log('Setting up async module ...');
  }
}