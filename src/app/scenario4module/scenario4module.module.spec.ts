import { Scenario4moduleModule } from './scenario4module.module';

describe('Scenario4moduleModule', () => {
  let scenario4moduleModule: Scenario4moduleModule;

  beforeEach(() => {
    scenario4moduleModule = new Scenario4moduleModule();
  });

  it('should create an instance', () => {
    expect(scenario4moduleModule).toBeTruthy();
  });
});
