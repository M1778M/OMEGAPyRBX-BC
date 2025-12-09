// // import { makeHello } from "shared/module";
// // import { Players } from "@rbxts/services";
// import { ProviderService, ProviderServiceType } from "@rbxts/providerservice/";

// const PS = new ProviderService();

// PS.createProvider("TestService", ProviderServiceType.Client);
// const TestData = {
// 	x: 10,
// };
// PS.connect("TestService", "init", async () => {
// 	TestData.x = 12;
// 	print("Initializing");
// });
// PS.connect("TestService", "stop", async () => {
// 	print("Deinitalizing");
// 	TestData.x = 0;
// });

// print(TestData);
// PS.startAllProviders();
// print(TestData);
// task.wait(10);
// PS.stopAllProviders();
// print(TestData);
