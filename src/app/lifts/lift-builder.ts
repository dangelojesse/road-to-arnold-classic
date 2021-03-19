import { Lift } from "./lift";

export class LiftBuilder {
    private readonly _name: string;
    private _reps: number = 0;
    private _sets: number = 0;
    private _weight: number = 0;

    constructor(name: string) {
        this._name = name;
    }

    setReps(reps: number) {
        this._reps = reps;
        return this;
    }

    setSets(sets: number) {
        this._sets = sets;
        return this;
    }

    setWeight(weight: number) {
        this._weight = weight;
        return this;
    }


    build() {
        return new Lift(this);
    }

    get name() {
        return this._name;
    }

    get reps() {
        return this._reps;
    }

    get sets() {
        return this._sets;
    }

    get weight() {
        return this._weight;
    }
}
