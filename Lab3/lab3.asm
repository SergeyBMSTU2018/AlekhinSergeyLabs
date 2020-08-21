; Алехин Сергей ИУ5-41Б Вар 2 Лаб 3

MYCODE segment 'CODE'
    assume cs:MYCODE, ds:MYCODE
	
	symbolA db 'А'
	symbolB db 'Б'
	symbolС db 'В'
	contStr db 'Для выхода из программы нажмите "q"$'



dasjdasdfas
start:
	; Загрузка сегментного регистра данных DS
     push CS
     pop  DS
	
main:
	; Дополнительное требование: очистка экрана
	call clrscr;
	
	; Вывод буквы А
	mov dl, symbolA
	call putch
	call clrf
	
	; Вывод буквы Б
	mov dl, symbolB
	call putch
	call clrf
	
	; Вывод буквы В
	mov dl, symbolС
	call putch
	call clrf
	
	; Запрос на продолжение программы
	mov dx, offset contStr
	call putst
	call clrf
	call getch
	cmp al, 'q'
    je exit 
    jmp main 

exit:
	; Дополнительное требование: очистка экрана
	call clrscr;
	
	; Выход из программы
	mov al, 0
	mov ah, 4ch
	int 021h
	
	; Процедура - вывод строки на экрана
	putst proc
		mov ah, 09h
		int 021h
		ret
	putst endp
	
	; Процедура - вывод символа
	putch proc
		mov ah, 02h
		int 021h
		ret
	putch endp

	; Процедура - перевод строки
	clrf proc
		mov dl, 10
		call putch
		mov dl, 13
		call putch
		ret
	clrf endp 

	; Процедура - ввод символа
	getch proc   
		mov ah, 01h
		int 021h
        ret
	getch endp

	; Процедура - очистка экрана
	clrscr proc   
		mov ah, 00h 
		mov al, 02
		int 10h
		ret
	clrscr endp
	
; Конец сегмента
MYCODE ends
end start
	