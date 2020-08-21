echo off
cls
REM Запуск программы

REM Проверка на правильность 1 параметра
if "%1"=="yes" set res=true
if "%1"=="no" set res=true
if not defined res (echo Enter "yes" or "no" as the first parameter & goto fin)

REM Проверка на правильность 2 параметра
if "%2"=="" (echo Enter file name & goto fin)

:menu
cls

REM Вывод параметров программы
echo Clear screen: %1
echo File name: %2

REM запуск меню
echo 1. Hello;
echo 2. Call;
echo 3. Color Red;
echo 4. Color White;
echo 5. Exit.
echo 6. Color %

REM Выбор пункта меню
choice /C:123456
Set met=p%ERRORLEVEL%
goto %met%

REM Выполнение 1 пункта меню
:p1
echo 1
echo Hello Word!
pause
goto menu

REM Выполнение 2 пункта меню
:p2
echo 2
Call %2
pause
goto menu

REM Выполнение 3 пункта меню
:p3
echo 3
color 4
pause
goto menu

REM Выполнение 4 пункта меню
:p4
echo 4
color 7
pause
goto menu

REM Выполнение 5 пункта меню
:p5
echo 5
if "%1"=="yes" (echo The screen will be cleaned & pause & cls) else (echo The screen won't be cleaned & pause)
goto fin

REM Выполнение 6 пункта меню
:p6
echo 6
color %3
pause
goto menu

REM Окончание программы
:fin
echo Exit