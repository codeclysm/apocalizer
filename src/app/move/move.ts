export class Move {
    name: string;
    steps: (Action|Branch|Randomizer|Trigger)[];
}


export class Action {

}

export class Branch {

}

export class Randomizer {
    type: string;
    text: string;
    results: RandomizerResult[];
}

export class RandomizerResult {
    name: string;
    text: string;
}

export class Trigger {
    type: string;
    text: string;
}
