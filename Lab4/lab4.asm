; Алехин Сергей ИУ5-41Б Вар 2 Лаб 4

MYCODE segment 'CODE'
    assume cs:MYCODE, ds:MYCODE
	
	HEX_STRING DB '0123456789ABCDEF' ; таблица перекодировки
	startStr db 'Введите символ для начала работы программы$'
	continueStr db 'Для выхода из программы нажмите "q"$'

start:
	; Загрузка сегментного регистра данных DS
    push CS
    pop  DS
	mov bx, offset HEX_STRING
	
main:
	; Дополнительное требование: очистка экрана
	call clrscr;
	
	; Вывод строки-подсказки о том, что надо ввести букву
	mov dx, offset startStr
	call putst
	call clrf
	
	; Запрос на ввод символа
	call getch
	push ax
	
	; Циклический вывод букв на экран
	mov cx, 10
	cycle:
	
		; Вывод буквы
		pop ax	
		push ax
		mov dl, al
		push ax
		call putch
		
		; Тире
		mov dx, 32
		call putch
		mov dx, 205
		call putch
		mov dx, 32
		call putch
		
		; Вывод hex
		pop ax
		call hex
		pop ax
		
		; Increment буквы
		inc al
		push ax
		
	loop cycle
	
	
	; Запрос на продолжение программы
	mov dx, offset continueStr
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
		mov ah, 08h
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
	
	; Перевод в 16
	hex proc
	push ax
	shr al, 4
	xlat 
	mov dl, al
	call putch
	pop ax
	and al, 00001111b
	xlat 
	mov dl, al
	call putch
	mov dx, 'h'
    call putch
	call clrf
    ret
	hex endp
	
; Конец сегмента
MYCODE ends
end start
	