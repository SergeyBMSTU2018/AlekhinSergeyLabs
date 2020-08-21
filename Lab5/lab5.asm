; Алехин Сергей ИУ5-41Б Вар 2 Лаб 4

MYCODE segment 'CODE'
    assume cs:MYCODE, ds:data

start:
	; Загрузка сегментного регистра данных DS
	mov ax, data
	mov ds, ax
	mov bx, offset HEX_STRING
	
	; Сегмент
	buf db 20 dup (' ')
	
	; Дополнительное требование: очистка экрана
	call clrscr;
	
	mov cx, 10
	main:
	
		; Вывод строки-подсказки о том, что надо ввести строку
		mov dx, offset startStr
		call putst
		call clrf
		
		lea si, buf
		vvod:
		
		; Запись символов в память
		call getch
		mov [si], al
	
		; Сравнение с $
		cmp al, '$'
		je startvivod
		inc si
		jmp vvod 
		
		startvivod:
		
		; Равно
		mov dx, 32
		call putch
		mov dx, 205
		call putch
		mov dx, 32
		call putch
		
		; Сохранение cx
		push cx
		
		; Возвращение буфера
		mov cx, si
		lea si, buf
		sub cx, si
		
		vivod:
		
		; Получение символа из буфера
		mov al, [si]
		inc si
		
		; Вывод символа на экран
		mov dl, al
		call hex
		
		; Вывод пробела
		mov dx, 32
		call putch
	
		loop vivod
	
		; Восстановление cx
		pop cx
	
		; Запрос на продолжение программы
		call clrf
		mov dx, offset continueStr
		call putst
		call getch
		cmp al, 'q'
		je exit 
		call clrf
		
	loop main
	
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
	mov dx, 104
    call putch
    ret
	hex endp
	
; Конец сегмента
MYCODE ends

data segment
HEX_STRING db '0123456789ABCDEF' ; таблица перекодировки
startStr db 'Введите строку для перевода$'
continueStr db 'Для выхода из программы нажмите "q": $'
data ends
	
end start

	