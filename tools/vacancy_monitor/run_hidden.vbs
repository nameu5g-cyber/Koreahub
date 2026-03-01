Set WinScriptHost = CreateObject("WScript.Shell")
' Запускаем батник в скрытом режиме (0 = скрытое окно)
WinScriptHost.Run Chr(34) & "C:\Users\user\koreahub\tools\vacancy_monitor\start_monitor.bat" & Chr(34), 0
Set WinScriptHost = Nothing
