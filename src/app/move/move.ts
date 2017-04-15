export class Move {
    name: string;
    steps: (Action|Branch|Randomizer|Trigger)[];
}

export class Action {
    type: string;
    text: string;
}

export class Branch {
    type: string;
    text: string;
    branches: string[];
}

export class Randomizer {
    type: string;
    text: string;
    results: RandomizerResult[];
    details: string;
}

export class RandomizerResult {
    name: string;
    text: string;
}

export class Trigger {
    type: string;
    text: string;
}
