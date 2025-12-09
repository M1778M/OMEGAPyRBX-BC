// import ProfileStore from "@rbxts/profile-store";
import { Players } from "@rbxts/services";
import { Collector } from "shared/easycollector";

Collector.WrapEvent(
	"playeradded",
	Players.PlayerAdded.Connect(function (player: Player) {
		print("Player `" + player.Name + "` joined.");
	}),
);

Collector.WrapEvent(
	"playerremoving",
	Players.PlayerRemoving.Connect(function (player) {
		print("Player `" + player.Name + "` removing.");
	}),
);
