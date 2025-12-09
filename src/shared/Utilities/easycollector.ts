const wrapped: Record<string, RBXScriptConnection> = {};

export class Collector {
	private static SafeCheck(event_unique: string): boolean {
		task.wait();
		return wrapped[event_unique] !== undefined;
	}

	static GetEvent(event_unique: string): RBXScriptConnection | void {
		task.wait();
		if (!this.SafeCheck(event_unique)) return;
		return wrapped[event_unique];
	}

	static WrapEvent(event_unique: string, event: RBXScriptConnection, lifetime?: number): void {
		task.wait();
		wrapped[event_unique] = event;
		if (lifetime !== undefined) this.AddItem(event_unique, lifetime);
	}

	static UnwrapEvent(event_unique: string): void {
		task.wait();
		if (!this.SafeCheck(event_unique)) return;
		delete wrapped[event_unique];
	}

	static Disconnect(event_unique: string): void {
		task.wait();
		if (!this.SafeCheck(event_unique)) return;
		wrapped[event_unique].Disconnect();
		delete wrapped[event_unique];
	}

	static AddItem(event_unique: string, lifetime?: number): void {
		task.delay(lifetime ?? 0, function () {
			Collector.Disconnect(event_unique);
		});
	}
}
