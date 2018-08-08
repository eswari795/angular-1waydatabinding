import { Scenario2moduleModule } from './scenario2module.module';

describe('Scenario2moduleModule', () => {
  let scenario2moduleModule: Scenario2moduleModule;

  beforeEach(() => {
    scenario2moduleModule = new Scenario2moduleModule();
  });

  it('should create an instance', () => {
    expect(scenario2moduleModule).toBeTruthy();
  });
});
