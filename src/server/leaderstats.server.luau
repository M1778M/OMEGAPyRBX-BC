local Players = game:GetService("Players")
local RunService = game:GetService("RunService")

local ProfileStore = require(script.Parent.external_packages:WaitForChild("ProfileStore"))

local ProfileStoreX = ProfileStore.New("Test", {})

Players.PlayerAdded:Connect(function(player)
	if RunService:IsStudio() then
		local MockProfile = ProfileStoreX.Mock:StartSessionAsync(tostring(player.UserId))
		MockProfile.Data.FakeData = 10;
		MockProfile:EndSession();
	end
	
while true do
	task.wait(5)
	local MockProfile = ProfileStoreX.Mock:StartSessionAsync(tostring(player.UserId))
	print(MockProfile.Data.FakeData);
	MockProfile:EndSession();
end
end)
