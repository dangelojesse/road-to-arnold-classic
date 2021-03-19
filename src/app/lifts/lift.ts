import { LiftBuilder } from './lift-builder';

export class Lift {
    name: string;
    sets: number;
    reps: number;
    weight: number;

    constructor(liftBuilder: LiftBuilder) {
         this.name = liftBuilder.name;
         this.sets = liftBuilder.sets;
         this.reps = liftBuilder.reps;
         this.weight = liftBuilder.weight;
    }
}
