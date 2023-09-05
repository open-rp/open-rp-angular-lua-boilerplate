

function OpenNUIInterface()
  print("Opening the interface")
  SetNuiFocus(true, true)
  SendNUIMessage({
    data = {
      type = "DisplayState",
      attributes = {
        isVisible = true
      }
    }
  });
end

function CloseNUIInterface()
  print("Opening the interface")
  SetNuiFocus(true, true)
  SendNUIMessage({
    data = {
      type = "DisplayState",
      attributes = {
        isVisible = false
      }
    }
  });
end

RegisterCommand("openme", function() OpenNUIInterface() end);