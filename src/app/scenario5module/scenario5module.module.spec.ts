import { Scenario5moduleModule } from './scenario5module.module';

describe('Scenario5moduleModule', () => {
  let scenario5moduleModule: Scenario5moduleModule;

  beforeEach(() => {
    scenario5moduleModule = new Scenario5moduleModule();
  });

  it('should create an instance', () => {
    expect(scenario5moduleModule).toBeTruthy();
  });
});
