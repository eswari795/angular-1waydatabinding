import { Scenario3moduleModule } from './scenario3module.module';

describe('Scenario3moduleModule', () => {
  let scenario3moduleModule: Scenario3moduleModule;

  beforeEach(() => {
    scenario3moduleModule = new Scenario3moduleModule();
  });

  it('should create an instance', () => {
    expect(scenario3moduleModule).toBeTruthy();
  });
});
