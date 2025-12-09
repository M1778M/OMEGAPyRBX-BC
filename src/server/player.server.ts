// import ProfileStore from "@rbxts/profile-store";
import { Workspace, Players } from "@rbxts/services";
import { Collector } from "shared/Utilities/easycollector";

Collector.WrapEvent(
	"playeradded",
	Players.PlayerAdded.Connect(function (player: Player) {
		Collector.WrapEvent(
			"characteradded",
			player.CharacterAdded.Connect(function (character) {
				(character.WaitForChild("Humanoid") as Humanoid).Health = 50;
				Collector.WrapEvent(
					"baseplate_touch",
					(Workspace.WaitForChild("Baseplate") as Part).Touched.Connect(function () {
						print("Player `" + player.Name + "` with character" + character.Name + " Touched baseplate.");
						(character.WaitForChild("Humanoid") as Humanoid).Health = 30;
					}),
				);
			}),
		);
	}),
);

Collector.WrapEvent(
	"playerremoving",
	Players.PlayerRemoving.Connect(function (player) {
		print("Player `" + player.Name + "` removing.");
	}),
);

task.delay(10, () => Collector.Disconnect("playerremoving"));
