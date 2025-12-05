import { Players } from "@rbxts/services";

// Player Leaderstats [Cash, XP]
Players.PlayerAdded.Connect((player) => {
	const leaderstats = new Instance("Folder");
	leaderstats.Name = "leaderstats";
	leaderstats.Parent = player;

	const cash = new Instance("IntValue");
	cash.Name = "Cash";
	cash.Value = 0;
	cash.Parent = leaderstats;

	const xp = new Instance("IntValue");
	xp.Name = "XP";
	xp.Value = 0;
	xp.Parent = leaderstats;
});
