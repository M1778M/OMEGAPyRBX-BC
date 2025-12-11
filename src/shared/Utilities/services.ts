import { RunService } from "@rbxts/services";

// Initial Variables
const IsServer = RunService.IsServer();
const IsClient = RunService.IsClient();

// ---------------- Currency Service
// Types
enum Allow {
	Client,
	Server,
}
interface CurrencyType {
	CurrencyName: string;
	CurrencyIcon: Decal;
}
interface Currency {
	CType: CurrencyType;
	Balance: number;
}
type PlayerId = number;
// Service
class CurrencyService {
	private currencies: Array<CurrencyType>;
	private storage: Map<PlayerId, Currency>;
	getCurrencies = async () => Promise<Array<CurrencyType> | undefined>;
	newCurrency = async (curreny: CurrencyType) => {
		if (!this.allow(Allow.Server)) return;
		this.currencies.push(curreny);
	};
	searchCurrency = async (currencyName: string): Promise<CurrencyType | undefined> => {
		return this.currencies.find((value) => value.CurrencyName === currencyName);
	};
	allow = (mode: Allow): boolean => (IsClient && mode === Allow.Client) || (IsServer && mode === Allow.Server);
	updatePlayerCurrency = async (playerid: PlayerId, currency: Currency, new_balance: number) => {
		if (this.currencies.includes(currency.CType)) {
			currency.Balance = new_balance;
			if (this.storage.has(playerid)) this.storage.set(playerid, currency);
			else return false;
			return true;
		} else {
			warn("Attempt");
			return false;
		}
	};

	constructor() {
		this.currencies = [];
		this.storage = new Map();
	}
}

// ----------------------<<<<<<<<<<
