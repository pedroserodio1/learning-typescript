interface Game {
    id? : string | number
    title: string;
    description: string;
    readonly genre: string;
    platform?: string[];
    getSimilars?: (title: string) => void
}

const tlou: Game = {
    id: 1,
    title: "The Last of Us",
    description: "The best game in the world",
    genre: "Action",
    platform: ["PS3", "PS4"],
    getSimilars: (title: string) => {
        console.log(`Similar games to ${title}: Uncharted, A Plague Tale, Metro`);
    }
}

console.log(tlou.genre);

if (tlou.getSimilars) {
    tlou.getSimilars(tlou.title)
}
interface Dlc extends Game {
    originalGame: Game;
    newContent: string[];
}

const leftbehind: Dlc = {
    title: "The Last of Us",
    description: "The best game in the world",
    genre: "Action",
    platform: ["PS3", "PS4"],
    originalGame: tlou,
    newContent: ["3 hours story", "new story"]
};

console.log(leftbehind);


class CreateGame implements Game {
    title: string;
    description: string;
    genre: string;
    

    constructor(t: string, d: string, g: string){
        this.title = t;
        this.description = d;
        this.genre = g
    }

}