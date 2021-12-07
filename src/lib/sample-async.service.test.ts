import { AsyncSampleModuleConfiguration } from './sample-async.module';
import { SampleAsyncService } from './sample-async.service';

describe('#async service', () => {
  it ('should be defined', () => {
    const instance = new SampleAsyncService({} as AsyncSampleModuleConfiguration);
    expect(instance).toBeDefined();
  });
  it ('should return the module configuration', async () => {
    const config: AsyncSampleModuleConfiguration = { name: 'Sample', target: 'Test' };
    const instance = new SampleAsyncService(config);
    expect(await instance.getModuleConfiguration()).toEqual(config);
  });
});