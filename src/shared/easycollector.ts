import { Debris } from "@rbxts/services";

const wrapped: Record<string, RBXScriptConnection> = {};

export class Collector {
	static WrapEvent(event_unique: string, event: RBXScriptConnection): void {
		wrapped[event_unique] = event;
	}
	static Disconnect(event_unique: string): void {
		wrapped[event_unique].Disconnect();
		delete wrapped[event_unique];
	}

	static AddItem(item: Instance, lifetime?: number): void {
		Debris.AddItem(item, lifetime);
	}
}
