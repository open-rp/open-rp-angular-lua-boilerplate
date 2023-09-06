-- One generalized callback to handle processes.
-- Responses will follow open JSON API standards
RegisterNUICallback('callback', function(data, cb)
  if data.data.type == "DisplayState" then
    local isVisible = data.data.attributes.isVisible
    if not isVisible then
      CloseNUIInterface()
    end
  -- elseif data.type == CallbackType.AnimationCancel then
  --   SetNuiFocus(false, false)
  -- elseif data.type == CallbackType.AnimationSave then
  --   SetNuiFocus(false, false)
  -- elseif data.type == CallbackType.AnimationDeckClose then
  --   SetNuiFocus(false, false)
  end
  cb('ok')
end)