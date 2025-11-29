-- Spawns a WebUI with the HTML file you just created
-- In development mode, you can set to WebUI('helix-ui-module-template','http://localhost:5173') for hot reloading
local UI = WebUI('helix-ui-module-template', 'helix-ui-module-template/web/index.html') -- WebUI('helix-ui-module-template', 'helix-ui-module-template/web/index.html')
local uiReady = false


UI:RegisterEventHandler('Ready', function()
    print("UI Ready")
    uiReady = true
    -- Set UI visible as soon as you connect, for development use
    -- ShowUI()

    ShowUI()
end)

-- Destroy the widget when the package is unloaded to support hot-reloading
function onShutdown()
    if UI then UI:Destroy() end
end

function SendUIMessage(action, data)
    UI:SendEvent(action, data)
end

function SetUiVisible(visible)
    SendUIMessage("setVisible", visible)
end

function ShowUI()
    UI:SetInputMode(1)
    UI:BringToFront()
    SetUiVisible(true)
end

function HideUi()
    UI:SetInputMode(0)
    SetUiVisible(false)
end

UI:RegisterEventHandler('hideUI', function(data, cb)
    HideUi()
    cb(true)
end)
