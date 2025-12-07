let parent: Folder;

if (script.Parent === undefined) {
	throw "Script must be in a folder";
} else {
	parent = script.Parent as Folder;
}

const external_packages = parent.WaitForChild("external_packages").GetChildren();

export class LoaderInstance {
	module_: ModuleScript;

	static def(mod: ModuleScript | undefined): LoaderInstance | undefined {
		if (mod === undefined) return undefined;
		return new LoaderInstance(mod);
	}

	static sdef<T>(mod: T): LoaderInstance {
		return new LoaderInstance(mod as unknown as ModuleScript);
	}

	call(name: string, ...args: unknown[]): unknown {
		const req_mod = require(this.module_) as ModuleScript;
		const m = req_mod as unknown as { [key: string]: (...args: unknown[]) => unknown };
		const args_list: Array<string> = [];
		for (const arg of args) {
			args_list.push(tostring(arg));
		}
		print(this.module_.Name);
		print("Calling " + this.module_.Name + "." + name + "(" + args_list.join(", ") + ")");
		print(m);
		return m[name](...args);
	}

	set(key: string, value: unknown): void {
		const req_mod = require(this.module_) as ModuleScript;
		const m = req_mod as unknown as { [key: string]: unknown };
		print("Setting " + this.module_.Name + "." + key + " = " + tostring(value));
		m[key] = value;
	}

	constructor(mod: ModuleScript) {
		this.module_ = mod;
	}
}
export function import_external(name: string): ModuleScript | undefined {
	for (const module of external_packages) {
		if (module.Name === name) {
			return module as ModuleScript;
		} else {
			return undefined;
		}
	}
}
