import { SampleService } from './sample.service';

describe('#sample service', () => {
  it('should be defined', () => {
    const instance = new SampleService();
    expect(instance).toBeDefined();
  });
  it('should return the correct message', () => {
    expect(new SampleService().getSampleMessage()).toEqual('Hello Sample Message ...');
  });
});