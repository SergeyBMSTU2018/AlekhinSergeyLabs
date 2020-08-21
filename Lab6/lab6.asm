; Адехин Сергей Лаб 6

MYCODE segment 'CODE'
    assume cs:MYCODE, ds:data
	
start:
	; Загрузка сегментного регистра данных DS
	mov ax, data
	mov es, ax
	
main:

	; Дополнительное требование: очистка экрана
	call clrscr;
	
	; Нахождение количества элементов командной строки
	mov si, 80h
	mov cl, [si]
	sub cl, 1
	
	; Переходим к первому элементу
	add si, 2
	
	; Нахождение длины первого параметра
	cycle: 
		
		mov al, [si]
		cmp al, ' '
		je copy
		inc si
		
	loop cycle
	
	copy:
	; Сохраняем длину первого параметра
	mov si, 80h
	mov al, [si]
	sub al, cl
	mov cl, al
	sub cl, 1
		
	push cx
	push cx
	
	mov si, 80h
	mov cl, [si]
	sub cl, 1	
		
	; Копируем в буфер первый параметр
	mov si, 80h
	add si, 2
	lea di, buf
	rep movsb
	
	push ES
    pop DS
	
	mov dx, offset firstStr
	call putst
	
	; Сравниваем первый параметр 
	lea di, buf
	lea si, surnameStr
	pop cx
	repe cmpsb
	jne neravn
	je ravn

	
	neravn:
	; Если не равен
	mov dx, offset wrongFirstStr
	call putst
	call clrf 
	jmp second
	
	; Если равен
	ravn:
	mov dx, offset successFirstStr
	call putst
	mov dx, offset surnameStr
	call putst
	call clrf


	second:
	mov si, offset buf
	pop cx
	add si, cx
	add si, 1
	mov al, [si]
	cmp al, '1'
	je er2
	jne ok2
	
	ok2:
	mov dx, offset successSecondStr
	call putst
	call clrf
	jmp exit
	
	er2:
	mov dx, offset wrongSecondStr
	call putst
	call clrf

exit:

	call getch
	
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

	
; Конец сегмента
MYCODE ends

data segment
	buf db 20 dup ('1')
	surnameStr db 'Алехин$'
	firstStr db 'Первый параметр $'
	successFirstStr db 'верен = $'
	wrongFirstStr db 'неправильный$'
	successSecondStr db 'Второй параметр есть!$'
	wrongSecondStr db 'Второй параметр отстутствует!$'
data ends

end start
	