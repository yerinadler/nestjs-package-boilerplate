import { Inject } from '@nestjs/common';
import { AsyncSampleModuleConfiguration } from './sample-async.module';

export class SampleAsyncService {

  constructor(@Inject('ASYNC_OPTIONS') private readonly _options: AsyncSampleModuleConfiguration) {}

  async getModuleConfiguration() {
    return this._options;
  }
}