import { LiftBuilder } from './lift-builder';

describe('LiftsBuilder', () => {
  it('should return a lift object with the values properly set', () => {
    const lift = new LiftBuilder('Hip Thrusters').setReps(12).setSets(3).setWeight(45).build();
    expect(lift.name).toBe('Hip Thrusters');
    expect(lift.reps).toBe(12);
    expect(lift.sets).toBe(3);
    expect(lift.weight).toBe(45);
  });

  it('should return a lift object with the default values', () => {
    const lift = new LiftBuilder('Hip Thrusters').build();
    expect(lift.reps).toBe(0);
    expect(lift.sets).toBe(0);
    expect(lift.weight).toBe(0);
  });
});
