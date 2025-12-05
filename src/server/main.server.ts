import { makeHello } from "shared/module";
import { Players } from "@rbxts/services";

print(makeHello("main.server.ts"));
Players.PlayerAdded.Connect((player) => {
	print(`Player ${player.Name} joined the game!`);
});
