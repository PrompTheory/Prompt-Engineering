; Double-tap Ctrl+C to log copied text with timestamp
~^c::
    if (A_PriorHotkey = "~^c" && A_TimeSincePriorHotkey < 400) ; Double-tap speed <400ms
    {
        ClipWait, 1
        copiedText := Clipboard
        if (copiedText != "")
        {
            FormatTime, timestamp,, yyyy-MM-dd HH:mm:ss
            FileAppend, [%timestamp%] %copiedText%`n, %A_Desktop%\ClipboardLog.txt
            ; Optional: notification that text was logged
            TrayTip, Clipboard Logged, Your copied text was saved permanently., 1
        }
    }
return
