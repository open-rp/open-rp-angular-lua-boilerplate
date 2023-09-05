-- Function to open the NUI interface
function OpenNUIInterface()
  print("Opening the interface")
  TriggerNuiInterface(true)
end

-- function to close the NUI interface
function CloseNUIInterface()
  print("Opening the interface")
  TriggerNuiInterface(false)
end

-- function to trigger the NUI interface state
function TriggerNuiInterface(isVisible)
  print("Triggering the interface")
  SendNUIMessage({
    data = {
      type = "DisplayState",
      attributes = {
        isVisible = isVisible
      }
    }
  });
  SetNuiFocus(isVisible, isVisible)
end